'use client';
import { useState } from 'react';
import { Card } from './ui';
export function QuizCard({ question, options, answer }: { question: string; options: string[]; answer: number }) { const [res, setRes] = useState<string>(''); return <Card><p className="mb-2 font-semibold">{question}</p><div className="space-y-2">{options.map((o, i) => <button key={o} onClick={() => setRes(i === answer ? 'Corretto!' : 'Riprova.')} className="block w-full rounded border border-border p-2 text-left">{o}</button>)}</div>{res && <p className="mt-2 text-sm text-slate-200">{res}</p>}</Card>; }
