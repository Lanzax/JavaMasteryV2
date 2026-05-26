import { executeJava } from './runner.mjs';

let data = '';
process.stdin.on('data', (c) => (data += c.toString()));
process.stdin.on('end', async () => {
  try {
    const payload = JSON.parse(data || '{}');
    const res = await executeJava(payload);
    process.stdout.write(JSON.stringify(res));
    process.exit(0);
  } catch (e) {
    process.stderr.write(e instanceof Error ? e.message : 'Executor error');
    process.exit(1);
  }
});
