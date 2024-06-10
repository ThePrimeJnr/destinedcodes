import type { Metadata } from 'next';
import Image from 'next/image';

import { getMetadata } from '@/site.config';

export const metadata: Metadata = getMetadata('home');

const Home = () => {
  return (
    <div className="py-12 md:py-24">
      <div className="flex flex-col">
        <h1 className="font-extrabold text-6xl text-primary md:text-8xl tracking-tight">
          Destiny Saturday
        </h1>
        <p className="mt-4 font-bold text-4xl text-secondary md:text-5xl leading-tight tracking-tight">
          Full Stack Software &amp; DevOps Engineer
        </p>

        <p className="mt-10 md:mt-14 max-w-2xl text-lg text-primary md:text-2xl tracking-tight">
          I&apos;m passionate about 💻 coding scalable systems, 🤖 automating
          workflows, ☁️ cloud infrastructure, and 🤝 collaborative development
        </p>

        <div className="flex md:flex-row flex-col gap-4 md:gap-12 mt-8 md:mt-12 py-4 w-full text-lg text-primary md:text-2xl tracking-tighter">
          <div className="flex items-center">
            <Image
              src={'/images/hng.png'}
              alt="HNG Logo"
              width={32}
              height={32}
              className="mr-2 rounded-lg"
            />
            HNGx Finalist
          </div>
          <div className="flex items-center">
            <Image
              src={'/images/gitearn.png'}
              alt="Gitearn Logo"
              width={32}
              height={32}
              className="mr-2 rounded-full"
            />
            Creator, GitEarn
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
