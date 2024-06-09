'use client';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Body = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={'container md:my-12 my-8'}>
      <div className={'prose md:prose-lg min-w-full w-full dark:prose-invert'}>
        {children}
      </div>
    </main>
  );
};

export default Body;
