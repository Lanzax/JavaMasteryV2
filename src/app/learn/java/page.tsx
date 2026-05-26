import { ChapterCard } from '@/components/ChapterCard';
import { javaCourse } from '@/data/javaCourse';
export default function JavaLearn() { return <section className="space-y-4"><h1 className="text-3xl font-bold">Percorso Java</h1><div className="grid gap-3 md:grid-cols-2">{javaCourse.chapters.map((c) => <ChapterCard key={c.id} chapter={c} />)}</div></section>; }
