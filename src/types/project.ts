export interface ProjectFile {
  path: string;
  content: string;
  language: 'java' | 'text';
}

export interface Project {
  id: string;
  name: string;
  language: 'java';
  files: ProjectFile[];
  createdAt: string;
  updatedAt: string;
}
