import { Course } from '@/types/learning';

const starter = `<!doctype html>
<html>
  <head>
    <title>Prima pagina</title>
  </head>
  <body>
    <h1>Ciao HTML</h1>
    <p>Modifica questa pagina.</p>
  </body>
</html>`;

export const htmlCourse: Course = {
  id: 'html',
  title: 'HTML',
  description: 'Impara a costruire pagine web da zero.',
  active: true,
  chapters: [
    {
      id: 'introduction',
      title: 'Introduzione a HTML',
      description: 'Struttura base di una pagina web.',
      lessons: [
        {
          id: 'first-page',
          slug: 'introduction/first-page',
          title: 'La tua prima pagina HTML',
          objectives: ['Capire tag html/head/body', 'Usare h1 e p', 'Impostare attributi base'],
          theory: [
            'Il tag <html> contiene l’intero documento.',
            '<head> include metadati, titolo e risorse.',
            '<body> contiene il contenuto visibile.',
            '<h1> definisce il titolo principale e <p> un paragrafo.',
            'Gli attributi aggiungono dettagli ai tag (es. href, src, alt).',
            'Una struttura pulita rende la pagina più leggibile e manutenibile.',
          ],
          starterCode: starter,
          quiz: { question: 'Quale tag contiene il contenuto visibile?', options: ['head', 'body', 'title'], answer: 1 },
          commonErrors: ['Tag non chiusi correttamente.', 'Contenuto messo in head invece che in body.', 'Attributi senza virgolette.'],
        },
      ],
    },
  ],
};
