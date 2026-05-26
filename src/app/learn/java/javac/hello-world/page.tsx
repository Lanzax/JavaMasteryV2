'use client';
import { useEffect, useMemo, useState } from 'react';
import { CodeEditor } from '@/components/CodeEditor';
import { ConsolePanel } from '@/components/ConsolePanel';
import { LessonLayout } from '@/components/LessonLayout';
import { ProgressBadge } from '@/components/ProgressBadge';
import { QuizCard } from '@/components/QuizCard';
import { RunButton } from '@/components/RunButton';
import { javaCourse } from '@/data/javaCourse';
import { JavaLessonExecutionProvider } from '@/lib/execution';

const CODE_KEY = 'jm_java_hello_world_code';
const DONE_KEY = 'jm_completed_lessons';

export default function HelloWorldLesson() {
  const lesson = javaCourse.chapters[1].lessons[0];
  const executor = useMemo(() => new JavaLessonExecutionProvider(), []);
  const [code, setCode] = useState(lesson.starterCode);
  const [output, setOutput] = useState('');
  const [status, setStatus] = useState('hint');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(CODE_KEY);
    if (saved) setCode(saved);
    const done = JSON.parse(localStorage.getItem(DONE_KEY) ?? '[]') as string[];
    setCompleted(done.includes(lesson.id));
  }, [lesson.id]);

  useEffect(() => { localStorage.setItem(CODE_KEY, code); }, [code]);

  const run = () => {
    const res = executor.run(code);
    setStatus(res.status);
    setOutput(res.output);
    if (res.status === 'success') {
      const done = new Set<string>(JSON.parse(localStorage.getItem(DONE_KEY) ?? '[]'));
      done.add(lesson.id);
      localStorage.setItem(DONE_KEY, JSON.stringify([...done]));
      setCompleted(true);
    }
  };

  return (
    <LessonLayout title="JAVAC e Hello World">
      <ProgressBadge completed={completed} />
      <section><h2 className="font-semibold">Obiettivi</h2><ul className="list-disc pl-6">{lesson.objectives.map((o) => <li key={o}>{o}</li>)}</ul></section>
      <section><h2 className="font-semibold">Teoria</h2><ul className="list-disc pl-6">{lesson.theory.map((t) => <li key={t}>{t}</li>)}</ul><p className="mt-2 text-slate-300">JDK include compiler e tool, JRE è il runtime, JVM esegue bytecode su più piattaforme.</p></section>
      <CodeEditor code={code} onChange={setCode} />
      <div className="flex gap-2"><RunButton onClick={run} /><button onClick={() => {setCode(lesson.starterCode); setOutput('Reset completato.'); setStatus('hint');}} className="rounded-lg border border-border px-4 py-2">Reset</button></div>
      <ConsolePanel output={output} status={status} />
      <QuizCard question={lesson.quiz.question} options={lesson.quiz.options} answer={lesson.quiz.answer} />
      <section className="rounded-xl border border-red-700/40 bg-red-950/20 p-4"><h3 className="font-semibold text-red-300">Errori comuni</h3><ul className="list-disc pl-6 text-red-200">{lesson.commonErrors.map((e) => <li key={e}>{e}</li>)}</ul></section>
    </LessonLayout>
  );
}
