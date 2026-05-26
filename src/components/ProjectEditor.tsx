export function ProjectEditor({ content, onChange }: { content: string; onChange: (value: string) => void }) {
  return <textarea value={content} onChange={(e) => onChange(e.target.value)} className="h-[420px] w-full rounded-xl border border-border bg-slate-950 p-3 font-mono text-sm" spellCheck={false} />;
}
