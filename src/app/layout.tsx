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
        <img src="/gradient-background-top.webp" alt="" role="presentation" className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1920px] h-[700px] object-cover object-top -z-10 pointer-events-none opacity-80" />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
