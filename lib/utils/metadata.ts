import siteData from '@/site.config';

export default function getMetadata(page: string) {
  const pagesMetadata: { [key: string]: any } = {
    home: {
      title: siteData.title,
      description: siteData.description,
      generator: 'Next.js',
      author: [siteData.author],
      creator: [siteData.author],
      publisher: [siteData.author],
      metadataBase: new URL(siteData.url),
      openGraph: {
        title: siteData.title,
        description: siteData.description,
        url: siteData.url,
        siteName: 'Destiny Saturday (DestinedCodes)',
        locale: 'en',
        type: 'website',
        images: [
          {
            url: `${siteData.url}/images/og-image.png`,
            width: 1200,
            height: 630,
            alt: 'Destiny Saturday (DestinedCodes) - OG Image',
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

  const defaultMetadata: any = {
    title: siteData.title,
    description: siteData.description,
    generator: 'Next.js',
    author: [siteData.author],
    creator: [siteData.author],
    publisher: [siteData.author],
    metadataBase: new URL(siteData.url),
    openGraph: {
      title: siteData.title,
      description: siteData.description,
      url: siteData.url,
      siteName: 'Destiny Saturday (DestinedCodes)',
      locale: 'en',
      type: 'website',
      images: [
        {
          url: `${siteData.url}/images/og-image.png`,
          width: 1200,
          height: 630,
          alt: 'Destiny Saturday (DestinedCodes) - OG Image',
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
