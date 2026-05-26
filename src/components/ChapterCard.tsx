import { Chapter } from '@/types/learning';
import { Card } from './ui';
export function ChapterCard({ chapter }: { chapter: Chapter }) { return <Card><h4 className="font-semibold">{chapter.title}</h4><p className="text-sm text-slate-300">{chapter.description}</p></Card>; }
