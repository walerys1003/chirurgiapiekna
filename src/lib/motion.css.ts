export const motionTokens = {
  'motion-duration-surgical': '0.6s',
  'motion-duration-quick': '0.3s',
  'motion-duration-slow': '0.8s',
  'motion-duration-instant': '0s',

  'motion-ease-surgical': 'cubic-bezier(0.22, 1, 0.36, 1)',
  'motion-ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
  'motion-ease-in': 'cubic-bezier(0.4, 0, 1, 1)',

  'motion-y-offset': '20px',
  'motion-y-offset-max': '30px',
  'motion-scale-max': '1.03',
  'motion-hover-lift': '-4px',

  'motion-stagger-delay': '0.08s',

  'motion-parallax-background': '-0.15',
  'motion-parallax-midground': '-0.08',
  'motion-parallax-foreground': '0'
} as const;

export type MotionToken = typeof motionTokens;