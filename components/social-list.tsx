import Link from 'next/link';

import { siteData } from '@/site.config';

const SocialList = () => {
  const {
    footer: { socials },
  } = siteData;

  return (
    <div className="grid grid-cols-3 gap-8 mt-8 max-w-sm">
      {socials.map((social: any) => (
        <div
          className="hover:scale-110 transition-transform duration-200 hover:text-secondary"
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
          <span className="underline ml-2">{social.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SocialList;
