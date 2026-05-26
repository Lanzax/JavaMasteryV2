import { spawn } from 'node:child_process';

export type ExecuteResponse = { stdout: string; stderr: string; exitCode: number; durationMs: number; status: 'success' | 'compile_error' | 'runtime_error' | 'timeout' };

export async function executeJava(payload: unknown): Promise<ExecuteResponse> {
  return new Promise((resolve, reject) => {
    const child = spawn('node', ['services/java-executor/src/bridge-runner.mjs'], { stdio: ['pipe', 'pipe', 'pipe'] });
    let out = '', err = '';
    child.stdout.on('data', (d) => (out += d.toString()));
    child.stderr.on('data', (d) => (err += d.toString()));
    child.on('close', (code) => {
      if (code !== 0) return reject(new Error(err || 'Executor failed'));
      try { resolve(JSON.parse(out)); } catch { reject(new Error('Invalid executor response')); }
    });
    child.stdin.write(JSON.stringify(payload));
    child.stdin.end();
  });
}
