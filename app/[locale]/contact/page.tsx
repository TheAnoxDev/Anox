"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MessageSquare,
  Globe,
  Send,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
} from "lucide-react";



export default function ContactPage(){


const cards=[

{
title:"Email",
value:"contact@anox.dev",
desc:"Direct communication channel",
icon:<Mail/>
},

{
title:"Support",
value:"24/7 Assistance",
desc:"Technical team always available",
icon:<MessageSquare/>
},

{
title:"Global",
value:"Worldwide",
desc:"Serving clients globally",
icon:<Globe/>
},

{
title:"Infrastructure",
value:"Secure Network",
desc:"Enterprise-grade systems",
icon:<ShieldCheck/>
}

];




return (

<main
className="
relative
min-h-screen
overflow-hidden
bg-[#02060b]
text-white
"
>



{/* BACKGROUND */}

<div
className="
absolute
inset-0
bg-[radial-gradient(circle_at_top,#00eaff25,transparent_45%)]
"
/>


<div
className="
absolute
inset-0
opacity-[0.04]
bg-[radial-gradient(white_1px,transparent_1px)]
[background-size:30px_30px]
"
/>



<section
className="
relative
mx-auto
max-w-7xl
px-6
py-32
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
px-6
py-2
text-xs
tracking-[0.35em]
text-cyan-300
"
>

<Sparkles size={14}/>

CONTACT ANOX

</div>




<h1
className="
mt-8
text-5xl
font-black
leading-tight
md:text-7xl
"
>

Let&apos;s Build The

<span
className="
text-cyan-400
"
>

 Future

</span>

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

Have an idea, enterprise project or
technology challenge?

Our team is ready to build intelligent
solutions with you.

</p>



</motion.div>







{/* CONTACT CARDS */}


<div
className="
mt-20
grid
gap-6
sm:grid-cols-2
lg:grid-cols-4
"
>


{
cards.map((item,index)=>(


<motion.div

key={item.title}

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*.1
}}

whileHover={{
y:-10
}}

className="
group
rounded-3xl
border
border-white/10
bg-white/[0.04]
p-7
backdrop-blur-xl
transition
hover:border-cyan-400/40
hover:shadow-[0_0_40px_rgba(0,217,255,.15)]
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
text-cyan-300
group-hover:scale-110
transition
"
>

{item.icon}

</div>


<h3
className="
mt-6
text-xl
font-bold
"
>

{item.title}

</h3>


<p
className="
mt-2
text-cyan-300
"
>

{item.value}

</p>


<p
className="
mt-2
text-sm
text-zinc-500
"
>

{item.desc}

</p>


</motion.div>


))
}


</div>









{/* FORM AREA */}



<div
className="
mt-24
grid
gap-10
lg:grid-cols-2
"
>





{/* LEFT */}



<div
className="
rounded-3xl
border
border-white/10
bg-white/[0.04]
p-10
backdrop-blur-xl
"
>


<h2
className="
text-4xl
font-black
"
>

Connect With ANOX

</h2>



<p
className="
mt-5
leading-8
text-zinc-400
"
>

Our engineers and AI specialists
are available for partnerships,
software development and security
solutions.

</p>




<div
className="
mt-10
space-y-5
"
>



<div
className="
flex
items-center
gap-4
rounded-2xl
bg-black/30
p-5
"
>

<Clock
className="text-cyan-400"
/>

<span
className="text-zinc-300"
>

Fast response within 24 hours

</span>


</div>




<div
className="
flex
items-center
gap-4
rounded-2xl
bg-black/30
p-5
"
>

<Globe
className="text-cyan-400"
/>


<span
className="text-zinc-300"
>

Global digital infrastructure

</span>


</div>


</div>


</div>








{/* FORM */}


<motion.form

initial={{
opacity:0,
x:30
}}

whileInView={{
opacity:1,
x:0
}}

className="
rounded-3xl
border
border-white/10
bg-white/[0.04]
p-10
backdrop-blur-xl
space-y-5
"

>


<h2
className="
text-3xl
font-black
"
>

Send Message

</h2>




<input

placeholder="Your Name"

className="
w-full
rounded-xl
border
border-white/10
bg-black/30
px-5
py-4
outline-none
focus:border-cyan-400
"

/>




<input

type="email"

placeholder="Email Address"

className="
w-full
rounded-xl
border
border-white/10
bg-black/30
px-5
py-4
outline-none
focus:border-cyan-400
"

/>





<input

placeholder="Project Subject"

className="
w-full
rounded-xl
border
border-white/10
bg-black/30
px-5
py-4
outline-none
focus:border-cyan-400
"

/>





<textarea

rows={5}

placeholder="Tell us about your project..."

className="
w-full
rounded-xl
border
border-white/10
bg-black/30
px-5
py-4
outline-none
focus:border-cyan-400
"

/>






<button

type="button"

className="
flex
w-full
items-center
justify-center
gap-3
rounded-xl
bg-cyan-400
py-4
font-black
text-black
transition
hover:scale-[1.02]
hover:bg-cyan-300
"

>


<Send size={18}/>

Send Request


</button>


</motion.form>



</div>








{/* CTA */}



<section

className="
mt-24
rounded-3xl
border
border-cyan-400/20
bg-gradient-to-r
from-cyan-400/10
to-transparent
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

Ready To Build The Future?

</h2>



<p
className="
mx-auto
mt-4
max-w-xl
text-zinc-400
"
>

Join ANOX and create next generation
AI powered technology.

</p>




<button

className="
mt-8
flex
mx-auto
items-center
gap-3
rounded-xl
bg-cyan-400
px-8
py-4
font-bold
text-black
"

>

Start Project

<ArrowRight/>

</button>



</section>





</section>


</main>

);


}