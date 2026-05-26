import { Project } from '@/types/project';

const KEY = 'jm_projects';

export const javaMainTemplate = `public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello from JavaMastery Project!");\n  }\n}`;

export function createJavaProject(name: string): Project {
  const now = new Date().toISOString();
  return {
    id: crypto.randomUUID(),
    name,
    language: 'java',
    createdAt: now,
    updatedAt: now,
    files: [{ path: 'Main.java', content: javaMainTemplate, language: 'java' }],
  };
}

export function loadProjects(): Project[] {
  if (typeof window === 'undefined') return [];
  return JSON.parse(localStorage.getItem(KEY) ?? '[]') as Project[];
}

export function saveProjects(projects: Project[]) {
  localStorage.setItem(KEY, JSON.stringify(projects));
}

export function upsertProject(project: Project) {
  const all = loadProjects();
  const idx = all.findIndex((p) => p.id === project.id);
  if (idx >= 0) all[idx] = project; else all.push(project);
  saveProjects(all);
}

export function getProject(id: string): Project | undefined {
  return loadProjects().find((p) => p.id === id);
}
