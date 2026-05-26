export function BrowserFrame({ srcDoc }: { srcDoc: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-black">
      <div className="flex items-center gap-2 border-b border-border bg-slate-900 px-3 py-2"><span className="h-2 w-2 rounded-full bg-red-400" /><span className="h-2 w-2 rounded-full bg-yellow-400" /><span className="h-2 w-2 rounded-full bg-green-400" /><span className="ml-2 text-xs text-slate-400">Preview</span></div>
      <iframe title="html-preview" sandbox="allow-scripts" srcDoc={srcDoc} className="h-80 w-full bg-white" />
    </div>
  );
}
