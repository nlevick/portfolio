import { NextUIProvider } from '@nextui-org/system';
import Footer from '@/components/Footer';
import { inter } from '@/fonts';
import type { Metadata } from 'next';

import './globals.css';

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
        <NextUIProvider>
          <div className="h-screen w-screen">
            <header>
              <nav></nav>
            </header>
            <main id="main" className="h-5/6">
              {children}
            </main>
            <Footer />
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
