'use client';

import { useRef } from 'react';
import { flushSync } from 'react-dom';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

import { Button, ButtonProps } from '@/components/button';
import { Icons } from '@/components/icons';
import { springConfig } from '@/lib/animations';

type ViewTransition = { ready: Promise<void>; finished: Promise<void> };
type DocumentWithViewTransition = Document & {
  startViewTransition?: (cb: () => void) => ViewTransition;
};

const DURATION = 700;

export const ThemeToggle = ({ className }: ButtonProps) => {
  const { resolvedTheme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleTheme = () => {
    const next = resolvedTheme === 'dark' ? 'light' : 'dark';
    const doc = document as DocumentWithViewTransition;
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (!doc.startViewTransition || reduceMotion || !buttonRef.current) {
      setTheme(next);
      return;
    }

    // Bubble starts at the center of the button and grows to cover the
    // farthest corner of the viewport.
    const { left, top, width, height } =
      buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const root = document.documentElement;
    // Turn off the global color transitions so both snapshots are clean.
    root.classList.add('theme-switching');

    const transition = doc.startViewTransition(() => {
      // Apply the class right away so the new snapshot already has the new theme.
      root.classList.toggle('dark', next === 'dark');
      root.classList.toggle('light', next === 'light');
      root.style.colorScheme = next;
      flushSync(() => setTheme(next));
    });

    transition.ready.then(() => {
      root.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: DURATION,
          easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    });

    transition.finished.finally(() => {
      root.classList.remove('theme-switching');
    });
  };

  return (
    <Button
      ref={buttonRef}
      className={`${className} hover:bg-muted hover:opacity-100`}
      variant="secondary"
      size="icon"
      aria-label="theme toggle"
      onClick={toggleTheme}
    >
      <motion.div
        animate={{ rotate: resolvedTheme === 'dark' ? 0 : 180 }}
        transition={springConfig.smooth}
      >
        <Icons.sun className="size-5 dark:hidden" />
        <Icons.moon className="hidden size-5 dark:block" />
      </motion.div>
    </Button>
  );
};
