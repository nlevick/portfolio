import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import './globals.css';

const inter = Quicksand({ subsets: ['latin'], display: 'swap' });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
