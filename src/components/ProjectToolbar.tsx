export function ProjectToolbar({ onRun, onSave, projectName }: { onRun: () => void; onSave: () => void; projectName: string }) {
  return <div className="flex items-center justify-between rounded-xl border border-border bg-card/70 p-3"><p className="font-semibold">{projectName}</p><div className="flex gap-2"><button onClick={onSave} className="rounded border border-border px-3 py-1 text-sm">Save</button><button onClick={onRun} className="rounded bg-accent px-3 py-1 text-sm font-semibold">Run project</button></div></div>;
}
