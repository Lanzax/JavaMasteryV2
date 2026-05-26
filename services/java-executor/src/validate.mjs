import { MAX_FILE_SIZE, MAX_FILES, MAX_TOTAL_SIZE } from './types.mjs';

export function validatePayload(payload) {
  if (!payload || !Array.isArray(payload.files) || typeof payload.mainClass !== 'string') {
    throw new Error('Invalid payload');
  }
  if (payload.files.length < 1 || payload.files.length > MAX_FILES) throw new Error('Invalid files count');
  let total = 0;
  for (const f of payload.files) {
    if (!/^[A-Za-z0-9_]+\.java$/.test(f.name)) throw new Error(`Invalid file name: ${f.name}`);
    if (f.name.includes('..') || f.name.includes('/') || f.name.includes('\\')) throw new Error('Path traversal detected');
    if (typeof f.content !== 'string') throw new Error('Invalid file content');
    if (f.content.length > MAX_FILE_SIZE) throw new Error('File too large');
    total += f.content.length;
  }
  if (total > MAX_TOTAL_SIZE) throw new Error('Payload too large');
  if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(payload.mainClass)) throw new Error('Invalid mainClass');
}
