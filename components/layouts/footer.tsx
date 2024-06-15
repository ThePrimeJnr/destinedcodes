import SocialList from '../social-list';

const Footer = () => {
  return (
    <footer className="flex md:flex-row flex-col justify-between items-center p-4 md:p-6 container">
      <span className="mb-2 md:mb-0 text-center md:text-left">
        © 2024 DestinedCodes. All rights reserved
      </span>
      <SocialList />
    </footer>
  );
};

export default Footer;
