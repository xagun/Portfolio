'use client';

import { motion } from 'framer-motion';

import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-16 w-full scroll-mt-20"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
        {/* Left — text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground/60 mb-4 text-xs font-medium uppercase tracking-[0.3em]"
          >
            About me
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="text-foreground mb-8 text-3xl font-light uppercase italic leading-tight tracking-tight sm:text-4xl"
          >
            Building interfaces
            <br />
            <span className="font-semibold not-italic">people love to use</span>
          </motion.h2>

          <div className="space-y-4">
            {[
              "I'm Sagun Shrestha, a frontend developer from Nepal with experience building production-ready web applications for logistics, education, and marketing domains. I enjoy turning ideas into clean, performant interfaces.",
              'My core stack includes JavaScript, TypeScript, React, Next.js, Tailwind CSS, and component libraries. I have also worked with PHP and Laravel, and actively expanding into backend technologies.',
              "I'm comfortable mentoring juniors, owning features from idea to deployment, and collaborating across design and backend teams. Continuous learning and building impactful products keep me motivated.",
            ].map((text, i) => (
              <motion.p
                key={i}
                variants={fadeInUp}
                className="text-muted-foreground text-sm leading-7"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Right — visual card */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-start justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-xs">
            {/* Avatar card */}
            <div className="border-border from-primary/10 relative overflow-hidden rounded-3xl border bg-gradient-to-br via-purple-500/10 to-blue-500/10 p-8">
              <div className="border-primary/30 bg-primary/10 text-primary mb-6 flex size-20 items-center justify-center rounded-full border text-3xl font-bold">
                S
              </div>
              <div className="space-y-1">
                <p className="text-foreground text-lg font-semibold">
                  Sagun Shrestha
                </p>
                <p className="text-muted-foreground text-sm">
                  Frontend Developer
                </p>
                <p className="text-muted-foreground/60 text-sm">
                  Kathmandu, Nepal
                </p>
              </div>

              {/* Stats */}
              <div className="border-border mt-6 grid grid-cols-2 gap-4 border-t pt-6">
                {[
                  { value: '4+', label: 'Years exp.' },
                  { value: '10+', label: 'Projects' },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p className="text-foreground text-2xl font-bold">
                      {value}
                    </p>
                    <p className="text-muted-foreground text-xs">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative dot */}
            <div className="bg-primary/60 absolute -right-3 -top-3 size-6 rounded-full blur-sm" />
          </div>
        </motion.div>
      </div>

      {/* Skills marquee below */}
      <Skills />
    </motion.section>
  );
};
