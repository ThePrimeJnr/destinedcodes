import { Inter, JetBrains_Mono, Public_Sans } from 'next/font/google';

const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-public-sans',
});
// const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
// const jetBrains = JetBrains_Mono({
//   subsets: ['latin'],
//   variable: '--font-jetbrains',
// });
const fonts = {
  publicSans,
  // inter,
  // jetBrains,
};

export default fonts;
