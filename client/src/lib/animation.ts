import { Variants } from "framer-motion";

// Fade in animation
export const fadeIn = (direction = "up", delay = 0): Variants => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.6,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

// Stagger children
export const staggerContainer = (
  staggerChildren: number,
  delayChildren = 0
): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

// Text reveal
export const textReveal: Variants = {
  hidden: {
    width: "0%",
  },
  visible: {
    width: "100%",
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

// Glow effect
export const glowPulse: Variants = {
  initial: {
    boxShadow: "0 0 0px rgba(138, 43, 226, 0.2)",
  },
  animate: {
    boxShadow: [
      "0 0 5px rgba(138, 43, 226, 0.5)",
      "0 0 20px rgba(138, 43, 226, 0.8)",
      "0 0 5px rgba(138, 43, 226, 0.5)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Float animation
export const floatAnimation: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
