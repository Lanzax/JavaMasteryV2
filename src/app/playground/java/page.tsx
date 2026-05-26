'use client';
import { useState } from 'react';
import { CodeEditor } from '@/components/CodeEditor';
import { ConsolePanel } from '@/components/ConsolePanel';
import { RunButton } from '@/components/RunButton';
export default function Playground(){ const [code,setCode]=useState('// Playground Java'); const [out,setOut]=useState(''); return <section className="space-y-4"><h1 className="text-3xl font-bold">Playground Java</h1><CodeEditor code={code} onChange={setCode} /><RunButton onClick={()=>setOut('Simulazione: collega ExecutionProvider reale nelle prossime fasi.')} /><ConsolePanel output={out} status="hint" /></section>; }
