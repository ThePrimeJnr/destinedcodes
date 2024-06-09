import type { Metadata } from 'next';

import { getPostsData } from '@/lib/utils/server-utils';

import BlogContent from '@/components/blog-content';

import { getMetadata } from '@/site.config';

export const metadata: Metadata = getMetadata('home');

const Blog = () => {
  return <BlogContent posts={getPostsData()} />;
};

export default Blog;
