'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

import { useActiveSection } from '@/components/active-section-provider';
import { Icons } from '@/components/icons';
import { ThemeToggle } from '@/components/theme-toggle';
import { links } from '@/lib/data';

// Shared spring used for the button <-> panel shape morph.
const shellTransition = {
  type: 'spring',
  bounce: 0.18,
  duration: 0.55,
} as const;

// Border radius is kept IDENTICAL on the button and the panel — do not tween
// this value between two different numbers (e.g. 9999 -> 24). Framer Motion's
// layout animation already scale-corrects a constant radius as the box
// resizes, so the same px value auto-clamps to a full stadium shape on the
// small button (radius > half its height) and reads as soft card corners on
// the large panel. Animating the raw value on top of that correction is what
// caused the square-then-snap-rounded glitch.
const SHELL_RADIUS = 28;

// Inner content fades/staggers in only once the shell has (mostly) finished
// expanding, so text doesn't visibly stretch while the box is resizing.
const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.25,
      delay: 0.22,
      when: 'beforeChildren',
      staggerChildren: 0.06,
    },
  },
  exit: { opacity: 0, transition: { duration: 0.12 } },
};

const linkVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

const SOCIALS = [
  { href: 'https://www.linkedin.com/in/xagun-shrestha', label: 'LinkedIn' },
  { href: 'https://github.com/xagun', label: 'GitHub' },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { setActiveSection, setTimeOfLastClick } = useActiveSection();

  const close = () => setOpen(false);

  return (
    <>
      {/* Logo — fixed top-left */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed left-6 top-6 z-40 md:left-8 md:top-8"
      >
        <Link
          href="#home"
          onClick={() => {
            setActiveSection('Home');
            setTimeOfLastClick(Date.now());
          }}
          className="text-foreground text-sm font-semibold tracking-wide transition-opacity hover:opacity-60"
        >
          Sagun.
        </Link>
      </motion.div>

      {/* Right controls — fixed top-right */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed right-5 top-5 z-40 flex items-center gap-3 md:right-8 md:top-7"
      >
        <ThemeToggle />

        {/* Collapsed pill — shares layoutId with the panel below, so it's the
            same element morphing between the two shapes, not two separate ones. */}
        <AnimatePresence initial={false}>
          {!open && (
            <motion.button
              key="menu-button"
              layoutId="menu-shell"
              transition={shellTransition}
              onClick={() => setOpen(true)}
              style={{ borderRadius: SHELL_RADIUS }}
              className="border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 border px-5 py-2 text-sm font-medium transition-colors active:scale-95"
            >
              Menu
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Expanded panel — the button above grows into this shape. */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm"
              onClick={close}
            />

            {/* Panel — same layoutId as the button, so Framer morphs shape/position/color */}
            <motion.div
              key="menu-panel"
              layoutId="menu-shell"
              transition={shellTransition}
              style={{
                borderRadius: SHELL_RADIUS,
                minHeight: 'min(70vh, 480px)',
              }}
              className="bg-primary fixed right-5 top-5 z-40 flex w-[min(88vw,360px)] flex-col justify-between overflow-hidden p-8 shadow-2xl md:right-8 md:top-7"
            >
              {/* Inner content fades in once the shell has expanded */}
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex h-full flex-col justify-between"
              >
                {/* Close button top-right */}
                <button
                  onClick={close}
                  aria-label="Close menu"
                  className="text-background/70 hover:text-background absolute right-4 top-4 transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M3 3 L13 13" />
                    <path d="M13 3 L3 13" />
                  </svg>
                </button>

                {/* Nav links */}
                <nav className="mt-6 flex-1">
                  <ul className="space-y-1">
                    {links.map(({ name, hash }) => (
                      <motion.li key={name} variants={linkVariants}>
                        <Link
                          href={hash}
                          onClick={() => {
                            close();
                            setActiveSection(name);
                            setTimeOfLastClick(Date.now());
                          }}
                          className="text-background/90 hover:text-background group flex items-center justify-between py-2 text-3xl font-semibold transition-all sm:text-4xl"
                        >
                          {name}
                          <Icons.arrowRight className="size-5 opacity-0 transition-opacity group-hover:opacity-100" />
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Social links at bottom */}
                <motion.div
                  variants={linkVariants}
                  className="border-background/20 mt-8 flex gap-5 border-t pt-5"
                >
                  {SOCIALS.map(({ href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-background/70 hover:text-background text-sm font-medium transition-colors"
                    >
                      {label}
                    </a>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
