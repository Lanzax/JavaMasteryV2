import { Course } from '@/types/learning';

const helloCode = `public class Main {\n  public static void main(String[] args) {\n    System.out.println("Ciao Java!");\n  }\n}`;

export const javaCourse: Course = {
  id: 'java',
  title: 'Java',
  description: 'Percorso Java dal primo println fino a Java moderno.',
  active: true,
  chapters: [
    { id: 'fondamenti', title: 'Fondamenti e terminale', description: 'Primi passi e ambiente.', lessons: [] },
    { id: 'javac-jvm', title: 'javac e JVM', description: 'Compilazione ed esecuzione.', lessons: [{
      id: 'hello-world', slug: 'javac/hello-world', title: 'JAVAC e Hello World',
      objectives: ['Capire JDK/JRE/JVM', 'Usare javac', 'Scrivere il primo main'],
      theory: ['JDK contiene strumenti di sviluppo come javac.', 'JRE esegue bytecode sulla JVM.', 'javac trasforma .java in .class.'],
      starterCode: helloCode,
      quiz: { question: 'Quale tool compila un file .java?', options: ['java', 'javac', 'jvm'], answer: 1 },
      commonErrors: ['Nome file diverso dal nome classe pubblica.', 'Manca il metodo main.', 'Parentesi graffe non bilanciate.'],
    }] },
    { id: 'sintassi', title: 'Sintassi base', description: 'Variabili, operatori e controllo.', lessons: [] },
    { id: 'oop', title: 'OOP', description: 'Classi, oggetti, ereditarietà.', lessons: [] },
    { id: 'collections', title: 'Collections ed Exception', description: 'Liste, mappe, error handling.', lessons: [] },
    { id: 'java5', title: 'Java 5: generics, enum, annotations', description: 'Feature storiche fondamentali.', lessons: [] },
    { id: 'java7', title: 'Java 7: try-with-resources e NIO', description: 'I/O moderno e gestione risorse.', lessons: [] },
    { id: 'java8', title: 'Java 8: lambda e stream', description: 'Paradigma funzionale in Java.', lessons: [] },
    { id: 'java11', title: 'Java 11: var, HTTP client, moduli', description: 'Java LTS e modularità.', lessons: [] },
    { id: 'java17', title: 'Java 17: records, sealed classes, pattern matching', description: 'Pattern moderni e linguaggio evoluto.', lessons: [] },
    { id: 'java21', title: 'Java 21: virtual threads e sequenced collections', description: 'Concorrenza e API nuove.', lessons: [] },
    { id: 'java26', title: 'Java 25/26: Java moderno e feature recenti', description: 'Panoramica forward-looking.', lessons: [] },
  ],
};
