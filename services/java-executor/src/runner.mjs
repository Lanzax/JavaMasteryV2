import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { validatePayload } from './validate.mjs';

function timedSpawn(cmd, args, timeoutMs = 3000) {
  return new Promise((resolve) => {
    const started = Date.now();
    const child = spawn(cmd, args, { stdio: ['ignore', 'pipe', 'pipe'] });
    let stdout = '', stderr = '', timedOut = false;
    const timer = setTimeout(() => { timedOut = true; child.kill('SIGKILL'); }, timeoutMs);
    child.stdout.on('data', (d) => (stdout += d.toString()));
    child.stderr.on('data', (d) => (stderr += d.toString()));
    child.on('close', (code) => { clearTimeout(timer); resolve({ code: code ?? 1, stdout, stderr, timedOut, durationMs: Date.now() - started }); });
  });
}

export async function executeJava(payload) {
  validatePayload(payload);
  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'jm-java-'));
  try {
    for (const f of payload.files) await fs.writeFile(path.join(tempDir, f.name), f.content, 'utf8');

    const compileCmd = [
      'run','--rm','--network','none','--cpus','0.5','--memory','256m','--pids-limit','64',
      '--security-opt','no-new-privileges:true','--user','1000:1000','-v',`${tempDir}:/workspace:rw`,'-w','/workspace',
      'eclipse-temurin:21-jdk','javac',...payload.files.map(f=>f.name)
    ];
    const comp = await timedSpawn('docker', compileCmd, 5000);
    if (comp.timedOut) return { stdout: comp.stdout, stderr: comp.stderr, exitCode: 124, durationMs: comp.durationMs, status: 'timeout' };
    if (comp.code !== 0) return { stdout: comp.stdout, stderr: comp.stderr, exitCode: comp.code, durationMs: comp.durationMs, status: 'compile_error' };

    const runCmd = [
      'run','--rm','--network','none','--cpus','0.5','--memory','256m','--pids-limit','64',
      '--security-opt','no-new-privileges:true','--user','1000:1000','-v',`${tempDir}:/workspace:rw`,'-w','/workspace',
      'eclipse-temurin:21-jdk','java',payload.mainClass
    ];
    const run = await timedSpawn('docker', runCmd, 3000);
    if (run.timedOut) return { stdout: run.stdout, stderr: run.stderr, exitCode: 124, durationMs: run.durationMs, status: 'timeout' };
    if (run.code !== 0) return { stdout: run.stdout, stderr: run.stderr, exitCode: run.code, durationMs: run.durationMs, status: 'runtime_error' };
    return { stdout: run.stdout, stderr: run.stderr, exitCode: 0, durationMs: run.durationMs, status: 'success' };
  } finally {
    await fs.rm(tempDir, { recursive: true, force: true });
  }
}
