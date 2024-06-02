import type { Metadata } from 'next';
import './globals.css';
import { inter } from '@/fonts';

export const metadata: Metadata = {
  title: 'Nathan Levick Home Page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`overflow-hidden ${inter.className}`}>{children}</body>
    </html>
  );
}
