'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          I&apos;m Sagun Shrestha, a frontend developer from Nepal with
          experience building production-ready web applications for logistics,
          education, and marketing domains. I enjoy turning ideas into clean,
          performant interfaces and collaborating closely with designers and
          backend teams to deliver pixel-perfect experiences.
        </p>
        <p className="mb-4">
          My core stack includes JavaScript, TypeScript, React, Next.js, HTML,
          CSS/SCSS, Tailwind CSS, and component libraries like Chakra UI. I have
          also worked with PHP and Laravel, and I&apos;m actively growing my
          skills in backend technologies and APIs to become more versatile
          across the stack.
        </p>
        <p>
          I&apos;m comfortable working in team-based environments, mentoring
          juniors, and owning features from idea to deployment. Continuous
          learning, problem-solving, and building impactful products are what
          keep me motivated.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
