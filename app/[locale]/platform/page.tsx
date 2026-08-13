"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Shield,
  Cloud,
  Code2,
  Cpu,
  Network,
  Lock,
  Zap,
  Activity,
} from "lucide-react";


export default function PlatformPage() {


const systems = [
  {
    title:"AI Core",
    desc:"Autonomous intelligence engine for advanced decision systems.",
    icon:<Brain/>
  },
  {
    title:"Security Layer",
    desc:"Real-time protection and intelligent threat analysis.",
    icon:<Shield/>
  },
  {
    title:"Cloud Network",
    desc:"Scalable infrastructure built for modern applications.",
    icon:<Cloud/>
  },
  {
    title:"Developer Tools",
    desc:"Powerful APIs and tools for next generation software.",
    icon:<Code2/>
  }
];


const stats=[
{
name:"AI Models",
value:"120+",
icon:<Cpu/>
},
{
name:"Security Events",
value:"99.9%",
icon:<Lock/>
},
{
name:"Network Nodes",
value:"240+",
icon:<Network/>
},
{
name:"Processing",
value:"Realtime",
icon:<Activity/>
}
];



return (

<main className="
relative
min-h-screen
overflow-hidden
bg-[#03070c]
text-white
">


{/* Background */}

<div className="
absolute
inset-0
bg-[radial-gradient(circle_at_top,#00eaff25,transparent_45%)]
"/>


<div className="
absolute
inset-0
opacity-[0.04]
bg-[radial-gradient(white_1px,transparent_1px)]
[background-size:24px_24px]
"/>




{/* HERO */}


<section className="
relative
mx-auto
max-w-7xl
px-6
py-32
">


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


<div className="
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
tracking-widest
text-cyan-300
">

<Zap size={15}/>

ANOX PLATFORM

</div>




<h1 className="
mt-8
text-5xl
font-black
leading-tight
md:text-7xl
">


Building The


<span className="
text-cyan-400
">

 Intelligent Future

</span>


</h1>



<p className="
mx-auto
mt-6
max-w-3xl
text-lg
leading-8
text-zinc-400
">


ANOX combines artificial intelligence,
cyber security and cloud infrastructure
into one unified technology platform.


</p>



<div className="
mt-10
flex
justify-center
gap-4
">


<button className="
rounded-xl
bg-cyan-400
px-8
py-4
font-bold
text-black
shadow-[0_0_40px_rgba(34,211,238,.35)]
transition
hover:scale-105
">

Launch Platform

</button>


<button className="
rounded-xl
border
border-white/10
bg-white/5
px-8
py-4
font-semibold
text-white
transition
hover:bg-white/10
">

Explore Systems

</button>


</div>


</motion.div>





{/* Core */}

<motion.div

animate={{
y:[0,-15,0]
}}

transition={{
duration:5,
repeat:Infinity
}}

className="
mx-auto
mt-24
flex
h-64
w-64
items-center
justify-center
rounded-full
border
border-cyan-400/30
bg-cyan-400/10
shadow-[0_0_120px_rgba(34,211,238,.35)]
"


>


<div className="
flex
h-44
w-44
items-center
justify-center
rounded-full
bg-black
border
border-cyan-400/40
">


<Brain
size={80}
className="text-cyan-400"
/>


</div>


</motion.div>






{/* STATS */}


<div className="
mt-24
grid
gap-5
sm:grid-cols-2
lg:grid-cols-4
">


{
stats.map((item)=>(

<div

key={item.name}

className="
rounded-2xl
border
border-white/10
bg-white/5
p-6
backdrop-blur-xl
"


>


<div className="
text-cyan-400
">

{item.icon}

</div>


<p className="
mt-4
text-sm
text-zinc-400
">

{item.name}

</p>


<h3 className="
mt-2
text-3xl
font-black
">

{item.value}

</h3>


</div>

))
}


</div>







{/* SYSTEMS */}


<section className="
mt-32
">


<h2 className="
text-center
text-4xl
font-black
">

Core Systems

</h2>


<p className="
mt-3
text-center
text-zinc-400
">

The foundation behind ANOX technology

</p>




<div className="
mt-12
grid
gap-6
md:grid-cols-2
">


{
systems.map((item,index)=>(


<motion.div

key={item.title}

whileHover={{
y:-8
}}

className="
rounded-3xl
border
border-white/10
bg-white/5
p-8
backdrop-blur-xl
"


>


<div className="
text-cyan-400
">

{item.icon}

</div>


<h3 className="
mt-6
text-2xl
font-bold
">

{item.title}

</h3>


<p className="
mt-3
leading-7
text-zinc-400
">

{item.desc}

</p>


</motion.div>


))
}



</div>


</section>







{/* CTA */}


<section className="
mt-32
rounded-3xl
border
border-cyan-400/20
bg-cyan-400/5
p-10
text-center
">


<h2 className="
text-4xl
font-black
">

Ready to enter ANOX?

</h2>


<p className="
mx-auto
mt-4
max-w-xl
text-zinc-400
">

Experience the next generation of AI,
security and cloud technology.

</p>



<button className="
mt-8
rounded-xl
bg-cyan-400
px-10
py-4
font-bold
text-black
">

Start Building

</button>


</section>




</section>


</main>

);

}