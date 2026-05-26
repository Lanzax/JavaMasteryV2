'use client';
import { BrowserFrame } from './BrowserFrame';

export function WebPreviewPanel({ html, css, js }: { html: string; css?: string; js?: string }) {
  const srcDoc = `<!doctype html><html><head><style>${css ?? ''}</style></head><body>${html}<script>${js ?? ''}<\/script></body></html>`;
  return <BrowserFrame srcDoc={srcDoc} />;
}
