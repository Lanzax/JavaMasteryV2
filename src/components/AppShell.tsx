import { Sidebar } from './Sidebar';
import { TopNav } from './TopNav';
export function AppShell({ children }: { children: React.ReactNode }) { return <div><TopNav /><div className="mx-auto flex max-w-7xl"><Sidebar /><main className="min-h-screen flex-1 p-4 md:p-8">{children}</main></div></div>; }
