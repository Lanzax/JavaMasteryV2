'use client';
export function CodeEditor({ code, onChange }: { code: string; onChange: (v: string) => void }) { return <textarea value={code} onChange={(e) => onChange(e.target.value)} className="h-72 w-full rounded-xl border border-border bg-slate-950 p-3 font-mono text-sm text-slate-100" spellCheck={false} />; }
