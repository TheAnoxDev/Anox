"use client";

import { motion } from "framer-motion";

import {
  Rocket,
  Globe2,
  Brain,
  Shield,
  Code2,
  Cpu,
  Sparkles,
} from "lucide-react";


import { useLang } from "@/components/LangContext";
import { useTranslation } from "@/hooks/useTranslation";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";

import { cn } from "@/lib/cn";



const cards = [
  {
    icon: Rocket,
    key: "vision",
  },
  {
    icon: Globe2,
    key: "mission",
  },
];



const features = [
  {
    icon: Brain,
    key: "ai",
  },
  {
    icon: Shield,
    key: "cyber",
  },
  {
    icon: Code2,
    key: "software",
  },
];



export default function About(){


  const {lang} = useLang();

  const {t}=useTranslation();


  const rtl = lang==="fa";



return (

<section
id="about"
dir={rtl ? "rtl":"ltr"}

className="
relative
overflow-hidden
py-32
"
>



{/* Background */}

<div
className="
absolute
inset-0
-z-20
bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_40%)]
"
/>


<div
className="
absolute
inset-0
-z-30
bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
bg-[size:60px_60px]
"
/>





<Container>


<div className={cn(
rtl && "text-right"
)}>


<SectionTitle

badge={t.about.badge}

title={t.about.title}

description={t.about.description}

/>


</div>






{/* Stats */}

<div

className="
mt-16
grid
grid-cols-2
gap-5
md:grid-cols-4
"

>


<Stat
number="24/7"
text="AI Monitoring"
/>


<Stat
number="100%"
text="Future Ready"
/>


<Stat
number="AI"
text="Intelligent Systems"
/>


<Stat
number="∞"
text="Scalable Future"
/>



</div>






<div

className="
mt-20
grid
gap-8
lg:grid-cols-2
"

>



{
cards.map((card,index)=>{


const Icon=card.icon;


return (

<motion.div

key={card.key}

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.6,
delay:index*.15
}}

>


<GlassCard

className="
group
relative
overflow-hidden
p-10
"

>


<div
className="
absolute
right-0
top-0
h-40
w-40
rounded-full
bg-cyan-400/10
blur-3xl
"
/>



<div

className="
flex
h-16
w-16
items-center
justify-center
rounded-2xl
bg-cyan-400/10
text-cyan-400
transition
group-hover:scale-110
"

>

<Icon size={34}/>

</div>




<h3

className="
mt-8
text-3xl
font-black
text-white
"

>


{
card.key==="vision"
?
t.about.visionTitle
:
t.about.missionTitle
}


</h3>




<p

className="
mt-5
leading-8
text-zinc-400
"

>

{
card.key==="vision"
?
t.about.visionDescription
:
t.about.missionDescription
}

</p>




</GlassCard>


</motion.div>


)

})

}


</div>








{/* Features */}

<div

className="
mt-12
grid
gap-6
md:grid-cols-3
"

>


{
features.map((item)=>{


const Icon=item.icon;


return (

<motion.div

key={item.key}

whileHover={{
y:-8
}}

className="
rounded-3xl
border
border-white/10
bg-white/[0.04]
p-7
backdrop-blur-xl
transition
"

>


<Icon

size={32}

className="
text-cyan-400
"

/>



<p

className="
mt-5
font-semibold
text-zinc-200
"

>


{
t.about[item.key as keyof typeof t.about]
}


</p>



</motion.div>


)


})

}


</div>





</Container>





</section>


);



}








function Stat({

number,
text

}:{

number:string;
text:string;

}){


return (

<div

className="
rounded-2xl
border
border-white/10
bg-white/[0.04]
p-6
text-center
backdrop-blur-xl
"

>


<div

className="
text-3xl
font-black
text-cyan-300
"

>

{number}

</div>


<p

className="
mt-2
text-sm
text-zinc-400
"

>

{text}

</p>



</div>

);


}