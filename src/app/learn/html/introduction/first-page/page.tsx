'use client';
import { useState } from 'react';
import { LessonLayout } from '@/components/LessonLayout';
import { HtmlEditorTabs } from '@/components/HtmlEditorTabs';
import { QuizCard } from '@/components/QuizCard';
import { WebPreviewPanel } from '@/components/WebPreviewPanel';
import { htmlCourse } from '@/data/htmlCourse';

export default function FirstHtmlLesson() {
  const lesson = htmlCourse.chapters[0].lessons[0];
  const [state, setState] = useState({ html: lesson.starterCode, css: 'body { font-family: sans-serif; padding: 16px; }', js: '' });

  return (
    <LessonLayout title="La tua prima pagina HTML">
      <section><h2 className="font-semibold">Obiettivi</h2><ul className="list-disc pl-6">{lesson.objectives.map((o) => <li key={o}>{o}</li>)}</ul></section>
      <section><h2 className="font-semibold">Teoria</h2><ul className="list-disc pl-6">{lesson.theory.map((t) => <li key={t}>{t}</li>)}</ul></section>
      <div className="grid gap-4 lg:grid-cols-2"><HtmlEditorTabs {...state} onChange={setState} /><WebPreviewPanel html={state.html} css={state.css} js={state.js} /></div>
      <QuizCard question={lesson.quiz.question} options={lesson.quiz.options} answer={lesson.quiz.answer} />
    </LessonLayout>
  );
}
