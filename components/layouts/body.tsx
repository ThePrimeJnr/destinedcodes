'use client';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Body = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="md:prose-lg dark:prose-invert container prose">
      {children}
    </main>
  );
};

export default Body;
