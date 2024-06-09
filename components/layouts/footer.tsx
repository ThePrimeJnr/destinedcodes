'use client';

import { Github, Linkedin, Mail, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

import Logo from '@/components/logo';

import siteData from '@/site.config';

import { Separator } from '../ui/separator';

const Footer = () => {
  return (
    <>
      <Separator />
      <footer className="container flex flex-col md:flex-row justify-between items-center py-4">
        <Logo title={'DestinedCodes'} />
        <div className="text-center md:text-left mt-4 md:mt-0">
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

  const icons: any = {
    email: <Mail />,
    github: <Github />,
    twitter: <Twitter />,
    youtube: <Youtube />,
    linkedin: <Linkedin />,
  };

  return (
    <div className="flex items-center space-x-4 mt-4 md:mt-0">
      {Object.keys(socials).map((item) => {
        if (socials[item]) {
          return (
            <div
              className="hover:scale-110 transition-transform duration-200"
              key={item}
            >
              {item === 'email' ? (
                <Link href={`mailto:${socials[item]}`}>{icons[item]}</Link>
              ) : (
                <Link href={socials[item]}>{icons[item]}</Link>
              )}
            </div>
          );
        }
      })}
    </div>
  );
};

export default Footer;
