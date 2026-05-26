'use client';
import { useState } from 'react';

type Tab = 'html' | 'css' | 'js';

export function HtmlEditorTabs({ html, css, js, onChange }: { html: string; css: string; js: string; onChange: (v: { html: string; css: string; js: string }) => void }) {
  const [tab, setTab] = useState<Tab>('html');
  const value = tab === 'html' ? html : tab === 'css' ? css : js;

  return (
    <div className="rounded-xl border border-border bg-card/60">
      <div className="flex gap-2 border-b border-border p-2">{(['html', 'css', 'js'] as Tab[]).map((t) => <button key={t} onClick={() => setTab(t)} className={`rounded px-3 py-1 text-sm ${tab === t ? 'bg-accent text-white' : 'bg-slate-800 text-slate-200'}`}>{t.toUpperCase()}</button>)}</div>
      <textarea className="h-80 w-full bg-slate-950 p-3 font-mono text-sm" value={value} onChange={(e) => onChange({ html, css, js, [tab]: e.target.value })} spellCheck={false} />
    </div>
  );
}
