import { Exercise } from '@/types/learning';

export const htmlExercises: Exercise[] = [
  { id: 'create-title', title: 'Crea un titolo', instructions: ['Aggiungi un tag h1 con testo: Benvenuto!'], starterCode: '<h1></h1>', validationType: 'output', expectedOutput: 'Benvenuto!', testCases: [{ expectedOutput: 'Benvenuto!' }], hints: ['Scrivi il testo dentro <h1>...</h1>'], xp: 15 },
  { id: 'create-list', title: 'Crea una lista', instructions: ['Crea una ul con almeno 3 li.'], starterCode: '<ul>\n  \n</ul>', validationType: 'manual', hints: ['Usa <li>Elemento</li>'], xp: 20 },
  { id: 'add-link', title: 'Aggiungi un link', instructions: ['Aggiungi un link a https://example.com'], starterCode: '<a href="">Apri sito</a>', validationType: 'manual', hints: ['Compila href correttamente'], xp: 20 },
  { id: 'add-image', title: 'Aggiungi un\'immagine', instructions: ['Aggiungi un tag img con alt descrittivo.'], starterCode: '<img src="https://picsum.photos/200" alt="">', validationType: 'manual', hints: ['Non dimenticare alt'], xp: 20 },
  { id: 'personal-card', title: 'Crea una card personale', instructions: ['Crea una card con h2, p e link.'], starterCode: '<div class="card">\n  \n</div>', validationType: 'manual', hints: ['Struttura semantica e contenuto leggibile'], xp: 30 },
];

export const getHtmlExerciseById = (id: string) => htmlExercises.find((e) => e.id === id);
