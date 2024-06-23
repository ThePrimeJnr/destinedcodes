import {
  DescriptionOutlined,
  GitHub,
  LinkedIn,
  MailOutlined,
  X,
  YouTube,
} from '@mui/icons-material';

export interface Social {
  name: string;
  value: string;
  logo: React.ComponentType;
}

const socials: Social[] = [
  {
    name: 'Mail',
    value: 'contact@destinedcodes.com',
    logo: MailOutlined,
  },
  {
    name: 'GitHub',
    value: 'https://github.com/destinedcodes',
    logo: GitHub,
  },
  {
    name: 'X',
    value: 'https://twitter.com/destinedcodes',
    logo: X,
  },
  {
    name: 'LinkedIn',
    value: 'https://www.linkedin.com/in/destinedcodes',
    logo: LinkedIn,
  },
  {
    name: 'Youtube',
    value: 'https://youtube.com/@destinedcodes',
    logo: YouTube,
  },
  {
    name: 'Resume',
    value:
      '/resume',
    logo: DescriptionOutlined,
  },
];

export default socials;
