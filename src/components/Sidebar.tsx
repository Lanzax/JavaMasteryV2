import Link from 'next/link';
const links = [{ href: '/', label: 'Home' }, { href: '/dashboard', label: 'Dashboard' }, { href: '/learn/java', label: 'Learn Java' }, { href: '/exercises/java', label: 'Exercises' }, { href: '/playground/java', label: 'Playground' }, { href: '/projects', label: 'Projects' }];
export function Sidebar() { return <aside className="hidden w-64 border-r border-border bg-black/20 p-4 md:block">{links.map(l => <Link className="mb-2 block rounded p-2 hover:bg-white/5" href={l.href} key={l.href}>{l.label}</Link>)}</aside>; }
