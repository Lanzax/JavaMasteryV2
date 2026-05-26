'use client';
import { useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import { ProjectConsole } from '@/components/ProjectConsole';
import { ProjectEditor } from '@/components/ProjectEditor';
import { ProjectFileTree } from '@/components/ProjectFileTree';
import { ProjectToolbar } from '@/components/ProjectToolbar';
import { RemoteJavaExecutionProvider } from '@/lib/execution';
import { getProject, upsertProject } from '@/lib/projects';
import { Project } from '@/types/project';

export default function ProjectWorkspacePage() {
  const { projectId } = useParams<{ projectId: string }>();
  const initial = useMemo(() => getProject(projectId), [projectId]);
  const [project, setProject] = useState<Project | undefined>(initial);
  const [selectedPath, setSelectedPath] = useState(initial?.files[0]?.path ?? 'Main.java');
  const [output, setOutput] = useState('');
  const executor = useMemo(() => new RemoteJavaExecutionProvider(), []);

  if (!project) return <section>Progetto non trovato.</section>;
  const selectedFile = project.files.find((f) => f.path === selectedPath) ?? project.files[0];

  const updateFile = (content: string) => {
    const files = project.files.map((f) => (f.path === selectedFile.path ? { ...f, content } : f));
    setProject({ ...project, files, updatedAt: new Date().toISOString() });
  };

  const onSave = () => { if (project) upsertProject(project); setOutput('Salvato in localStorage.'); };

  const onRun = async () => {
    const javaFiles = project.files.filter((f) => f.path.endsWith('.java')).map((f) => ({ name: f.path, content: f.content }));
    const mainFile = javaFiles.find((f) => f.name === 'Main.java') ?? javaFiles[0];
    if (!mainFile) return setOutput('Nessun file Java da eseguire.');
    const res = await executor.run(mainFile.content);
    setOutput([res.output, res.error].filter(Boolean).join('\n'));
  };

  return (
    <section className="space-y-4">
      <ProjectToolbar onRun={onRun} onSave={onSave} projectName={project.name} />
      <div className="grid gap-4 lg:grid-cols-[260px,1fr]">
        <ProjectFileTree files={project.files} selectedPath={selectedPath} onSelect={setSelectedPath} />
        <ProjectEditor content={selectedFile.content} onChange={updateFile} />
      </div>
      <ProjectConsole output={output} />
    </section>
  );
}
