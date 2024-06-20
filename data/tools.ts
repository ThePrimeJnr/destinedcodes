import {
  IconType,
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

export interface Tool {
  name: string;
  icon: IconType;
  type:
    | 'Languages'
    | 'Frameworks and Libraries'
    | 'Databases'
    | 'Cloud/DevOps'
    | 'Tools';
}

const tools: Tool[] = [
  // Languages
  {
    name: 'Python',
    icon: SiPython,
    type: 'Languages',
  },
  {
    name: 'C',
    icon: SiC,
    type: 'Languages',
  },
  {
    name: 'C++',
    icon: SiCplusplus,
    type: 'Languages',
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    type: 'Languages',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    type: 'Languages',
  },
  {
    name: 'BashScript',
    icon: SiGnubash,
    type: 'Languages',
  },
  {
    name: 'Lua',
    icon: SiLua,
    type: 'Languages',
  },
  {
    name: 'Dart',
    icon: SiDart,
    type: 'Languages',
  },
  {
    name: 'HTML',
    icon: SiHtml5,
    type: 'Languages',
  },
  {
    name: 'CSS',
    icon: SiCss3,
    type: 'Languages',
  },

  // Frameworks and Libraries
  {
    name: 'ReactJS',
    icon: SiReact,
    type: 'Frameworks and Libraries',
  },
  {
    name: 'NextJS',
    icon: SiNextdotjs,
    type: 'Frameworks and Libraries',
  },
  {
    name: 'TailwindCSS',
    icon: SiTailwindcss,
    type: 'Frameworks and Libraries',
  },
  {
    name: 'Flutter',
    icon: SiFlutter,
    type: 'Frameworks and Libraries',
  },
  {
    name: 'Chakra UI',
    icon: SiChakraui,
    type: 'Frameworks and Libraries',
  },
  {
    name: 'Frappe',
    icon: SiFrappe,
    type: 'Frameworks and Libraries',
  },
  {
    name: 'Django',
    icon: SiDjango,
    type: 'Frameworks and Libraries',
  },
  {
    name: 'Flask',
    icon: SiFlask,
    type: 'Frameworks and Libraries',
  },
  {
    name: 'FastAPI',
    icon: SiFastapi,
    type: 'Frameworks and Libraries',
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    type: 'Frameworks and Libraries',
  },
  {
    name: 'ExpressJS',
    icon: SiExpress,
    type: 'Frameworks and Libraries',
  },
  {
    name: 'NestJS',
    icon: SiNestjs,
    type: 'Frameworks and Libraries',
  },
  {
    name: 'MDX',
    icon: SiLinux, // Add the appropriate icon here
    type: 'Frameworks and Libraries',
  },
  {
    name: 'Three.js',
    icon: SiLinux, // Add the appropriate icon here
    type: 'Frameworks and Libraries',
  },
  {
    name: 'GraphQL',
    icon: SiGraphql,
    type: 'Frameworks and Libraries',
  },
  {
    name: 'Socket.io',
    icon: SiSocketdotio,
    type: 'Frameworks and Libraries',
  },
  {
    name: 'Chart.js',
    icon: SiLinux, // Add the appropriate icon here
    type: 'Frameworks and Libraries',
  },
  {
    name: 'Prisma',
    icon: SiLinux, // Add the appropriate icon here
    type: 'Frameworks and Libraries',
  },
  {
    name: 'SQLAlchemy',
    icon: SiLinux, // Add the appropriate icon here
    type: 'Frameworks and Libraries',
  },

  // Databases
  {
    name: 'MySQL',
    icon: SiMysql,
    type: 'Databases',
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    type: 'Databases',
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    type: 'Databases',
  },
  {
    name: 'Redis',
    icon: SiRedis,
    type: 'Databases',
  },

  // Cloud/DevOps
  {
    name: 'Azure',
    icon: SiAzuredevops,
    type: 'Cloud/DevOps',
  },
  {
    name: 'AWS',
    icon: SiAmazonaws,
    type: 'Cloud/DevOps',
  },
  {
    name: 'Amazon S3',
    icon: SiAmazons3,
    type: 'Cloud/DevOps',
  },
  {
    name: 'Cloudinary',
    icon: SiCloudinary,
    type: 'Cloud/DevOps',
  },
  {
    name: 'Vercel',
    icon: SiVercel,
    type: 'Cloud/DevOps',
  },
  {
    name: 'Google Cloud',
    icon: SiLinux, // Add the appropriate icon here
    type: 'Cloud/DevOps',
  },
  {
    name: 'Google Collab',
    icon: SiLinux, // Add the appropriate icon here
    type: 'Cloud/DevOps',
  },
  {
    name: 'Docker',
    icon: SiDocker,
    type: 'Cloud/DevOps',
  },
  {
    name: 'Kubernetes',
    icon: SiKubernetes,
    type: 'Cloud/DevOps',
  },
  {
    name: 'Nginx',
    icon: SiNginx,
    type: 'Cloud/DevOps',
  },
  {
    name: 'Apache',
    icon: SiApache,
    type: 'Cloud/DevOps',
  },
  {
    name: 'GitHub Actions',
    icon: SiGithubactions,
    type: 'Cloud/DevOps',
  },
  {
    name: 'Travis',
    icon: SiTravisci,
    type: 'Cloud/DevOps',
  },
  {
    name: 'CircleCI',
    icon: SiCircleci,
    type: 'Cloud/DevOps',
  },
  {
    name: 'Codecov',
    icon: SiCodecov,
    type: 'Cloud/DevOps',
  },
  {
    name: 'PreCommit',
    icon: SiPrecommit,
    type: 'Cloud/DevOps',
  },

  // Tools
  {
    name: 'Git',
    icon: SiGit,
    type: 'Tools',
  },
  {
    name: 'GitHub',
    icon: SiGithub,
    type: 'Tools',
  },
  {
    name: 'Trello',
    icon: SiTrello,
    type: 'Tools',
  },
  {
    name: 'Jira',
    icon: SiJira,
    type: 'Tools',
  },
  {
    name: 'Asana',
    icon: SiLinux, // Add the appropriate icon here
    type: 'Tools',
  },
  {
    name: 'Visual Studio',
    icon: SiVisualstudiocode,
    type: 'Tools',
  },
  {
    name: 'Vim',
    icon: SiVim,
    type: 'Tools',
  },
  {
    name: 'Sentry',
    icon: SiSentry,
    type: 'Tools',
  },
  {
    name: 'Ngrok',
    icon: SiNgrok,
    type: 'Tools',
  },
  {
    name: 'Celery',
    icon: SiCelery,
    type: 'Tools',
  },
  {
    name: 'Linux',
    icon: SiLinux,
    type: 'Tools',
  },
  {
    name: 'Jupyter Notebook',
    icon: SiLinux, // Add the appropriate icon here
    type: 'Tools',
  },
];

export default tools;
