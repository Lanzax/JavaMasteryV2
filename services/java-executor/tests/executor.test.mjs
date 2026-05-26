import test from 'node:test';
import assert from 'node:assert/strict';
import { executeJava } from '../src/runner.mjs';

test('hello world', async () => {
  const res = await executeJava({ files: [{ name: 'Main.java', content: 'public class Main{public static void main(String[]args){System.out.println("Hello");}}' }], mainClass: 'Main' });
  assert.equal(res.status, 'success');
  assert.match(res.stdout, /Hello/);
});

test('compile error', async () => {
  const res = await executeJava({ files: [{ name: 'Main.java', content: 'public class Main { public static void main(String[] args) { System.out.println("x") } }' }], mainClass: 'Main' });
  assert.equal(res.status, 'compile_error');
});

test('timeout infinite loop', async () => {
  const res = await executeJava({ files: [{ name: 'Main.java', content: 'public class Main{public static void main(String[]args){while(true){}}}' }], mainClass: 'Main' });
  assert.equal(res.status, 'timeout');
});
