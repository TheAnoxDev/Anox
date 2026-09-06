"use client";

import { motion } from "framer-motion";

import {
  User,
  Layers,
  Brain,
  Shield,
  Cloud,
  Database,
  Cpu,
  Lock,
  Zap,
  Server,
  Activity,
} from "lucide-react";


import { useLang } from "@/components/LangContext";
import Container from "@/components/ui/Container";





export default function ArchitecturePage(){



const {
t,
lang
}=useLang();



const rtl = lang==="fa";





const layers=[

{
title:t.architecture.layers.user.title,
desc:t.architecture.layers.user.desc,
icon:User,
status:"CONNECTED"
},

{
title:t.architecture.layers.application.title,
desc:t.architecture.layers.application.desc,
icon:Layers,
status:"ACTIVE"
},


{
title:t.architecture.layers.ai.title,
desc:t.architecture.layers.ai.desc,
icon:Brain,
status:"RUNNING"
},


{
title:t.architecture.layers.security.title,
desc:t.architecture.layers.security.desc,
icon:Shield,
status:"PROTECTED"
},


{
title:t.architecture.layers.cloud.title,
desc:t.architecture.layers.cloud.desc,
icon:Cloud,
status:"ONLINE"
},


{
title:t.architecture.layers.data.title,
desc:t.architecture.layers.data.desc,
icon:Database,
status:"SYNCED"
},


];





const stack=[

"Artificial Intelligence",
"Machine Learning",
"Cloud Native",
"Zero Trust Security",
"Distributed Systems",
"Automation",
"Big Data",
"API Infrastructure"

];






const metrics=[

{
title:"AI Processing",
value:"99.99%",
icon:Brain
},


{
title:"Security Layer",
value:"24/7",
icon:Lock
},


{
title:"Cloud Nodes",
value:"240+",
icon:Server
},


{
title:"Network",
value:"Realtime",
icon:Activity
}


];








return(


<main

dir={rtl?"rtl":"ltr"}

className="
relative
min-h-screen
overflow-hidden
bg-[#02060b]
py-32
text-white
"

>



{/* BACKGROUND */}



<div

className="
absolute
left-1/2
top-0
h-[900px]
w-[900px]
-translate-x-1/2
rounded-full
bg-cyan-400/10
blur-[180px]
"

/>



<div

className="
absolute
inset-0
opacity-[0.03]
bg-[radial-gradient(white_1px,transparent_1px)]
[background-size:28px_28px]
"

/>





<Container>





{/* HERO */}



<motion.section


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
mx-auto
max-w-5xl
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
px-6
py-2
text-xs
tracking-[0.3em]
text-cyan-300
"

>

<Zap size={14}/>

ANOX ARCHITECTURE

</div>





<h1

className="
mt-8
text-5xl
font-black
sm:text-7xl
"

>

Building The

<span className="text-cyan-400">

 Intelligence Infrastructure

</span>


</h1>





<p

className="
mx-auto
mt-6
max-w-3xl
text-xl
leading-8
text-zinc-400
"

>

{t.architecture.heroDescription}

</p>



</motion.section>










{/* CORE ENGINE */}



<div

className="
mt-24
flex
flex-col
items-center
"

>


<motion.div


animate={{

boxShadow:[
"0 0 40px rgba(34,211,238,.2)",
"0 0 100px rgba(34,211,238,.5)",
"0 0 40px rgba(34,211,238,.2)"
]

}}


transition={{

duration:4,
repeat:Infinity

}}



className="
flex
h-64
w-64
items-center
justify-center
rounded-full
border
border-cyan-400/40
bg-cyan-400/10
"

>


<div

className="
flex
h-40
w-40
items-center
justify-center
rounded-full
border
border-cyan-400/40
bg-black
"

>


<Brain
size={80}
className="text-cyan-400"
/>


</div>


</motion.div>





<div

className="
mt-8
flex
items-center
gap-3
rounded-full
border
border-cyan-400/20
bg-white/5
px-6
py-3
"

>

<Cpu className="text-cyan-400"/>

ANOX Intelligence Core

</div>



</div>










{/* METRICS */}


<div

className="
mt-24
grid
gap-5
sm:grid-cols-2
lg:grid-cols-4
"

>


{
metrics.map(item=>{


const Icon=item.icon;


return(

<div

key={item.title}

className="
rounded-3xl
border
border-white/10
bg-white/5
p-6
backdrop-blur-xl
"

>

<Icon
className="text-cyan-400"
/>


<p className="
mt-4
text-zinc-400
">

{item.title}

</p>


<h3 className="
mt-2
text-3xl
font-black
">

{item.value}

</h3>


</div>

)


})
}


</div>










{/* LAYERS */}



<h2

className="
mt-32
text-center
text-5xl
font-black
"

>

Architecture Layers

</h2>





<div

className="
mt-14
grid
gap-7
md:grid-cols-2
lg:grid-cols-3
"

>


{

layers.map((item,index)=>{


const Icon=item.icon;


return(


<motion.div


key={item.title}


whileHover={{
y:-10
}}



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
delay:index*.08
}}



className="
rounded-3xl
border
border-white/10
bg-white/[0.04]
p-8
backdrop-blur-xl
hover:border-cyan-400/40
"


>


<div className="
flex
justify-between
">


<div

className="
rounded-2xl
bg-cyan-400/10
p-4
text-cyan-400
"

>

<Icon size={32}/>

</div>




<span

className="
text-xs
text-cyan-400
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

{item.desc}

</p>




</motion.div>


)


})

}


</div>









{/* STACK */}




<section

className="
mt-32
text-center
"

>


<h2

className="
text-4xl
font-black
"

>

Technology Stack

</h2>




<div

className="
mt-10
flex
flex-wrap
justify-center
gap-4
"

>


{
stack.map(item=>(

<span

key={item}

className="
rounded-xl
border
border-cyan-400/20
bg-cyan-400/5
px-5
py-3
text-cyan-300
"

>

{item}

</span>

))
}



</div>


</section>








{/* SECURITY */}



<section

className="
mt-32
rounded-3xl
border
border-cyan-400/20
bg-gradient-to-br
from-cyan-400/10
to-transparent
p-12
text-center
"

>


<Shield
size={50}
className="
mx-auto
text-cyan-400
"
/>




<h2

className="
mt-6
text-4xl
font-black
"

>

Enterprise Security Architecture

</h2>



<p

className="
mx-auto
mt-5
max-w-3xl
leading-8
text-zinc-400
"

>

{t.architecture.securityDescription}

</p>



</section>






</Container>


</main>


);


}