'use client';
import { useState } from 'react';
import { HtmlEditorTabs } from '@/components/HtmlEditorTabs';
import { WebPreviewPanel } from '@/components/WebPreviewPanel';

export default function HtmlPlaygroundPage() {
  const [state, setState] = useState({ html: '<h1>Hello HTML</h1><p>Playground libero</p>', css: 'body{font-family:Inter,sans-serif;padding:16px;} h1{color:#4f46e5;}', js: '' });
  return <section className="space-y-4"><h1 className="text-3xl font-bold">Playground HTML</h1><div className="grid gap-4 lg:grid-cols-2"><HtmlEditorTabs {...state} onChange={setState} /><WebPreviewPanel html={state.html} css={state.css} js={state.js} /></div></section>;
}
