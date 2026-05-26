import Link from 'next/link';
import { Exercise } from '@/types/learning';
import { Card } from './ui';

export function ExerciseCard({ exercise, completed }: { exercise: Exercise; completed: boolean }) {
  return (
    <Card>
      <h4 className="font-semibold">{exercise.title}</h4>
      <p className="mt-1 text-sm text-slate-300">XP: {exercise.xp}</p>
      <p className="mt-1 text-xs text-slate-400">{completed ? 'Completato' : 'Da completare'}</p>
      <Link href={`/exercises/java/${exercise.id}`} className="mt-3 inline-block rounded border border-border px-3 py-1 text-sm hover:bg-white/5">
        Apri esercizio
      </Link>
    </Card>
  );
}
