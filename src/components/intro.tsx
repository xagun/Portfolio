'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Icons } from '@/components/icons';
import { MagneticCursor } from '@/components/magnetic-cursor';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const Intro = () => {
  const { ref } = useSectionInView('Home');

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-dvh w-full scroll-mt-20 flex-col items-center justify-center px-6 text-center"
    >
      {/* Avatar placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="border-border from-primary/30 mb-8 size-20 overflow-hidden rounded-full border bg-gradient-to-br to-purple-500/30"
      >
        {/* Replace with: <Image src="/avatar.jpg" alt="Sagun" fill className="object-cover" /> */}
        <div className="text-primary flex size-full items-center justify-center text-2xl font-bold">
          S
        </div>
      </motion.div>

      {/* Greeting */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-muted-foreground mb-2 text-lg font-light"
      >
        Hello! I&apos;m
      </motion.p>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-foreground text-5xl font-semibold leading-none tracking-tight sm:text-7xl md:text-8xl"
      >
        Sagun Shrestha
      </motion.h1>

      {/* Role */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-muted-foreground mt-2 text-4xl font-light sm:text-6xl md:text-7xl"
      >
        Software Engineer
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="text-muted-foreground mt-6 max-w-md text-base"
      >
        I build responsive, user-friendly web applications with React & Next.js
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 flex items-center gap-4"
      >
        <MagneticCursor strength={0.2}>
          <Link
            href="#contact"
            className="border-foreground/30 text-foreground hover:border-foreground hover:bg-foreground hover:text-background flex items-center gap-2 rounded-full border px-7 py-3 text-sm font-medium transition-all"
          >
            Let&apos;s talk
            <Icons.arrowRight className="size-4" />
          </Link>
        </MagneticCursor>

        <MagneticCursor strength={0.2}>
          <a
            href="/Sagun Shrestha.pdf"
            download
            className="border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground flex items-center gap-2 rounded-full border px-7 py-3 text-sm font-medium transition-all"
          >
            Download CV
            <Icons.download className="size-4" />
          </a>
        </MagneticCursor>
      </motion.div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-6 flex gap-4"
      >
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
            className="hover:text-foreground text-muted-foreground/60 transition-colors"
          >
            <Icon className="size-5" />
          </a>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="border-border flex h-9 w-5 items-start justify-center rounded-full border p-1"
        >
          <div className="bg-muted-foreground h-2 w-0.5 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
