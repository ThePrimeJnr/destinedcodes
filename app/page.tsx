import type { Metadata } from 'next';
import Image from 'next/image';

import { getMetadata } from '@/site.config';

export const metadata: Metadata = getMetadata('home');

const Home = () => {
  return (
    <div className="py-14 md:py-22">
      <div className="flex flex-col">
        <h1 className="font-extrabold text-6xl md:text-8xl dark:text-white">
          Destiny Saturday
        </h1>
        <p className="mt-4 font-bold text-4xl text-secondary md:text-5xl">
          Full Stack Software &amp; DevOps Engineer
        </p>

        <p className="my-10 md:my-14 md:max-w-2xl text-lg md:text-2xl">
          I&apos;m passionate about 💻 coding scalable systems, 🤖 automating
          workflows, ☁️ cloud infrastructure, and 🤝 collaborative development
        </p>

        <div className="flex md:flex-row flex-col gap-4 md:gap-10 w-full text-lg md:text-2xl">
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
