import ProviderTheme from '@/provider/provider-theme';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@/components/footer';
import Header from '@/components/header';
import Title from '@/components/title';
import { Separator } from '@/components/ui/separator';

import { getMetadata } from '@/site.config';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = getMetadata('default');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body className={'min-h-screen font-mono'}>
        <ProviderTheme>
          <Header />
          <Separator />
          <main className={'container md:my-12 my-8'}>
            <div
              className={
                'prose md:prose-lg min-w-full w-full dark:prose-invert'
              }
            >
              <Title />
              {children}
            </div>
          </main>
          <Footer />
        </ProviderTheme>
      </body>
    </html>
  );
}
