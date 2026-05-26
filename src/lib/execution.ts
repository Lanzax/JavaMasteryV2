export interface ExecutionResult { output: string; status: 'success' | 'error' | 'hint'; }
export interface ExecutionProvider { run(code: string): ExecutionResult; }

export class JavaLessonExecutionProvider implements ExecutionProvider {
  run(code: string): ExecutionResult {
    const hasMain = /public\s+static\s+void\s+main\s*\(/.test(code);
    const hasPrint = /System\.out\.println\s*\(/.test(code);
    const hasTarget = /System\.out\.println\s*\(\s*"Ciao Java!"\s*\)/.test(code);

    if (!hasMain) return { status: 'error', output: 'Errore simulato: metodo main mancante.' };
    if (!hasPrint) return { status: 'hint', output: 'Suggerimento: usa System.out.println(...) per stampare testo.' };
    if (hasTarget) return { status: 'success', output: 'Ciao Java!' };
    return { status: 'hint', output: 'Il codice compila quasi: prova a stampare esattamente "Ciao Java!".' };
  }
}
