import type { Metadata } from 'next';

import jetBrainsMono from '@/lib/fonts/fonts';
import ProviderTheme from '@/lib/provider/provider-theme';

import Body from '@/components/layouts/body';
import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';

import { getMetadata } from '@/site.config';

import './globals.css';

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
      <body
        className={`${jetBrainsMono.className} antialiased min-h-screen font-mono`}
      >
        <ProviderTheme>
          <Header />
          <Body>{children}</Body>
          <Footer />
        </ProviderTheme>
      </body>
    </html>
  );
}
