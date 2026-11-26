'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

export const ThemeTransition = () => {
  const { resolvedTheme } = useTheme();
  const prevThemeRef = useRef<string | undefined>();
  const isFirstMount = useRef(true);

  useEffect(() => {
    // Skip transition on initial mount
    if (isFirstMount.current) {
      isFirstMount.current = false;
      prevThemeRef.current = resolvedTheme;
      return;
    }

    // Only trigger transition when theme actually changes
    if (resolvedTheme && resolvedTheme !== prevThemeRef.current) {
      // Add transition class to html element for smooth color transitions
      const html = document.documentElement;
      html.style.transition =
        'background-color 0.3s ease-in-out, color 0.3s ease-in-out';

      // Remove transition after animation completes
      setTimeout(() => {
        html.style.transition = '';
      }, 300);

      prevThemeRef.current = resolvedTheme;
    }
  }, [resolvedTheme]);

  return null;
};
