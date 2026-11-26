'use client';

import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 hidden overflow-hidden dark:block">
      {/* Orange blob — upper left */}
      <motion.div
        className="absolute -left-48 -top-48 size-[700px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(230,100,30,0.22) 0%, transparent 68%)',
          filter: 'blur(20px)',
        }}
        animate={{ scale: [1, 1.08, 1], x: [0, 24, 0], y: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Purple blob — right side */}
      <motion.div
        className="absolute -right-48 top-1/4 size-[600px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(110,40,200,0.22) 0%, transparent 68%)',
          filter: 'blur(20px)',
        }}
        animate={{ scale: [1, 1.12, 1], y: [0, -28, 0] }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
      />

      {/* Blue blob — lower center-left */}
      <motion.div
        className="absolute bottom-0 left-1/3 size-[500px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(40,70,220,0.16) 0%, transparent 68%)',
          filter: 'blur(20px)',
        }}
        animate={{ scale: [1, 1.1, 1], x: [0, -20, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
      />
    </div>
  );
};
