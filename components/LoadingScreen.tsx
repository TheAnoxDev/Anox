"use client";


import {
  AnimatePresence,
  motion,
} from "framer-motion";



type Props = {
  loading:boolean;
};





export default function LoadingScreen({
  loading
}:Props){



return (


<AnimatePresence mode="wait">


{
loading && (


<motion.div


initial={{
opacity:1
}}


exit={{
opacity:0,
scale:1.05
}}


transition={{
duration:.7,
ease:"easeInOut"
}}



className="
fixed
inset-0
z-[9999]
flex
items-center
justify-center
overflow-hidden
bg-[#05070b]
"

>


{/* Glow */}


<div

className="
absolute
left-1/2
top-1/2
h-[500px]
w-[500px]
-translate-x-1/2
-translate-y-1/2
rounded-full
bg-cyan-400/20
blur-[140px]
"

/>





{/* Grid */}


<div

className="
absolute
inset-0
opacity-[0.04]
[background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)]
[background-size:40px_40px]
"

/>








<div

className="
relative
z-10
text-center
"

>




<motion.h1


initial={{
opacity:0,
y:30,
scale:.9
}}


animate={{
opacity:1,
y:0,
scale:1
}}


transition={{
duration:.8,
ease:"easeOut"
}}



className="
text-6xl
font-black
tracking-[0.35em]
text-cyan-400
"

>


ANOX


</motion.h1>








<motion.p


initial={{
opacity:0
}}


animate={{
opacity:1
}}


transition={{
delay:.5
}}



className="
mt-6
text-sm
uppercase
tracking-[0.4em]
text-zinc-400
"

>


Initializing System


</motion.p>









<div

className="
mx-auto
mt-10
h-1
w-72
overflow-hidden
rounded-full
bg-white/10
"

>


<motion.div


initial={{
x:"-100%"
}}


animate={{
x:"100%"
}}


transition={{

duration:1.8,

repeat:Infinity,

ease:"linear"

}}



className="
h-full
w-1/2
rounded-full
bg-cyan-400
shadow-[0_0_20px_#22d3ee]
"




/>



</div>







<motion.div


initial={{
opacity:0
}}


animate={{
opacity:1
}}


transition={{
delay:1
}}



className="
mt-8
text-[10px]
tracking-[0.5em]
text-zinc-600
"

>


AI • CLOUD • SECURITY • SOFTWARE


</motion.div>







</div>




</motion.div>


)

}



</AnimatePresence>


);


}