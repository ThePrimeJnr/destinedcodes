import {
  ArticleOutlined,
  Code,
  EventAvailableOutlined,
  HomeOutlined,
  VideoLibraryOutlined,
} from '@mui/icons-material';

export interface Route {
  name: string;
  value: string;
  logo: React.ComponentType;
}

const routes: Route[] = [
  { name: 'Home', value: '/', logo: HomeOutlined },
  { name: 'Blog', value: '/blog', logo: ArticleOutlined },
  { name: 'Projects', value: '/projects', logo: Code },
  { name: 'Videos', value: '/videos', logo: VideoLibraryOutlined },
  { name: 'Contact', value: '/contact', logo: EventAvailableOutlined },
];
export default routes;
