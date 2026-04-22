import type {Metadata} from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { BottomNav } from '@/components/BottomNav';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: 'Menú Campus UOH',
  description: 'Toda la comida de la UOH en tu bolsillo',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className={`${jakarta.variable} font-sans`}>
      <body className="antialiased min-h-screen relative pb-28 md:pb-0" suppressHydrationWarning>
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
