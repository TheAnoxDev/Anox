"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Globe2,
  Brain,
  Shield,
  Code2,
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
    key:"vision",
  },
  {
    icon: Globe2,
    key:"mission",
  },
] as const;





const features = [
  {
    icon:Brain,
    key:"ai",
  },
  {
    icon:Shield,
    key:"cyber",
  },
  {
    icon:Code2,
    key:"software",
  },
] as const;







export default function About(){


const {lang}=useLang();

const {t}=useTranslation();


const rtl =
lang==="fa";




return (


<section

id="about"

data-section

dir={
rtl
?
"rtl"
:
"ltr"
}

className="
relative
overflow-hidden
py-24
md:py-32
"


>


<div

aria-hidden

className="
pointer-events-none
absolute
inset-0
bg-[radial-gradient(circle_at_top,rgba(34,211,238,.12),transparent_40%)]
"

/>




<div

aria-hidden

className="
pointer-events-none
absolute
inset-0
hidden
opacity-[0.03]
md:block
bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)]
bg-[size:60px_60px]
"

/>






<Container>


<div

className={
cn(
rtl &&
"text-right"
)
}

>


<SectionTitle

badge={t.about.badge}

title={t.about.title}

description={t.about.description}

/>


</div>






<div

className="
mt-14
grid
grid-cols-2
gap-4
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
mt-16
grid
gap-6
lg:grid-cols-2
"

>


{

cards.map(
(card,index)=>{


const Icon =
card.icon;



const title =
card.key==="vision"
?
t.about.visionTitle
:
t.about.missionTitle;



const text =
card.key==="vision"
?
t.about.visionDescription
:
t.about.missionDescription;




return (


<motion.article

key={card.key}


initial={{
opacity:0,
y:20
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true,
amount:.2
}}


transition={{
duration:.5,
delay:index*.08
}}


>


<GlassCard

className="
group
relative
overflow-hidden
p-8
md:p-10
"


>


<div

aria-hidden

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
"


>


<Icon
size={32}
/>


</div>





<h3

className="
mt-7
text-2xl
font-black
"


>

{title}

</h3>





<p

className="
mt-4
leading-8
text-zinc-400
"


>

{text}

</p>





</GlassCard>


</motion.article>


)

}

)


}



</div>








<div

className="
mt-10
grid
gap-5
md:grid-cols-3
"

>


{

features.map(
(item)=>{


const Icon =
item.icon;


const text =
t.about[item.key];



return (


<motion.article

key={item.key}


whileHover={{
y:-6
}}


className="
rounded-3xl
border
border-white/10
bg-white/[0.04]
p-7
backdrop-blur-xl
"


>


<Icon

size={30}

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
typeof text==="string"
?
text
:
""
}

</p>


</motion.article>



)

}


)


}


</div>





</Container>


</section>


);


}







function Stat({

number,

text,

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
p-5
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