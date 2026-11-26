'use client';

import { motion } from 'framer-motion';

import { fadeInUp } from '@/lib/animations';

export const SectionDivider = () => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative my-10 h-16 w-1 sm:my-16"
    >
      <div className="bg-muted absolute inset-0 rounded-full" />
    </motion.div>
  );
};
