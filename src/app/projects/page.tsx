'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { loadProjects } from '@/lib/projects';
import { Project } from '@/types/project';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => { setProjects(loadProjects()); }, []);

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between"><h1 className="text-3xl font-bold">Progetti</h1><Link href="/projects/new" className="rounded bg-accent px-4 py-2 font-semibold">Nuovo progetto Java</Link></div>
      <div className="grid gap-3 md:grid-cols-2">
        {projects.map((p) => <Link key={p.id} href={`/projects/${p.id}`} className="rounded-xl border border-border bg-card/70 p-4"><p className="font-semibold">{p.name}</p><p className="text-sm text-slate-400">{p.files.length} file · {new Date(p.updatedAt).toLocaleString()}</p></Link>)}
        {projects.length === 0 && <p className="text-slate-400">Nessun progetto ancora. Crea il primo progetto Java.</p>}
      </div>
    </section>
  );
}
