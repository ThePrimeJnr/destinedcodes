'use client';

import Link from 'next/link';

import siteData from '@/site.config';

import { Separator } from '../ui/separator';

const Footer = () => {
  return (
    <>
      <Separator />
      <footer className="flex md:flex-row flex-col justify-between items-center py-4 container">
        <div className="mb-2 md:mb-0 text-center md:text-left">
          © 2024 DestinedCodes. All rights reserved
        </div>
        <SocialList />
      </footer>
    </>
  );
};

const SocialList = () => {
  const {
    footer: { socials },
  } = siteData;

  return (
    <div className="flex items-center space-x-4 mt-4 md:mt-0">
      {socials.map((social: any) => (
        <div
          className="hover:scale-110 transition-transform duration-200"
          key={social.value}
        >
          {social.name === 'Mail' ? (
            <Link href={`mailto:${social.value}`}>
              <social.logo />
            </Link>
          ) : (
            <Link href={social.value}>
              <social.logo />
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Footer;
