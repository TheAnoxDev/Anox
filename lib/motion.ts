// ==========================================
// ANOX Motion System v10
// Framer Motion + TypeScript
// ==========================================


import type {
  Variants,
  Transition,
} from "framer-motion";




// ==========================================
// Premium Easings
// ==========================================


const smoothEase = [
  0.25,
  0.1,
  0.25,
  1,
] as const;



const defaultTransition: Transition = {

  duration:0.7,

  ease:smoothEase,

};





// ==========================================
// Fade Up
// ==========================================


export const fadeUp:Variants = {


  hidden:{

    opacity:0,

    y:40,

  },


  show:{

    opacity:1,

    y:0,

    transition:defaultTransition,

  },


};






// ==========================================
// Fade Up Dynamic Delay
// ==========================================


export const fadeUpDelay = (
  delay:number
):Variants => ({


hidden:{


  opacity:0,

  y:40,


},



show:{


  opacity:1,

  y:0,


  transition:{


    ...defaultTransition,

    delay,


  },


},


});






// ==========================================
// Fade Down
// ==========================================


export const fadeDown:Variants = {


hidden:{


  opacity:0,

  y:-40,


},



show:{


  opacity:1,

  y:0,


  transition:defaultTransition,


},


};








// ==========================================
// Scale In
// ==========================================


export const scaleIn:Variants = {


hidden:{


  opacity:0,

  scale:.92,


},



show:{


  opacity:1,

  scale:1,


  transition:{

    duration:.6,

    ease:smoothEase,

  },


},


};







// ==========================================
// Blur Reveal
// ==========================================


export const blurReveal:Variants = {


hidden:{


  opacity:0,

  filter:"blur(15px)",

  y:20,


},



show:{


  opacity:1,

  filter:"blur(0px)",

  y:0,


  transition:{

    duration:.8,

    ease:smoothEase,

  },


},


};








// ==========================================
// Stagger Container
// ==========================================


export const staggerContainer:Variants = {


hidden:{},



show:{


  transition:{


    staggerChildren:.12,


    delayChildren:.1,


  },


},


};








// ==========================================
// Card Hover System
// ==========================================


export const cardHover = {


whileHover:{


  y:-8,


  scale:1.02,



  transition:{


    duration:.25,


    ease:smoothEase,


  },


},



whileTap:{


  scale:.98,


},



};







// ==========================================
// Viewport Defaults
// ==========================================


export const viewport = {


once:true,

amount:.25,


};







// ==========================================
// Reduced Motion Support
// ==========================================


export const reducedMotion = {


initial:false,



transition:{


  duration:0,


},


};