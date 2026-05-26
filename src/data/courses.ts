import { Course } from '@/types/learning';
import { javaCourse } from './javaCourse';

export const courses: Course[] = [
  javaCourse,
  { id: 'html', title: 'HTML', description: 'Markup e semantica web', active: false, chapters: [] },
  { id: 'css', title: 'CSS', description: 'Layout e design system', active: false, chapters: [] },
  { id: 'react', title: 'React', description: 'UI component-based moderna', active: false, chapters: [] },
  { id: 'spring', title: 'Spring', description: 'Backend Java enterprise', active: false, chapters: [] },
];
