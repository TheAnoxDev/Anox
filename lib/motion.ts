// ==========================================
// File: lib/motion.ts
// ANOX Motion System
// Framer Motion + TypeScript
// ==========================================

import type { Variants } from "framer-motion";


// ==========================================
// Fade Up
// ==========================================

export const fadeUp: Variants = {

  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {

    opacity: 1,
    y: 0,

    transition: {

      duration: 0.7,

      ease: [0.25, 0.1, 0.25, 1],

    },

  },

};




// ==========================================
// Fade Up With Delay
// ==========================================

export const fadeUpDelay = (
  delay: number
): Variants => ({

  hidden: {

    opacity: 0,

    y: 40,

  },


  show: {

    opacity: 1,

    y: 0,


    transition: {

      duration: 0.7,

      delay,

      ease: [0.25, 0.1, 0.25, 1],

    },

  },

});




// ==========================================
// Fade Down
// ==========================================

export const fadeDown: Variants = {

  hidden: {

    opacity: 0,

    y: -40,

  },


  show: {

    opacity: 1,

    y: 0,


    transition: {

      duration: 0.7,

      ease: [0.25, 0.1, 0.25, 1],

    },

  },

};




// ==========================================
// Scale In
// ==========================================

export const scaleIn: Variants = {

  hidden: {

    opacity: 0,

    scale: 0.9,

  },


  show: {

    opacity: 1,

    scale: 1,


    transition: {

      duration: 0.6,

      ease: [0.25, 0.1, 0.25, 1],

    },

  },

};




// ==========================================
// Stagger Container
// ==========================================

export const staggerContainer: Variants = {

  hidden: {},


  show: {

    transition: {

      staggerChildren: 0.15,

    },

  },

};




// ==========================================
// Card Hover
// ==========================================

export const cardHover = {

  whileHover: {

    y: -8,

    scale: 1.02,


    transition: {

      duration: 0.25,

    },

  },

};