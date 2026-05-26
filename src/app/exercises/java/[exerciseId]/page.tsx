'use client';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import { CodeEditor } from '@/components/CodeEditor';
import { ConsolePanel } from '@/components/ConsolePanel';
import { RunButton } from '@/components/RunButton';
import { getJavaExerciseById } from '@/data/javaExercises';
import { RemoteJavaExecutionProvider } from '@/lib/execution';

const COMPLETED_KEY = 'jm_completed_exercises';
const XP_KEY = 'jm_xp';

export default function ExerciseDetailPage() {
  const params = useParams<{ exerciseId: string }>();
  const exercise = getJavaExerciseById(params.exerciseId);
  const executor = useMemo(() => new RemoteJavaExecutionProvider(), []);
  const [code, setCode] = useState(exercise?.starterCode ?? '');
  const [consoleOut, setConsoleOut] = useState('');
  const [status, setStatus] = useState('hint');
  const [validation, setValidation] = useState('Non valutato');
  const [hintLevel, setHintLevel] = useState(0);

  if (!exercise) return <section><p>Esercizio non trovato.</p><Link href="/exercises/java">Torna alla lista</Link></section>;

  const validate = (stdout: string) => stdout.trim() === (exercise.expectedOutput ?? '').trim();

  const run = async () => {
    const res = await executor.run(code);
    const combined = [res.output, res.error].filter(Boolean).join('\n');
    setConsoleOut(combined);
    setStatus(res.status);
    setValidation('Eseguito. Premi Submit per validare.');
  };

  const submit = async () => {
    const res = await executor.run(code);
    const combined = [res.output, res.error].filter(Boolean).join('\n');
    setConsoleOut(combined);
    setStatus(res.status);
    if (exercise.validationType === 'output' && validate(res.output)) {
      setValidation(`✅ Corretto! +${exercise.xp} XP`);
      const done = new Set<string>(JSON.parse(localStorage.getItem(COMPLETED_KEY) ?? '[]'));
      const already = done.has(exercise.id);
      done.add(exercise.id);
      localStorage.setItem(COMPLETED_KEY, JSON.stringify([...done]));
      if (!already) {
        const xp = Number(localStorage.getItem(XP_KEY) ?? '0');
        localStorage.setItem(XP_KEY, String(xp + exercise.xp));
      }
    } else {
      setValidation('❌ Output non corretto. Controlla i suggerimenti.');
      setHintLevel((h) => Math.min(h + 1, exercise.hints.length));
    }
  };

  return (
    <section className="space-y-4">
      <Link href="/exercises/java" className="text-sm text-slate-300 hover:text-white">← Torna agli esercizi</Link>
      <h1 className="text-3xl font-bold">{exercise.title}</h1>
      <ul className="list-disc pl-6 text-slate-200">{exercise.instructions.map((s) => <li key={s}>{s}</li>)}</ul>
      <CodeEditor code={code} onChange={setCode} />
      <div className="flex gap-2">
        <RunButton onClick={run} />
        <button onClick={submit} className="rounded-lg border border-border px-4 py-2 font-semibold">Submit</button>
      </div>
      <ConsolePanel output={consoleOut} status={status} />
      <div className="rounded border border-border bg-card/70 p-3">
        <p className="font-semibold">Risultato validazione</p>
        <p className="text-sm text-slate-300">{validation}</p>
      </div>
      <div className="rounded border border-border bg-card/70 p-3">
        <p className="font-semibold">Suggerimenti progressivi</p>
        {hintLevel === 0 ? <p className="text-sm text-slate-400">Nessun suggerimento mostrato.</p> : <ul className="list-disc pl-6 text-sm text-slate-300">{exercise.hints.slice(0, hintLevel).map((h) => <li key={h}>{h}</li>)}</ul>}
      </div>
    </section>
  );
}
