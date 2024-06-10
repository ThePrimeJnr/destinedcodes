import type { Metadata } from 'next';
import Image from 'next/image';

import { getMetadata } from '@/site.config';

export const metadata: Metadata = getMetadata('home');

const Home = () => {
  return (
    <div className="pb-96">
      <div id="hero" className="flex flex-col py-20">
        <h1 className="font-bold text-6xl md:text-8xl dark:text-white">
          Destiny Saturday
        </h1>
        <p className="pt-4 font-bold text-4xl text-secondary md:text-6xl">
          Full Stack Software &amp; DevOps Engineer
        </p>

        <p className="py-14 max-w-2xl lg:max-w-2xl text-lg/8 md:text-2xl/10">
          I&apos;m passionate about 💻 coding scalable systems, 🤖 automating
          workflows, ☁️ cloud infrastructure, and 🤝 collaborative development
        </p>

        <div className="flex md:flex-row flex-col gap-6 md:gap-10 font-semibold text-lg md:text-2xl">
          <div className="flex items-center gap-x-2">
            <Image
              src={'/images/hng.png'}
              alt="HNG Logo"
              width={36}
              height={36}
              className="rounded-lg"
            />
            HNGx Finalist
          </div>
          <div className="flex items-center gap-x-2">
            <Image
              src={'/images/gitearn.png'}
              alt="GitEarn Logo"
              width={36}
              height={36}
              className="rounded-full"
            />
            Creator, GitEarn
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
