import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'Sagun Shrestha',
  description:
    "I'm Sagun Shrestha, a Frontend Developer from Nepal focused on building responsive, user-friendly web applications with React and Next.js, while continuously expanding my skills in backend technologies.",
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
