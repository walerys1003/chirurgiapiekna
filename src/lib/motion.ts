export const surgical = {
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  stagger: {
    animate: { transition: { staggerChildren: 0.08 } }
  },
  headlineReveal: {
    initial: { clipPath: 'inset(100% 0 0 0)' },
    animate: { clipPath: 'inset(0% 0 0 0)' },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  },
  hoverLift: {
    whileHover: { y: -4, transition: { duration: 0.3, ease: 'easeOut' } }
  },
  imageZoom: {
    whileHover: { scale: 1.02, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  },
};