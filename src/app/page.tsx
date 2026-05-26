import { CourseCard } from '@/components/CourseCard';
import { courses } from '@/data/courses';

export default function Home() {
  return (
    <section className="space-y-8">
      <div className="rounded-2xl border border-border bg-gradient-to-r from-slate-900 to-indigo-950 p-8">
        <h1 className="text-4xl font-bold">Impara a programmare da zero a professionista</h1>
        <a href="/learn/java" className="mt-4 inline-block rounded-lg bg-accent px-4 py-2 font-semibold">Inizia Java</a>
      </div>
      <div className="grid gap-4 md:grid-cols-3">{courses.map((course) => <CourseCard key={course.id} course={course} />)}</div>
    </section>
  );
}
