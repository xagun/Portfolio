import { Poppins } from 'next/font/google';

const fontSans = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
});

export const fonts = [fontSans.variable];
