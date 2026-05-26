export type TechTrack = 'java' | 'html' | 'css' | 'react' | 'spring';
export type ValidationType = 'output' | 'junit' | 'manual';

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  objectives: string[];
  theory: string[];
  starterCode: string;
  quiz: { question: string; options: string[]; answer: number };
  commonErrors: string[];
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Course {
  id: TechTrack;
  title: string;
  description: string;
  active: boolean;
  chapters: Chapter[];
}

export interface ExerciseTestCase {
  input?: string;
  expectedOutput: string;
}

export interface Exercise {
  id: string;
  title: string;
  instructions: string[];
  starterCode: string;
  validationType: ValidationType;
  expectedOutput?: string;
  testCases?: ExerciseTestCase[];
  hints: string[];
  xp: number;
}
