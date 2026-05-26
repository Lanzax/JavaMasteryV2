'use client';
import { useState } from 'react';

export function NewProjectModal({ onCreate }: { onCreate: (name: string) => void }) {
  const [name, setName] = useState('Java Project');
  return <div className="rounded-xl border border-border bg-card/80 p-4"><h2 className="mb-3 text-lg font-semibold">Nuovo progetto Java</h2><input className="mb-3 w-full rounded border border-border bg-slate-900 p-2" value={name} onChange={(e) => setName(e.target.value)} /><button onClick={() => onCreate(name.trim() || 'Java Project')} className="rounded bg-accent px-4 py-2 font-semibold">Crea progetto</button></div>;
}
