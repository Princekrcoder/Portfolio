import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shubham Kumar - A Backend Engineer',
  description: 'Backend Engineer and Open Source Contributor',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${inter.className} relative min-h-screen text-[var(--color-text-primary)] transition-colors duration-300 bg-[var(--color-bg-base)]`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
