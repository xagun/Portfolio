'use client';

import { motion } from 'framer-motion';

import { fadeInUp } from '@/lib/animations';

const SKILLS = [
  'HTML',
  'CSS',
  'Sass',
  'Tailwind CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Redux',
  'NestJS',
  'Prisma',
  'Docker',
  'Git',
  'REST APIs',
];

const skillText = SKILLS.join(' • ');
const doubled = `${skillText} • ${skillText} • `;

const MarqueeTrack = ({ reverse = false }: { reverse?: boolean }) => (
  <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
    <div
      className={`flex shrink-0 whitespace-nowrap ${
        reverse ? 'animate-marquee-reverse' : 'animate-marquee'
      } group-hover:[animation-play-state:paused]`}
    >
      <span className="text-foreground/10 dark:text-foreground/[0.07] text-[clamp(2.5rem,6vw,5rem)] font-light italic leading-none">
        {doubled}
      </span>
      <span className="text-foreground/10 dark:text-foreground/[0.07] text-[clamp(2.5rem,6vw,5rem)] font-light italic leading-none">
        {doubled}
      </span>
    </div>
  </div>
);

export const Skills = () => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-12 w-full space-y-3 overflow-hidden"
    >
      <MarqueeTrack />
      <MarqueeTrack reverse />
    </motion.div>
  );
};
