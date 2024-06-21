import socials, { Social } from '@/data/socials';
import Link from 'next/link';

type SocialListProps = {
  showNames?: boolean;
};

const SocialList: React.FC<SocialListProps> = ({ showNames = true }) => {
  const filteredSocials = showNames
    ? socials
    : socials.filter((social: Social) => social.name !== 'Resume');

  return (
    <div
      className={
        showNames
          ? 'grid grid-cols-3 gap-6 lg:gap-8 mt-8 max-w-sm text-sm lg:md'
          : 'flex flex-wrap gap-6 max-w-sm text-sm lg:md'
      }
    >
      {filteredSocials.map((social: Social) => (
        <Link
          href={
            social.name === 'Mail' ? `mailto:${social.value}` : social.value
          }
          target="_blank"
          rel="noopener noreferrer"
          key={social.name}
          className="hover:scale-110 transition-transform duration-200 hover:text-secondary flex items-center"
        >
          <social.logo />
          {showNames && <span className="underline ml-2">{social.name}</span>}
        </Link>
      ))}
    </div>
  );
};

export default SocialList;
