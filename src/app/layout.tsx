import { NextUIProvider } from '@nextui-org/system';
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
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
