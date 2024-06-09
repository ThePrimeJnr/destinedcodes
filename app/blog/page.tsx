import type { Metadata } from 'next';

import BlogContent from '@/components/blog-content';

import { getPostsData } from '@/lib/utils/server-utils';

import { getMetadata } from '@/site.config';

export const metadata: Metadata = getMetadata('home');

const Blog = () => {
  return <BlogContent posts={getPostsData()} />;
};

export default Blog;
