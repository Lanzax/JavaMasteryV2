'use client';
import { useEffect, useState } from 'react';
import { ExerciseCard } from '@/components/ExerciseCard';
import { javaExercises } from '@/data/javaExercises';

const KEY = 'jm_completed_exercises';

export default function JavaExercises() {
  const [completed, setCompleted] = useState<string[]>([]);
  useEffect(() => { setCompleted(JSON.parse(localStorage.getItem(KEY) ?? '[]')); }, []);

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Esercizi Java</h1>
      <div className="grid gap-3 md:grid-cols-2">
        {javaExercises.map((e) => <ExerciseCard key={e.id} exercise={e} completed={completed.includes(e.id)} />)}
      </div>
    </section>
  );
}
