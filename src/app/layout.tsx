import Footer from '@/components/Footer';
import { inter } from '@/fonts';
import type { Metadata } from 'next';

import './globals.css';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Nathan Levick Home Page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`overflow-hidden text-stone-300 ${inter.className}`}>
        <div className="h-screen w-screen">
          <div className="relative h-[90vh]">
            <Navigation />
            {children}
          </div>
          <footer className="h-[10vh]">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
