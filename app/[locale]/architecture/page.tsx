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
  Network,
} from "lucide-react";

import { useLang } from "@/components/LangContext";

import Container from "@/components/ui/Container";

import { cn } from "@/lib/cn";





export default function ArchitecturePage(){



const {
  t,
  lang
}=useLang();


const rtl = lang==="fa";





const layers = [


{
title:t.architecture.layers.user.title,
desc:t.architecture.layers.user.desc,
icon:User
},



{
title:t.architecture.layers.application.title,
desc:t.architecture.layers.application.desc,
icon:Layers
},



{
title:t.architecture.layers.ai.title,
desc:t.architecture.layers.ai.desc,
icon:Brain
},



{
title:t.architecture.layers.security.title,
desc:t.architecture.layers.security.desc,
icon:Shield
},



{
title:t.architecture.layers.cloud.title,
desc:t.architecture.layers.cloud.desc,
icon:Cloud
},



{
title:t.architecture.layers.data.title,
desc:t.architecture.layers.data.desc,
icon:Database
},


];







const stack=[

t.architecture.stack.ai,

t.architecture.stack.cloud,

t.architecture.stack.security,

t.architecture.stack.distributed,

t.architecture.stack.automation,

t.architecture.stack.data,

];








return(


<main

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
bg-[#04070b]
py-32
"

>





<div

className="
pointer-events-none
absolute
left-1/2
top-40
h-[600px]
w-[600px]
-translate-x-1/2
rounded-full
bg-cyan-500/10
blur-[150px]
"

/>








<Container>







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



className={cn(
"mx-auto max-w-4xl text-center",
rtl && "text-right"
)}

>



<h1

className="
text-5xl
font-black
text-white
sm:text-7xl
"

>

{t.architecture.heroTitle}

</h1>





<p

className="
mt-6
text-xl
leading-8
text-zinc-400
"

>

{t.architecture.heroDescription}

</p>



</motion.section>









{/* CORE DIAGRAM */}



<div

className="
mx-auto
mt-20
flex
max-w-xl
flex-col
items-center
gap-5
"

>


{


[
{
name:t.architecture.core.user,
icon:User
},

{
name:t.architecture.core.application,
icon:Cpu
},

{
name:t.architecture.core.engine,
icon:Network
},

{
name:t.architecture.core.infrastructure,
icon:Cloud
}

].map((item,index)=>{


const Icon=item.icon;



return(



<motion.div

key={item.name}


whileHover={{
scale:1.05
}}



className="
flex
w-full
items-center
justify-center
gap-4
rounded-2xl
border
border-cyan-400/20
bg-white/5
px-6
py-5
text-white
backdrop-blur-xl
"

>


<Icon
className="text-cyan-400"
/>


{item.name}



</motion.div>



)


})

}



</div>










<h2

className="
mt-32
text-center
text-4xl
font-black
text-white
"

>

{t.architecture.layersTitle}

</h2>





<p

className="
mt-4
text-center
text-zinc-400
"

>

{t.architecture.layersDescription}

</p>









<div

className="
mt-14
grid
gap-8
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



initial={{
opacity:0,
y:20
}}



whileInView={{
opacity:1,
y:0
}}



viewport={{
once:true
}}



transition={{
delay:index*.05
}}



whileHover={{
y:-8
}}



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

size={38}

className="
text-cyan-400
"

/>





<h3

className="
mt-6
text-xl
font-bold
text-white
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










<h2

className="
mt-32
text-center
text-4xl
font-black
text-white
"

>

{t.architecture.stackTitle}

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
text-sm
text-cyan-300
"

>

{item}

</span>


))


}



</div>










<div

className="
mt-32
rounded-3xl
border
border-white/10
bg-white/5
p-10
text-center
backdrop-blur-xl
"

>



<h2

className="
text-3xl
font-black
text-white
"

>

{t.architecture.securityTitle}

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



</div>









</Container>




</main>



);


}