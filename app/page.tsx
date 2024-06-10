import type { Metadata } from 'next';
import Image from 'next/image';

import { getMetadata } from '@/site.config';

export const metadata: Metadata = getMetadata('home');

const Home = () => {
  return (
    <div className="pb-96">
      <div id="hero" className="flex flex-col py-24">
        <h1 className="font-bold text-6xl md:text-8xl dark:text-white md:tracking-tighter">
          Destiny Saturday
        </h1>
        <p className="pt-4 font-bold text-4xl text-secondary md:text-6xl md:tracking-tighter">
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
      <div className="flex md:flex-row flex-col py-24">
        <div className="md:block flex flex-col md:content">
          <Image
            src={'/images/destiny-saturday.png'}
            alt="Destiny Saturday"
            width={94}
            height={94}
            className="float-left mr-4 rounded-full"
          />
          <div className="item-body py-4 md:p-0 md:pl-2 font-bold text-5xl md:text-8xl">
            I build <div className="text-secondary">scalable softwares</div>
          </div>
        </div>
        <div className="max-w-md text-lg/8 md:text-2xl/10">
          <div>
            A proficient software engineer specializing in DevOps, Full Stack,
            and Web3 development. Open to opportunities and collaboration.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
