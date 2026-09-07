"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/components/LangContext";

import {
  Brain,
  Shield,
  Cloud,
  Code2,
  Cpu,
  Network,
  Lock,
  Activity,
  Server,
  ArrowRight,
  Check,
  Sparkles
} from "lucide-react";




export default function PlatformPage(){

const { lang } = useLang();
const prefix = `/${lang}`;

const systems = [

{
title:"AI Intelligence Core",
description:
"Advanced neural systems powering automation, reasoning and intelligent decisions.",
icon:Brain,
status:"ONLINE"
},


{
title:"Cyber Defense Layer",
description:
"Continuous threat detection and intelligent security monitoring.",
icon:Shield,
status:"ACTIVE"
},


{
title:"Cloud Infrastructure",
description:
"Distributed scalable infrastructure designed for global applications.",
icon:Cloud,
status:"RUNNING"
},


{
title:"Developer Ecosystem",
description:
"APIs, SDKs and tools for building next generation software.",
icon:Code2,
status:"READY"
}


];






const metrics=[

{
title:"AI Models",
value:"120+",
icon:Cpu
},

{
title:"Network Nodes",
value:"240+",
icon:Network
},

{
title:"Threat Detection",
value:"99.99%",
icon:Lock
},

{
title:"System Status",
value:"ONLINE",
icon:Activity
}

];







const layers=[

"Artificial Intelligence",

"Cyber Security",

"Cloud Computing",

"Automation",

"Developer Platform"

];







return (

<main

className="
relative
min-h-screen
overflow-hidden
bg-[#020617]
text-white
"

>




{/* Background */}

<div

className="
absolute
inset-0
bg-[radial-gradient(circle_at_top,#00eaff30,transparent_45%)]
"

/>


<div

className="
absolute
inset-0
opacity-[0.04]
bg-[radial-gradient(#fff_1px,transparent_1px)]
[background-size:30px_30px]
"

/>





<section

className="
relative
mx-auto
max-w-7xl
px-6
py-28
"

>




{/* HERO */}



<motion.div

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.8
}}

className="
text-center
"

>




<div

className="
mx-auto
flex
w-fit
items-center
gap-2
rounded-full
border
border-cyan-400/30
bg-cyan-400/10
px-5
py-2
text-xs
tracking-[0.3em]
text-cyan-300
"

>

<Sparkles size={15}/>

ANOX PLATFORM

</div>






<h1

className="
mt-10
text-5xl
font-black
leading-tight
md:text-7xl
"

>

The Intelligence

<br/>

<span className="
text-cyan-400
">

Infrastructure

</span>

of Tomorrow


</h1>






<p

className="
mx-auto
mt-6
max-w-3xl
text-lg
leading-8
text-zinc-400
"

>

ANOX connects artificial intelligence,
cyber security and cloud infrastructure
into one unified technology ecosystem.


</p>






<div

className="
mt-10
flex
justify-center
gap-4
"

>


<Link
href={`${prefix}/contact`}
className="
flex
items-center
gap-2
rounded-xl
bg-cyan-400
px-8
py-4
font-bold
text-black
shadow-[0_0_50px_rgba(34,211,238,.4)]
transition
hover:scale-105
"

>

Launch Platform

<ArrowRight size={18}/>

</Link>




<Link
href={`${prefix}/architecture`}
className="
rounded-xl
border
border-white/10
bg-white/5
px-8
py-4
font-semibold
hover:bg-white/10
"

>

Explore Technology

</Link>



</div>



</motion.div>










{/* AI CORE */}





<motion.div

animate={{

rotate:360

}}

transition={{

duration:40,

repeat:Infinity,

ease:"linear"

}}

className="
relative
mx-auto
mt-32
flex
h-80
w-80
items-center
justify-center
rounded-full
border
border-cyan-400/30
bg-cyan-400/10
shadow-[0_0_150px_rgba(34,211,238,.35)]
"


>



<div

className="
absolute
inset-10
rounded-full
border
border-cyan-400/20
"

/>



<div

className="
flex
h-44
w-44
items-center
justify-center
rounded-full
bg-black
border
border-cyan-400/40
"

>

<Brain

size={80}

className="text-cyan-400"

/>


</div>


</motion.div>









{/* METRICS */}



<div

className="
mt-28
grid
gap-6
sm:grid-cols-2
lg:grid-cols-4
"

>

{

metrics.map(item=>{


const Icon=item.icon;


return (


<div

key={item.title}

className="
rounded-3xl
border
border-white/10
bg-white/5
p-7
backdrop-blur-xl
"

>


<Icon

className="text-cyan-400"

/>


<p

className="
mt-5
text-sm
text-zinc-400
"

>

{item.title}

</p>



<h3

className="
mt-2
text-3xl
font-black
"

>

{item.value}

</h3>



</div>


)


})


}



</div>









{/* SYSTEM ARCHITECTURE */}





<section

className="
mt-32
"

>


<div

className="
text-center
"

>

<h2

className="
text-4xl
font-black
"

>

ANOX Architecture

</h2>


<p

className="
mt-3
text-zinc-400
"

>

The technology layers powering the ecosystem

</p>


</div>






<div

className="
mt-12
grid
gap-6
md:grid-cols-2
"

>

{


systems.map((item)=>{


const Icon=item.icon;


return (


<motion.div


whileHover={{

y:-10

}}


key={item.title}

className="
rounded-3xl
border
border-white/10
bg-white/5
p-8
backdrop-blur-xl
"


>



<div

className="
flex
items-center
justify-between
"

>


<div

className="
rounded-2xl
bg-cyan-400/10
p-4
"

>

<Icon

className="text-cyan-400"

/>


</div>



<span

className="
text-xs
text-cyan-300
"

>

● {item.status}

</span>


</div>






<h3

className="
mt-7
text-2xl
font-bold
"

>

{item.title}

</h3>





<p

className="
mt-3
leading-7
text-zinc-400
"

>

{item.description}

</p>




</motion.div>


)


})


}



</div>


</section>









{/* STACK */}





<section

className="
mt-32
rounded-[40px]
border
border-white/10
bg-white/5
p-10
backdrop-blur-xl
"

>



<div

className="
flex
items-center
gap-3
"

>

<Server className="text-cyan-400"/>


<h2

className="
text-3xl
font-black
"

>

Technology Stack

</h2>


</div>





<div

className="
mt-8
grid
gap-4
md:grid-cols-5
"

>

{


layers.map(layer=>(


<div

key={layer}

className="
flex
items-center
gap-2
rounded-xl
border
border-white/10
bg-black/30
p-4
text-sm
"

>


<Check

size={16}

className="text-cyan-400"

/>


{layer}


</div>


))


}


</div>



</section>









{/* CTA */}




<section

className="
mt-32
rounded-[40px]
border
border-cyan-400/20
bg-cyan-400/5
p-12
text-center
"

>



<h2

className="
text-4xl
font-black
"

>

Build With ANOX

</h2>



<p

className="
mx-auto
mt-5
max-w-xl
text-zinc-400
"

>

Create intelligent products using
our AI, security and cloud ecosystem.


</p>





<Link
href={`${prefix}/contact`}
className="
mt-8
inline-flex
rounded-xl
bg-cyan-400
px-10
py-4
font-bold
text-black
"

>

Start Building

</Link>



</section>





</section>



</main>


);


}