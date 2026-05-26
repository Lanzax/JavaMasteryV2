import { ChapterCard } from '@/components/ChapterCard';
import { htmlCourse } from '@/data/htmlCourse';

export default function HtmlLearnPage() {
  return <section className="space-y-4"><h1 className="text-3xl font-bold">Percorso HTML</h1><div className="grid gap-3 md:grid-cols-2">{htmlCourse.chapters.map((c) => <ChapterCard key={c.id} chapter={c} />)}</div></section>;
}
