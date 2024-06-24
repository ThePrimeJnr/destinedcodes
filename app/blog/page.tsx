import type { Metadata } from 'next';

import getMetadata from '@/lib/utils/metadata';

import Filter from '@/components/blog/filter';

export const metadata: Metadata = getMetadata('blog');

const Blog = () => {
  return (
    <div className="space-y-20 md:space-y-36 py-20">
      <Filter />
    </div>
  );
};

export default Blog;
