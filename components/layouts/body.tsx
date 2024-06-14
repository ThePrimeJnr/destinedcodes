'use client';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Body = ({ children }: { children: React.ReactNode }) => {
  return <main className="container px-4 md:px-6">{children}</main>;
};

export default Body;
