import { Course } from '@/types/learning';
import { Button, Card } from './ui';

export function CourseCard({ course }: { course: Course }) {
  const href = `/learn/${course.id}`;
  return <Card><h3 className="mb-2 text-xl font-semibold">{course.title}</h3><p className="mb-4 text-slate-300">{course.description}</p>{course.active ? <Button href={href}>Inizia</Button> : <span className="text-sm text-slate-400">Coming soon</span>}</Card>;
}
