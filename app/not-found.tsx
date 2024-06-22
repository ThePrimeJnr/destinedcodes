import type { Metadata } from 'next';

import getMetadata from '@/lib/utils/metadata';

export const metadata: Metadata = getMetadata('default');
const NotFound = () => {
  return (
    <h1 className="flex items-center text-9xl font-bold justify-center min-h-[calc(100vh-200px)]">
      404
    </h1>
  );
};

export default NotFound;
