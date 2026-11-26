import { Variants } from 'framer-motion';

// Spring easing configurations
export const springConfig = {
  gentle: { type: 'spring', stiffness: 100, damping: 20, mass: 1 },
  smooth: { type: 'spring', stiffness: 150, damping: 25, mass: 0.8 },
  bouncy: { type: 'spring', stiffness: 300, damping: 20, mass: 0.5 },
  snappy: { type: 'spring', stiffness: 400, damping: 30, mass: 0.3 },
} as const;

// Common animation variants
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springConfig.smooth,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: springConfig.gentle,
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springConfig.smooth,
  },
};

export const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: springConfig.smooth,
  },
};

export const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: springConfig.smooth,
  },
};

// Stagger container variants
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Text reveal variants
export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    clipPath: 'inset(0 0 100% 0)',
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0 0 0% 0)',
    transition: {
      ...springConfig.smooth,
      clipPath: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  },
};

// Hover variants
export const hoverScale: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: springConfig.smooth,
  },
};

export const hoverGlow: Variants = {
  rest: {
    boxShadow: '0 0 0px rgba(59, 130, 246, 0)',
  },
  hover: {
    boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
    transition: springConfig.gentle,
  },
};

// 3D tilt variants
export const tilt3D = {
  rest: { rotateX: 0, rotateY: 0 },
  hover: {
    rotateX: 5,
    rotateY: -5,
    transition: springConfig.smooth,
  },
};

// Magnetic effect (for cursor)
export const magneticEffect = {
  rest: { x: 0, y: 0 },
  hover: {
    x: [0, -5, 5, -3, 3, 0],
    y: [0, -5, 5, -3, 3, 0],
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};

// Utility function to create staggered children
export const createStaggerChildren = (delay: number = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: delay,
    },
  },
});

// Utility function for scroll-triggered animations
export const scrollReveal = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...springConfig.smooth,
      duration: 0.6,
    },
  },
};
