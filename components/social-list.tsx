import Link from 'next/link';

import { siteData } from '@/site.config';

const SocialList = () => {
  const {
    footer: { socials },
  } = siteData;

  return (
    <div className="grid grid-cols-3 gap-8 mt-8 max-w-sm">
      {socials.map((social: any) => (
        <Link
          href={
            social.name === 'Mail' ? `mailto:${social.value}` : social.value
          }
          key={social.name}
          className="hover:scale-110 transition-transform duration-200 hover:text-secondary flex items-center"
        >
          <social.logo />
          <span className="underline ml-2">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default SocialList;
