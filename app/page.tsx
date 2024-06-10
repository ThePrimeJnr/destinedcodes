import type { Metadata } from 'next';
import Image from 'next/image';

import { getMetadata } from '@/site.config';

export const metadata: Metadata = getMetadata('home');

const Home = () => {
  return (
    <>
      <div id="hero" className="flex flex-col py-20 md:py-24">
        <h1 className="font-extrabold text-6xl md:text-8xl dark:text-white">
          Destiny Saturday
        </h1>
        <p className="pt-4 font-bold text-4xl text-secondary md:text-5xl">
          Full Stack Software &amp; DevOps Engineer
        </p>

        <p className="pt-14 pb-12 max-w-2xl lg:max-w-5xl text-lg md:text-2xl p">
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
              alt="Gitearn Logo"
              width={36}
              height={36}
              className="rounded-full"
            />
            Creator, GitEarn
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
