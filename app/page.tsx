import type { Metadata } from 'next';

import { getMetadata } from '@/site.config';

export const metadata: Metadata = getMetadata('home');

const Home = () => {
  return (
    <div className="container mx-auto py-24 px-4">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-6xl font-extrabold text-indigo-600">
          Destiny Saturday
        </h1>
        <p className="text-gray-700 block text-4xl md:text-5xl font-bold leading-tight mt-4">
          Full Stack Software &amp; DevOps Engineer
        </p>

        <p className="mt-14 font-body max-w-4xl text-xl md:text-3xl text-gray-800">
          I&apos;m passionate about{' '}
          <span role="img" aria-label="coding" className="text-2xl">
            💻
          </span>{' '}
          coding scalable systems,{' '}
          <span role="img" aria-label="automation" className="text-2xl">
            🤖
          </span>{' '}
          automating workflows,{' '}
          <span role="img" aria-label="cloud" className="text-2xl">
            ☁️
          </span>{' '}
          cloud infrastructure, and{' '}
          <span role="img" aria-label="teamwork" className="text-2xl">
            🤝
          </span>{' '}
          collaborative development
        </p>

        <div className="mt-12 md:mt-16 w-full">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
            <div className="flex items-center bg-indigo-100 p-4 rounded-lg shadow-lg">
              <span className="text-2xl font-semibold text-indigo-600">
                100+ Repositories Managed
              </span>
            </div>
            <div className="flex items-center bg-indigo-100 p-4 rounded-lg shadow-lg">
              <span className="text-2xl font-semibold text-indigo-600">
                Mentor at ALX Africa
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
