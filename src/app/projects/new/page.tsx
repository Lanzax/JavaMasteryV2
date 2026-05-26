'use client';
import { useRouter } from 'next/navigation';
import { NewProjectModal } from '@/components/NewProjectModal';
import { createJavaProject, loadProjects, saveProjects } from '@/lib/projects';

export default function NewProjectPage() {
  const router = useRouter();
  const onCreate = (name: string) => {
    const project = createJavaProject(name);
    const all = loadProjects();
    all.unshift(project);
    saveProjects(all);
    router.push(`/projects/${project.id}`);
  };

  return <section className="max-w-xl"><NewProjectModal onCreate={onCreate} /></section>;
}
