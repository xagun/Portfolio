'use client';

import { motion } from 'framer-motion';

import { Icons } from '@/components/icons';
import { fadeInUp } from '@/lib/animations';

export const Footer = () => {
  return (
    <motion.footer
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="border-border my-8 flex w-full flex-col items-center gap-5 border-t pt-8"
    >
      <div className="flex gap-5">
        {[
          {
            href: 'https://www.linkedin.com/in/xagun-shrestha',
            icon: Icons.linkedin,
            label: 'LinkedIn',
          },
          {
            href: 'https://github.com/xagun',
            icon: Icons.github,
            label: 'GitHub',
          },
        ].map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground/60 hover:text-foreground transition-colors"
          >
            <Icon className="size-5" />
          </a>
        ))}
      </div>

      <p className="text-muted-foreground/50 text-center text-xs">
        © {new Date().getFullYear()} Sagun Shrestha. Designed & built with
        care.
      </p>
    </motion.footer>
  );
};
