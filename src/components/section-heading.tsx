'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

import { fadeInUp, textReveal } from '@/lib/animations';

type TProps = {
  heading: string;
  content?: string | ReactNode;
  number?: string;
};

export const SectionHeading = ({ heading, content }: TProps) => {
  return (
    <div className="mb-10">
      <motion.h2
        variants={textReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-foreground text-4xl font-bold tracking-tight sm:text-5xl"
      >
        {heading}
      </motion.h2>
      {content && (
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mt-3 text-base leading-relaxed"
        >
          {content}
        </motion.p>
      )}
    </div>
  );
};
