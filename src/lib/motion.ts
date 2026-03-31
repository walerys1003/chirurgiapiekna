import type { Variants, Transition } from 'framer-motion';

type SurgicalVariant = {
  initial: Record<string, unknown>;
  animate: Record<string, unknown>;
  transition: Transition;
};

type StaggerVariant = {
  animate: { transition: { staggerChildren: number; staggerDirection?: -1 | 1 } };
};

type HoverVariant = {
  whileHover: { y?: number; scale?: number; transition: Transition };
};

type ParallaxConfig = {
  background: { speed: number };
  midground: { speed: number };
  foreground: { speed: number };
};

type MagneticConfig = {
  maxDistance: number;
  transition: Transition;
};

type SpringConfig = {
  light: Transition;
  medium: Transition;
  heavy: Transition;
};

type ViewportConfig = {
  once: { once: boolean };
  every: { once: boolean };
  amount: number;
  margin: string;
};

export const surgical = {
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  },

  fadeDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  },

  fadeOut: {
    initial: { opacity: 1 },
    animate: { opacity: 0 },
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  },

  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  },

  stagger: {
    animate: { transition: { staggerChildren: 0.08 } }
  },

  staggerReverse: {
    animate: { transition: { staggerChildren: 0.08, staggerDirection: -1 } }
  },

  parallax: {
    background: { speed: -0.15 },
    midground: { speed: -0.08 },
    foreground: { speed: 0 }
  },

  headlineReveal: {
    initial: { clipPath: 'inset(100% 0 0 0)' },
    animate: { clipPath: 'inset(0% 0 0 0)' },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  },

  hoverLift: {
    whileHover: {
      y: -4,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  },

  imageZoom: {
    whileHover: {
      scale: 1.02,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  },

  magnetic: {
    maxDistance: 8,
    transition: { type: 'spring', stiffness: 200, damping: 20 }
  },

  spring: {
    light: { type: 'spring', stiffness: 300, damping: 25 },
    medium: { type: 'spring', stiffness: 200, damping: 20 },
    heavy: { type: 'spring', stiffness: 150, damping: 18 }
  },

  viewport: {
    once: { once: true },
    every: { once: false },
    amount: 0.3,
    margin: '0px'
  }
} as const satisfies SurgicalMotion;

export interface SurgicalMotion {
  fadeUp: SurgicalVariant;
  fadeDown: SurgicalVariant;
  fadeOut: SurgicalVariant;
  fadeIn: SurgicalVariant;
  stagger: StaggerVariant;
  staggerReverse: StaggerVariant;
  parallax: ParallaxConfig;
  headlineReveal: SurgicalVariant;
  hoverLift: HoverVariant;
  imageZoom: HoverVariant;
  magnetic: MagneticConfig;
  spring: SpringConfig;
  viewport: ViewportConfig;
}

export const surgicalTransition = {
  surgical: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } as const,
  quick: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } as const,
  slow: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } as const,
  instant: { duration: 0 } as const
};

export type SurgicalTransition = typeof surgicalTransition;