import {
  ArticleOutlined,
  Code,
  DescriptionOutlined,
  EventAvailableOutlined,
  GitHub,
  HomeOutlined,
  LinkedIn,
  MailOutlined,
  VideoLibraryOutlined,
  X,
  YouTube,
} from '@mui/icons-material';

const root = `https://destinedcodes.com`;

export const siteData: any = {
  author: 'Destiny Saturday',
  title: 'Destiny Saturday (DestinedCodes)',
  description:
    "Destiny Saturday's personal portfolio and blog, created with Next.js, Shadcn-ui, and Tailwind.css.",
  language: 'en',
  url: 'https://www.destinedcodes.com',
  theme: 'light',

  header: {
    logo: '/logos/destinedcodes.png',
    title: 'DestinedCodes',
    routes: [
      { name: 'Home', value: '/', logo: HomeOutlined },
      { name: 'Blog', value: '/blog', logo: ArticleOutlined },
      { name: 'Projects', value: '/projects', logo: Code },
      { name: 'Videos', value: '/videos', logo: VideoLibraryOutlined },
      { name: 'Contact', value: '/contact', logo: EventAvailableOutlined },
    ],
  },

  socials: [
    {
      name: 'Mail',
      value: 'contact@destinedcodes.com',
      logo: MailOutlined,
    },
    {
      name: 'GitHub',
      value: 'https://github.com/destinedcodes',
      logo: GitHub,
    },
    {
      name: 'X',
      value: 'https://twitter.com/destinedcodes',
      logo: X,
    },
    {
      name: 'LinkedIn',
      value: 'https://www.linkedin.com/in/destinedcodes',
      logo: LinkedIn,
    },
    {
      name: 'Youtube',
      value: 'https://youtube.com/@destinedcodes',
      logo: YouTube,
    },
    {
      name: 'Resume',
      value:
        'https://docs.google.com/document/d/1o_wd6o3iiGk8k_mHdkVq2Tkfis3PaT24OpcNK9M2Ssk/export?usp=sharing&format=pdf',
      logo: DescriptionOutlined,
    },
  ],
};

export function getMetadata(page: string) {
  const pagesMetadata: { [key: string]: any } = {
    home: {
      title: `${siteData.title} - Home`,
      description: siteData.description,
      openGraph: {
        type: 'website',
        locale: 'en',
        url: `${root}`,
        siteName: 'destinedcodes.com',
        title: `${siteData.title} - Home`,
        description: siteData.description,
        images: [
          {
            url: 'https://destinedcodes.com/images/og-image.png',
            width: 1200,
            height: 630,
            type: 'image/png',
            image: '/images/og-image.png',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        site: '@destinedcodes',
        creator: '@destinedcodes',
      },
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
    openGraph: {
      type: 'website',
      locale: 'en',
      url: `${root}`,
      siteName: 'destinedcodes.com',
      title: `${siteData.title} - Home`,
      description: siteData.description,
      images: [
        {
          url: 'https://destinedcodes.com/images/og-image.png',
          width: 1200,
          height: 630,
          type: 'image/png',
          image: '/images/og-image.png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@destinedcodes',
      creator: '@destinedcodes',
    },
  };

  return pagesMetadata[page] || defaultMetadata;
}
