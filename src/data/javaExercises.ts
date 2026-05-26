import { Exercise } from '@/types/learning';

export const javaExercises: Exercise[] = [
  {
    id: 'hello-name',
    title: 'Stampa il tuo nome',
    instructions: ['Scrivi una classe Main con main.', 'Stampa esattamente: Mario Rossi'],
    starterCode: 'public class Main {\n  public static void main(String[] args) {\n    // TODO\n  }\n}',
    validationType: 'output',
    expectedOutput: 'Mario Rossi',
    testCases: [{ expectedOutput: 'Mario Rossi' }],
    hints: ['Usa System.out.println(...)', 'Controlla maiuscole/spazi della stringa.'],
    xp: 20,
  },
  {
    id: 'sum-two-numbers',
    title: 'Somma due numeri',
    instructions: ['Dichiara int a=5 e b=7.', 'Stampa la somma: 12'],
    starterCode: 'public class Main {\n  public static void main(String[] args) {\n    int a = 5;\n    int b = 7;\n    // TODO\n  }\n}',
    validationType: 'output',
    expectedOutput: '12',
    testCases: [{ expectedOutput: '12' }],
    hints: ['Prova System.out.println(a + b);'],
    xp: 25,
  },
  {
    id: 'even-or-odd', title: 'Controlla pari/dispari',
    instructions: ['Imposta int n = 4.', 'Stampa: pari se n è divisibile per 2.'],
    starterCode: 'public class Main {\n  public static void main(String[] args) {\n    int n = 4;\n    // TODO\n  }\n}',
    validationType: 'output', expectedOutput: 'pari', testCases: [{ expectedOutput: 'pari' }], hints: ['Usa n % 2 == 0'], xp: 30,
  },
  {
    id: 'loop-1-to-10', title: 'Ciclo da 1 a 10',
    instructions: ['Usa un ciclo for.', 'Stampa ogni numero su una nuova riga da 1 a 10.'],
    starterCode: 'public class Main {\n  public static void main(String[] args) {\n    // TODO\n  }\n}', validationType: 'output',
    expectedOutput: '1\n2\n3\n4\n5\n6\n7\n8\n9\n10', testCases: [{ expectedOutput: '1\n2\n3\n4\n5\n6\n7\n8\n9\n10' }], hints: ['for (int i = 1; i <= 10; i++)'], xp: 35,
  },
  {
    id: 'person-class', title: 'Crea una classe Persona',
    instructions: ['Crea classe Persona con campo nome.', 'Nel main crea Persona("Luca") e stampa il nome.'],
    starterCode: 'class Persona {\n  String nome;\n  Persona(String nome) {\n    this.nome = nome;\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    // TODO\n  }\n}', validationType: 'output',
    expectedOutput: 'Luca', testCases: [{ expectedOutput: 'Luca' }], hints: ['Persona p = new Persona("Luca");', 'System.out.println(p.nome);'], xp: 40,
  },
];

export const getJavaExerciseById = (id: string) => javaExercises.find((e) => e.id === id);
