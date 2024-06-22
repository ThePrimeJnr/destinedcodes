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
            image: '/images/og-image.png',
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
    blog: {},
    projects: {},
    video: {},
    contact: {},
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
          image: '/images/og-image.png',
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
