import { ExerciseCard } from '@/components/ExerciseCard';
const exercises = ['Stampa il tuo nome', 'Somma due numeri', 'Controlla pari/dispari', 'Ciclo da 1 a 10', 'Crea una classe Persona'];
export default function JavaExercises() { return <section className="space-y-4"><h1 className="text-3xl font-bold">Esercizi Java</h1><div className="grid gap-3 md:grid-cols-2">{exercises.map((e) => <ExerciseCard key={e} title={e} />)}</div></section>; }
