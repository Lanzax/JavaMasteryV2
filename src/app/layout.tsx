import './globals.css';
import { AppShell } from '@/components/AppShell';

export const metadata = {
  title: 'JavaMastery',
  description: 'Piattaforma moderna per imparare a programmare',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className="dark">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
