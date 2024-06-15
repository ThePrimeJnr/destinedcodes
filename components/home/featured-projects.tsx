import { GitHub, Language } from '@mui/icons-material';
import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';

interface Project {
  title: string;
  description: string;
  github: string;
  website: string;
  image: string;
  featured: boolean;
}

const FeaturedProjects = () => {
  const projectsDirectory = path.join(process.cwd(), 'data/projects');
  const projectFiles = fs.readdirSync(projectsDirectory);

  const featuredProjects = projectFiles
    .map((filename) => {
      const filePath = path.join(projectsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      return {
        title: data.title,
        description: data.description,
        github: data.github,
        website: data.website,
        image: data.image,
        featured: data.featured,
      } as Project;
    })
    .filter((project) => project.featured);

  return (
    <div id="featured-projects" className="py-24">
      <h2 className="font-bold text-4xl md:text-6xl mb-8">Featured Projects</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <div key={index}>
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200}
              priority={true}
              className="rounded-xl mb-4 w-full h-auto"
            />
            <h3 className="font-bold text-2xl mb-2">{project.title}</h3>
            <div className="text-lg mb-4">
              <MDXRemote source={project.description} />
            </div>
            <div className="flex gap-4">
              <Link
                href={project.github}
                className="hover:text-secondary underline flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub />
                <span>GitHub</span>
              </Link>
              <Link
                href={project.website}
                className="hover:text-secondary underline flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Language />
                <span>Live Preview</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
