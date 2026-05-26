export type TechTrack = 'java' | 'html' | 'css' | 'react' | 'spring';

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
