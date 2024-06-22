import siteData from '@/site.config';

export default function getMetadata(page: string) {
  const defaultMetadata = {
    title: siteData.title,
    description: siteData.description,
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
          url: siteData.ogImageUrl,
          width: 1200,
          height: 630,
          alt: 'Destiny Saturday (DestinedCodes)',
          image: siteData.ogImageUrl,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@destinedcodes',
      creator: '@destinedcodes',
    },
  };

  const pagesMetadata: { [key: string]: any } = {
    home: {
      ...defaultMetadata,
    },
    blog: {
      ...defaultMetadata,
      openGraph: {
        ...defaultMetadata.openGraph,
        type: 'article',
      },
    },
    projects: {
      ...defaultMetadata,
    },
    video: {
      ...defaultMetadata,
    },
    contact: {
      ...defaultMetadata,
    },
  };

  return pagesMetadata[page] || defaultMetadata;
}
