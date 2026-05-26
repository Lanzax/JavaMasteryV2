'use client';
import { useEffect, useMemo, useState } from 'react';
import { Card } from '@/components/ui';
import { javaExercises } from '@/data/javaExercises';

const COMPLETED_KEY = 'jm_completed_exercises';
const XP_KEY = 'jm_xp';

export default function Dashboard() {
  const [completed, setCompleted] = useState<string[]>([]);
  const [xp, setXp] = useState(0);

  useEffect(() => {
    setCompleted(JSON.parse(localStorage.getItem(COMPLETED_KEY) ?? '[]'));
    setXp(Number(localStorage.getItem(XP_KEY) ?? '0'));
  }, []);

  const completionPct = useMemo(() => Math.round((completed.length / javaExercises.length) * 100), [completed.length]);

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card><p className="text-sm">Progresso esercizi Java</p><p className="text-2xl font-bold">{completionPct}%</p><p className="text-xs text-slate-400">{completed.length}/{javaExercises.length} completati</p></Card>
      <Card><p className="text-sm">XP</p><p className="text-2xl font-bold">{xp} XP</p></Card>
      <Card><p className="text-sm">Ultimi esercizi</p><ul className="text-sm text-slate-300">{completed.slice(-3).reverse().map((id) => <li key={id}>{id}</li>)}{completed.length===0 && <li>Nessun esercizio completato</li>}</ul></Card>
    </div>
  );
}
