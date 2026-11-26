'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  // Ring trails the pointer slightly. Overdamped, so it never overshoots or wobbles.
  const ringSpring = { stiffness: 400, damping: 40, mass: 0.5 };
  const ringX = useSpring(cursorX, ringSpring);
  const ringY = useSpring(cursorY, ringSpring);

  useEffect(() => {
    const isFinePointer = window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    ).matches;
    if (!isFinePointer) return;

    setIsVisible(true);

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsHidden(false);
    };

    // Hover check only runs when the element under the pointer changes.
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      setIsHovering(
        !!target?.closest(
          'a, button, [role="button"], input, textarea, select, label'
        )
      );
    };

    const onLeave = () => setIsHidden(true);

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  const color = isHovering
    ? 'hsl(var(--foreground))'
    : 'hsl(var(--muted-foreground))';

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] transition-opacity duration-200"
        style={{ x: ringX, y: ringY, opacity: isHidden ? 0 : 1 }}
      >
        <motion.div
          className="size-12 rounded-full border-2 bg-transparent"
          style={{ borderColor: color, x: -24, y: -24 }}
          animate={{ scale: isHovering ? 1.5 : 1, borderColor: color }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] transition-opacity duration-200"
        style={{ x: cursorX, y: cursorY, opacity: isHidden ? 0 : 1 }}
      >
        <motion.div
          className="size-3 rounded-full"
          style={{ background: color, x: -6, y: -6 }}
          animate={{ scale: isHovering ? 0.6 : 1, background: color }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        />
      </motion.div>
    </>
  );
};
