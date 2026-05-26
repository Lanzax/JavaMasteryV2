'use client';
import { useMemo, useState } from 'react';
import { CodeEditor } from '@/components/CodeEditor';
import { ConsolePanel } from '@/components/ConsolePanel';
import { RunButton } from '@/components/RunButton';
import { RemoteJavaExecutionProvider } from '@/lib/execution';

const starter = `public class Main {\n  public static void main(String[] args) {\n    System.out.println("Playground Java");\n  }\n}`;

export default function Playground() {
  const executor = useMemo(() => new RemoteJavaExecutionProvider(), []);
  const [code, setCode] = useState(starter);
  const [out, setOut] = useState('');
  const [status, setStatus] = useState('hint');
  return <section className="space-y-4"><h1 className="text-3xl font-bold">Playground Java</h1><CodeEditor code={code} onChange={setCode} /><RunButton onClick={async () => { const res = await executor.run(code); setOut([res.output, res.error].filter(Boolean).join('\n')); setStatus(res.status); }} /><ConsolePanel output={out} status={status} /></section>;
}
