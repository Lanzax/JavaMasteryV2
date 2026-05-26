import { ExerciseCard } from '@/components/ExerciseCard';
import { htmlExercises } from '@/data/htmlExercises';

export default function HtmlExercisesPage() {
  return <section className="space-y-4"><h1 className="text-3xl font-bold">Esercizi HTML</h1><div className="grid gap-3 md:grid-cols-2">{htmlExercises.map((e) => <ExerciseCard key={e.id} exercise={e} completed={false} />)}</div></section>;
}
