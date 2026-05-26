# JavaMastery Agent Instructions

## Product
JavaMastery is a dark modern learning platform for programming.
The first course is Java. Future courses are HTML, CSS, React and Spring.

## Architecture
Keep the learning engine data-driven.
Courses, chapters, lessons and exercises must be reusable across languages.

## Frontend
Use TypeScript.
Use small reusable components.
Use Tailwind CSS.
Use dark mode by default.
Keep UI modern, clean and responsive.

## Code Execution
Never execute user code directly in the main app.
Use mock execution in frontend until a sandboxed executor exists.
Future real execution must use Docker or another isolated sandbox with:
- timeout
- memory limit
- CPU limit
- no network
- no root
- cleanup after run

## Content
Each lesson should include:
- objectives
- theory
- examples
- starter code
- practice
- quiz
- common mistakes
- exercises

## Quality
Always run build/typecheck when possible.
Do not introduce unnecessary dependencies.
Keep the app extensible.



Fase 1 — MVP UI Java
- Landing
- Dashboard
- Percorso Java
- Prima lezione
- Editor
- Console simulata
- Esercizi base

Fase 2 — Lesson engine completo
- Tipi dati solidi
- Route dinamiche
- Progressi
- Quiz
- Esercizi singoli

Fase 3 — Java executor reale
- Backend sicuro
- Docker sandbox
- Run vero
- Errori compilazione veri

Fase 4 — Progetti tipo Replit
- Workspace multi-file
- File tree
- Run progetto
- Salvataggio locale

Fase 5 — Database e utenti
- Login
- PostgreSQL
- Progressi persistenti
- Progetti salvati

Fase 6 — HTML/CSS
- Preview live
- Editor web
- Esercizi visuali

Fase 7 — React
- Componenti
- State
- Props
- Hooks
- Mini app

Fase 8 — Spring
- REST API
- Database
- Spring Security
- Testing
- Deploy

Fase 9 — AI tutor
- Spiegazione errori
- Suggerimenti personalizzati
- Review codice
