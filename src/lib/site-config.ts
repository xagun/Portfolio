import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'Sagun Shrestha',
  description:
    "Hello, I'm Sagun. I am front-end developer from Nepal. I enjoy building sites and apps. My focus is React (Next.js).",
  keywords: [
    'Sagun Shrestha',
    'Front-end developer',
    'Nepal',
    'React',
    'Next.js',
    'Web development',
    'Front-end',
    'Responsive design',
    'JavaScript',
    'HTML',
    'CSS',
    'Website',
    'Web applications',
    'Developer',
    'Programming',
  ],
  url: env.SITE_URL || 'https://example.com',
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || '',
};
