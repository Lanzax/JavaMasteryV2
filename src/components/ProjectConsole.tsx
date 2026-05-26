export function ProjectConsole({ output }: { output: string }) {
  return <div className="rounded-xl border border-border bg-black p-3 font-mono text-sm"><p className="mb-2 text-white">Console</p><pre className="whitespace-pre-wrap text-green-300">{output || 'Nessun output.'}</pre></div>;
}
