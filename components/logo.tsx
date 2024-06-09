'use client';

import Image from 'next/image';
import Link from 'next/link';

import siteData from '@/site.config';

const Logo = ({ title }: any) => {
  const {
    header: { logo },
  } = siteData;

  return (
    <Link className="flex justify-center items-center mr-4" href="/">
      <div className="border-2 p-0.5 rounded-full">
        <Image src={logo} height={32} width={32} alt="logo" />
      </div>
      {title && <div className="ml-2 text-2xl font-semibold">{title}</div>}
    </Link>
  );
};

export default Logo;
