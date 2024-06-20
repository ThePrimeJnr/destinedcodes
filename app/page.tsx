import type { Metadata } from 'next';

import About from '@/components/home/about';
import FeaturedArticles from '@/components/home/featured-articles';
import FeaturedProjects from '@/components/home/featured-projects';
import Hero from '@/components/home/hero';
import ToolsAndSoftware from '@/components/home/tools-and-software';

import { getMetadata } from '@/site.config';

export const metadata: Metadata = getMetadata('home');

const Home = () => {
  return (
    <div className="space-y-20 md:space-y-36 py-20">
      <Hero />
      <About />
      <ToolsAndSoftware />
      <FeaturedProjects />
      <FeaturedArticles />
    </div>
  );
};

export default Home;
