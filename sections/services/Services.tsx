"use client";

import { motion } from "framer-motion";
import {
  Brain,
  ShieldCheck,
  Code2,
  Cloud,
} from "lucide-react";

import { useTranslation } from "@/hooks/useTranslation";


export default function Services() {

  const { t } = useTranslation();


  const services = [
    {
      title: t.services.aiTitle,
      description: t.services.aiDesc,
      icon: Brain,
    },

    {
      title: t.services.cyberTitle,
      description: t.services.cyberDesc,
      icon: ShieldCheck,
    },

    {
      title: t.services.softwareTitle,
      description: t.services.softwareDesc,
      icon: Code2,
    },

    {
      title: t.services.cloudTitle,
      description: t.services.cloudDesc,
      icon: Cloud,
    },
  ];



  return (

<section
className="
relative
py-32
px-6
overflow-hidden
"
>


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
bg-cyan-500/10
blur-[160px]
"
/>



<div
className="
relative
mx-auto
max-w-7xl
"
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

transition={{
duration:.7
}}

viewport={{
once:true
}}

className="text-center"

>


<h2
className="
text-5xl
font-black
text-white
"
>

{t.services.title}

</h2>



<p
className="
mt-5
text-zinc-400
"
>

{t.services.description}

</p>


</motion.div>





<div
className="
mt-16
grid
gap-8
md:grid-cols-2
lg:grid-cols-4
"
>


{
services.map((service,index)=>{


const Icon = service.icon;


return (

<motion.div

key={service.title}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.5,
delay:index*.1
}}

viewport={{
once:true
}}

className="
group
rounded-3xl
border
border-white/10
bg-white/5
p-8
backdrop-blur-xl
transition
hover:-translate-y-2
hover:border-cyan-400/40
"

>


<div
className="
flex
h-14
w-14
items-center
justify-center
rounded-2xl
bg-cyan-400/10
text-cyan-400
transition
group-hover:bg-cyan-400
group-hover:text-black
"
>

<Icon size={28}/>

</div>



<h3
className="
mt-6
text-xl
font-bold
text-white
"
>

{service.title}

</h3>



<p
className="
mt-3
text-sm
leading-6
text-zinc-400
"
>

{service.description}

</p>



</motion.div>


)


})


}



</div>



</div>


</section>

  );

}