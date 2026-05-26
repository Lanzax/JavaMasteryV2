import Link from 'next/link';

export const cn = (...cls: string[]) => cls.filter(Boolean).join(' ');

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('rounded-xl border border-border bg-card/80 p-4', className ?? '')}>{children}</div>;
}

export function Button({ href, children, className }: { href?: string; children: React.ReactNode; className?: string }) {
  const c = cn('rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white hover:opacity-90', className ?? '');
  return href ? <Link href={href} className={c}>{children}</Link> : <button className={c}>{children}</button>;
}
