import type { Metadata } from 'next';

import ProjectContent from '@/components/project-content';

import { getMetadata } from '@/site.config';

export const metadata: Metadata = getMetadata('home');

const Projects = () => {
  // return <ProjectContent />
  return 404;
};

export default Projects;
