import type { Metadata } from 'next';

import fonts from '@/lib/fonts';
import ProviderTheme from '@/lib/provider/provider-theme';

import Body from '@/components/layouts/body';
import Footer from '@/components/layouts/footer';
import Navbar from '@/components/layouts/navbar';

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
        <link rel="icon" href="/static/favicons/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${fonts.publicSans.variable} ${fonts.jetBrains.variable} ${fonts.inter.variable} antialiased min-h-screen font-mono`}
      >
        <ProviderTheme>
          <Navbar />
          <Body>{children}</Body>
          <Footer />
        </ProviderTheme>
      </body>
    </html>
  );
}
