'use client';

import Image from 'next/image';
import Link from 'next/link';

import siteData from '@/site.config';

const Logo = ({ title }: any) => {
  const {
    header: { logo },
  } = siteData;

  return (
    <Link className="flex justify-center items-center pr-4" href="/">
      <div className="border-2 border-primary dark:border-foreground p-0.5 rounded-full">
        <Image
          src={logo}
          height={32}
          width={32}
          alt="destinedcodes logo"
          className="rounded-full"
        />
      </div>
      {title && (
        <div className="lg:flex hidden pl-2 font-semibold text-2xl">
          {title}
        </div>
      )}
    </Link>
  );
};

export default Logo;
