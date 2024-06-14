'use client';

import Image from 'next/image';
import Link from 'next/link';

import { siteData } from '@/site.config';

const Logo = ({ title }: any) => {
  const {
    header: { logo },
  } = siteData;

  return (
    <Link className="flex justify-center items-center" href="/">
      <div className="border-2 border-secondary p-0.5 rounded-full">
        <Image
          src={logo}
          height={32}
          width={32}
          alt="destinedcodes logo"
          className="rounded-full"
        />
      </div>
      {title && (
        <span className="lg:flex hidden pl-2 font-semibold text-2xl">
          {title}
        </span>
      )}
    </Link>
  );
};

export default Logo;
