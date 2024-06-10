import { BookOpen, CalendarCheck, Code, Home, Video } from 'lucide-react';

const siteData: any = {
  author: 'Destiny Saturday',
  title: 'Destiny Saturday (DestinedCodes)',
  description:
    "Destiny Saturday's personal portfolio and blog, created with Next.js, Shadcn-ui, and Tailwind.css.",
  language: 'en',
  url: 'https://www.destinedcodes.com',
  theme: 'light',

  header: {
    logo: '/images/logo.png',
    title: 'DestinedCodes',
    routes: [
      { name: 'Home', value: '/', logo: Home },
      { name: 'Blog', value: '/blog', logo: BookOpen },
      { name: 'Projects', value: '/projects', logo: Code },
      { name: 'Videos', value: '/videos', logo: Video },
      { name: 'Contact', value: '/contact', logo: CalendarCheck },
    ],
  },

  footer: {
    socials: {
      email: 'destinysaturday@example.com',
      github: 'https://github.com/destinedcodes',
      twitter: 'https://twitter.com/destinedcodes',
      linkedin: 'https://www.linkedin.com/in/destinedcodes',
      youtube: 'https://youtube.com/destinedcodes',
    },
  },

  home: {
    title: 'Welcome to DestinedCodes Portfolio',
  },

  blog: {
    title: 'My Blog',
    description:
      'All of my thoughts, experiences, and projects, collected in chronological order.',
  },

  project: {
    title: "Look What I've Done",
    description: "Some personal projects I've worked on.",
    getStatus: (status: string) => {
      if (!status) return {};
      switch (status) {
        case 'active':
          return { variant: 'default', text: 'ACTIVE' };
        case 'dev':
          return { variant: 'secondary', text: 'DEV' };
        case 'filed':
          return { variant: 'outline', text: 'FILED' };
        case 'offline':
          return { variant: 'destructive', text: 'OFFLINE' };
      }
    },
    projects: [
      {
        name: 'NextBlog',
        description:
          'A minimalist blog created with Next.js, Shadcn-ui, and Tailwind.css.',
        href: 'https://next-blog.destinedcodes.com',
        github: 'destinedcodes/next-blog',
        status: 'active',
      },
      {
        name: 'AllDone',
        description: 'One-stop project management platform.',
        status: 'dev',
      },
      {
        name: 'Slash Editor',
        description: 'A simple rich text editor.',
        href: 'https://slash.destinedcodes.com',
        github: 'destinedcodes/slash-editor',
      },
      {
        name: 'RMX',
        description:
          'An online editor to quickly create project README.md files and GitHub profile templates.',
        href: 'https://readme.destinedcodes.com',
        github: 'destinedcodes/readme',
        status: 'filed',
      },
      {
        name: 'Resume Generator',
        description:
          'A minimalist online resume generator with potential for major upgrades.',
        href: 'https://resume.destinedcodes.com',
        github: 'destinedcodes/resume',
        status: 'offline',
      },
    ],
  },

  comment: {
    enabled: true,
    engine: 'giscus',
    giscus: {
      repo: 'destinedcodes/destinedcodes-portfolio',
      repoId: 'R_kgDOKTZ_kQ',
      category: 'Announcements',
      categoryId: 'DIC_kwDOKTZ_kc4CfMXK',
      mapping: 'pathname',
      reactionsEnabled: '1',
      emitMetadata: '0',
      inputPosition: 'top',
      theme: 'light',
      lang: 'en',
      loading: 'lazy',
    },
    utterances: {
      src: 'https://utteranc.es/client.js',
      repo: 'destinedcodes/destinedcodes-portfolio',
      'issue-term': 'pathname',
      theme: 'github-light',
      crossorigin: 'anonymous',
      label: '',
      async: true,
    },
  },

  search: {
    enabled: true,
    engine: 'cmdk',
  },
};

export default siteData;

export function getMetadata(page: string) {
  const pagesMetadata: { [key: string]: any } = {
    home: {
      title: `${siteData.title} - Home`,
      description: siteData.description,
    },
    blog: {
      title: `${siteData.title} - Blog`,
      description:
        'All of my thoughts, experiences, and projects, collected in chronological order.',
    },
    projects: {
      title: `${siteData.title} - Projects`,
      description: "Some personal projects I've worked on.",
    },
    video: {
      title: `${siteData.title} - Videos`,
      description:
        'Watch videos of my talks, tutorials, and project showcases.',
    },
    contact: {
      title: `${siteData.title} - Contact`,
      description: 'Get in touch with me via email or social media.',
    },
    about: {
      title: `${siteData.title} - About Me`,
      description:
        'Learn more about Destiny Saturday, also known as DestinedCodes.',
    },
  };

  const defaultMetadata = {
    title: siteData.title,
    description: siteData.description,
    author: siteData.author,
    url: siteData.url,
    theme: siteData.theme,
    language: siteData.language,
  };

  return pagesMetadata[page] || defaultMetadata;
}
