export type ExecutionStatus = 'success' | 'compile_error' | 'runtime_error' | 'timeout' | 'hint' | 'error';
export interface ExecutionResult { output: string; error?: string; status: ExecutionStatus; exitCode: number; durationMs: number; }
export interface ExecutionProvider { run(code: string): Promise<ExecutionResult>; }

export class MockJavaExecutionProvider implements ExecutionProvider {
  async run(code: string): Promise<ExecutionResult> {
    const hasMain = /public\s+static\s+void\s+main\s*\(/.test(code);
    const hasPrint = /System\.out\.println\s*\(/.test(code);
    const hasTarget = /System\.out\.println\s*\(\s*"Ciao Java!"\s*\)/.test(code);
    if (!hasMain) return { status: 'error', output: '', error: 'Errore simulato: metodo main mancante.', exitCode: 1, durationMs: 0 };
    if (!hasPrint) return { status: 'hint', output: '', error: 'Suggerimento: usa System.out.println(...)', exitCode: 1, durationMs: 0 };
    if (hasTarget) return { status: 'success', output: 'Ciao Java!', exitCode: 0, durationMs: 0 };
    return { status: 'hint', output: '', error: 'Quasi! Stampa esattamente "Ciao Java!".', exitCode: 1, durationMs: 0 };
  }
}

export class RemoteJavaExecutionProvider implements ExecutionProvider {
  constructor(private endpoint = '/api/execute/java', private fallback: ExecutionProvider = new MockJavaExecutionProvider()) {}
  async run(code: string): Promise<ExecutionResult> {
    try {
      const res = await fetch(this.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ files: [{ name: 'Main.java', content: code }], mainClass: 'Main' }),
      });
      if (!res.ok) throw new Error('backend not available');
      const data = await res.json() as { stdout: string; stderr: string; exitCode: number; durationMs: number; status: ExecutionStatus };
      return { status: data.status, output: data.stdout, error: data.stderr, exitCode: data.exitCode, durationMs: data.durationMs };
    } catch {
      return this.fallback.run(code);
    }
  }
}
