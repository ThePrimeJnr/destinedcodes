'use client';

import {
  SiAmazonaws,
  SiAmazons3,
  SiApache,
  SiAzuredevops,
  SiC,
  SiCelery,
  SiChakraui,
  SiCircleci,
  SiCloudinary,
  SiCodecov,
  SiCplusplus,
  SiCss3,
  SiDart,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiFlutter,
  SiFrappe,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGnubash,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiKubernetes,
  SiLinux,
  SiLua,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNgrok,
  SiNodedotjs,
  SiPostgresql,
  SiPrecommit,
  SiPython,
  SiReact,
  SiRedis,
  SiSentry,
  SiSocketdotio,
  SiTailwindcss,
  SiTravisci,
  SiTrello,
  SiTypescript,
  SiVercel,
  SiVim,
  SiVisualstudiocode,
} from '@icons-pack/react-simple-icons';
import React, { useRef, useState } from 'react';

const tools = [
  {
    name: 'Python',
    icon: SiPython,
    description: 'High-level programming language.',
  },
  {
    name: 'C',
    icon: SiC,
    description: 'General-purpose programming language.',
  },
  {
    name: 'C++',
    icon: SiCplusplus,
    description: 'General-purpose programming language.',
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    description: 'Versatile scripting language.',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    description: 'JavaScript with type definitions.',
  },
  {
    name: 'BashScript',
    icon: SiGnubash,
    description: 'Unix shell and scripting language.',
  },
  {
    name: 'Lua',
    icon: SiLua,
    description: 'Lightweight, embeddable scripting language.',
  },
  {
    name: 'Dart',
    icon: SiDart,
    description: 'Optimized language for building apps.',
  },
  {
    name: 'Frappe',
    icon: SiFrappe,
    description: 'Full-stack web application framework.',
  },
  {
    name: 'Django',
    icon: SiDjango,
    description: 'High-level Python web framework.',
  },
  {
    name: 'Flask',
    icon: SiFlask,
    description: 'Lightweight Python web framework.',
  },
  {
    name: 'FastAPI',
    icon: SiFastapi,
    description: 'Modern, fast web framework for Python.',
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    description:
      'JavaScript runtime for building scalable server-side applications',
  },
  {
    name: 'ExpressJS',
    icon: SiExpress,
    description: 'Flexible Node.js framework for web and mobile apps.',
  },
  {
    name: 'NestJS',
    icon: SiNestjs,
    description: 'A progressive Node.js framework.',
  },
  {
    name: 'ReactJS',
    icon: SiReact,
    description: 'JavaScript library for building UIs.',
  },
  {
    name: 'NextJS',
    icon: SiNextdotjs,
    description: 'React framework for server-side rendering.',
  },
  {
    name: 'TailwindCSS',
    icon: SiTailwindcss,
    description: 'Utility-first CSS framework.',
  },
  {
    name: 'MySQL',
    icon: SiMysql,
    description: 'Popular relational database management system.',
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    description: 'Advanced relational database system.',
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    description: 'NoSQL database for modern apps.',
  },
  { name: 'GraphQL', icon: SiGraphql, description: 'Query language for APIs.' },
  {
    name: 'Socket.io',
    icon: SiSocketdotio,
    description:
      'Real-time, bidirectional communication library for web applications.',
  },
  { name: 'Git', icon: SiGit, description: 'Version control system.' },
  {
    name: 'GitHub',
    icon: SiGithub,
    description: 'Hosting for software development and version control.',
  },
  {
    name: 'Azure',
    icon: SiAzuredevops,
    description: 'Cloud computing service by Microsoft.',
  },
  {
    name: 'AWS',
    icon: SiAmazonaws,
    description: 'Comprehensive cloud computing platform.',
  },
  {
    name: 'Visual Studio',
    icon: SiVisualstudiocode,
    description: 'Code editor by Microsoft.',
  },
  { name: 'Vim', icon: SiVim, description: 'Highly configurable text editor.' },
  {
    name: 'Nginx',
    icon: SiNginx,
    description: 'Web server and reverse proxy server.',
  },
  { name: 'Apache', icon: SiApache, description: 'Web server software.' },
  {
    name: 'Trello',
    icon: SiTrello,
    description: 'Web-based project management tool.',
  },
  {
    name: 'Jira',
    icon: SiJira,
    description: 'Issue and project tracking software.',
  },
  {
    name: 'GitHub Actions',
    icon: SiGithubactions,
    description: 'CI/CD service by GitHub.',
  },
  {
    name: 'Travis',
    icon: SiTravisci,
    description: 'Continuous Integration service.',
  },
  {
    name: 'Sentry',
    icon: SiSentry,
    description: 'Application monitoring and error tracking.',
  },
  {
    name: 'PreCommit',
    icon: SiPrecommit,
    description: 'Framework for managing pre-commit hooks.',
  },
  {
    name: 'Ngrok',
    icon: SiNgrok,
    description: 'Secure introspectable tunnels to localhost.',
  },
  {
    name: 'Vercel',
    icon: SiVercel,
    description: 'Platform for frontend frameworks and static sites.',
  },
  {
    name: 'Docker',
    icon: SiDocker,
    description:
      'Platform for developing, shipping, and running applications in containers.',
  },
  {
    name: 'Celery',
    icon: SiCelery,
    description: 'Distributed task queue for Python.',
  },
  {
    name: 'Cloudinary',
    icon: SiCloudinary,
    description: 'Cloud service for managing images and videos.',
  },
  {
    name: 'Redis',
    icon: SiRedis,
    description:
      'In-memory data structure store, used as a database, cache, and message broker.',
  },
  {
    name: 'Flutter',
    icon: SiFlutter,
    description:
      'UI toolkit for building natively compiled applications for mobile, web, and desktop.',
  },
  {
    name: 'Amazon S3',
    icon: SiAmazons3,
    description: 'Scalable storage service by AWS.',
  },
  {
    name: 'Chakra UI',
    icon: SiChakraui,
    description: 'Modular and accessible component library for React.',
  },
  {
    name: 'Codecov',
    icon: SiCodecov,
    description: 'Code coverage tool.',
  },
  {
    name: 'CircleCI',
    icon: SiCircleci,
    description: 'Continuous integration and delivery platform.',
  },
  {
    name: 'Linux',
    icon: SiLinux,
    description: 'Open-source operating system.',
  },
  {
    name: 'Kubernetes',
    icon: SiKubernetes,
    description:
      'Open-source system for automating deployment, scaling, and management of containerized applications.',
  },
  {
    name: 'HTML',
    icon: SiHtml5,
    description:
      'Standard markup language for documents designed to be displayed in a web browser.',
  },
  {
    name: 'CSS',
    icon: SiCss3,
    description:
      'Enhances web design with new features for responsive layouts and animations.',
  },
];

const ToolsAndSoftware = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const timeoutRef: any = useRef(null);

  const showToolDescription = (index: any) => {
    setActiveIndex(index);
    clearTimeout(timeoutRef.current);
  };

  const hideToolDescription = (time: number) => {
    timeoutRef.current = setTimeout(() => {
      setActiveIndex(null);
    }, time);
  };

  return (
    <div id="tools-software">
      <h2 className="font-bold text-4xl md:text-6xl mb-4">
        Tools &amp; Softwares
      </h2>
      <p className="text-lg/8 md:text-xl/10 mb-12 max-w-2xl">
        Over the years, I&apos;ve had the chance to work with a wide range of
        software, tools, and frameworks. Here are some of the ones I&apos;ve
        used:
      </p>
      <div className="flex flex-wrap justify-center lg:justify-normal gap-10">
        {tools.map((tool, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center relative group 
                        ${activeIndex !== null && activeIndex !== index ? 'opacity-50' : ''}`}
            onMouseEnter={() => showToolDescription(index)}
            onMouseLeave={() => hideToolDescription(500)}
            onTouchStart={() => {
              showToolDescription(index);
              hideToolDescription(1000);
            }}
          >
            <tool.icon color="default" size={32} />
            {activeIndex === index && (
              <div className="absolute text-center bg-background brightness-90 dark:brightness-150 opacity-85 rounded-lg p-3 z-10">
                <h3 className="text-2xl font-semibold mb-2">{tool.name}</h3>
                <p>{tool.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsAndSoftware;
