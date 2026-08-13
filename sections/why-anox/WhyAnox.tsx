"use client";

import { motion } from "framer-motion";

import {
  Zap,
  Lock,
  Cpu,
  Rocket,
} from "lucide-react";

import { useLang } from "@/components/LangContext";
import { cn } from "@/lib/cn";



const features = [
  {
    key: "technology",
    icon: Cpu,
  },
  {
    key: "security",
    icon: Lock,
  },
  {
    key: "performance",
    icon: Zap,
  },
  {
    key: "future",
    icon: Rocket,
  },
] as const;





export default function WhyAnox(){


const {
  t,
  lang
}=useLang();



const rtl = lang==="fa";





return (



<section

id="why-anox"

dir={
rtl
?
"rtl"
:
"ltr"
}


className={cn(

"relative py-32",

rtl && "text-right"

)}

>






<motion.div


initial={{
opacity:0,
y:40
}}



whileInView={{
opacity:1,
y:0
}}



viewport={{
once:true
}}



transition={{
duration:.7
}}



className="
mx-auto
max-w-3xl
px-6
text-center
"


>



<h2

className="
text-4xl
font-black
text-white
sm:text-5xl
"

>


{t.why.title}


</h2>





<p

className="
mt-5
text-lg
leading-8
text-zinc-400
"

>


{t.why.description}


</p>




</motion.div>









<div


className="
mx-auto
mt-16
grid
max-w-6xl
gap-8
px-6
md:grid-cols-2
"

>



{
features.map((item,index)=>{


const Icon =
item.icon;



return(



<motion.div



key={item.key}



initial={{

opacity:0,

x:
index%2===0
?
-40
:
40

}}



whileInView={{

opacity:1,

x:0

}}



viewport={{

once:true

}}



transition={{

duration:.6

}}




className="
group
flex
gap-6
rounded-3xl
border
border-white/10
bg-white/5
p-8
backdrop-blur-xl
transition
hover:border-cyan-400/40
hover:-translate-y-1
"

>



<div


className="
flex
h-14
w-14
shrink-0
items-center
justify-center
rounded-2xl
bg-cyan-400/10
text-cyan-400
"

>

<Icon size={30}/>


</div>







<div>


<h3

className="
text-xl
font-bold
text-white
group-hover:text-cyan-300
transition
"

>


{
t.why.features[item.key].title
}


</h3>






<p

className="
mt-3
leading-7
text-zinc-400
"

>


{
t.why.features[item.key].text
}


</p>



</div>





</motion.div>


)


})

}



</div>






</section>



);


}