import { ProjectFile } from '@/types/project';

export function ProjectFileTree({ files, selectedPath, onSelect }: { files: ProjectFile[]; selectedPath: string; onSelect: (path: string) => void }) {
  return <aside className="rounded-xl border border-border bg-card/70 p-3"><p className="mb-2 text-sm font-semibold">File tree</p><ul className="space-y-1">{files.map((f) => <li key={f.path}><button onClick={() => onSelect(f.path)} className={`w-full rounded px-2 py-1 text-left text-sm ${selectedPath===f.path?'bg-accent/40 text-white':'hover:bg-white/5'}`}>{f.path}</button></li>)}</ul></aside>;
}
