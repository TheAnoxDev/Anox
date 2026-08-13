"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MessageSquare,
  MapPin,
  Send,
  Globe,
} from "lucide-react";



export default function ContactPage(){


const cards=[
{
title:"Email",
value:"contact@anox.dev",
icon:<Mail/>
},
{
title:"Support",
value:"24/7 Technical Support",
icon:<MessageSquare/>
},
{
title:"Global",
value:"Worldwide Platform",
icon:<Globe/>
},
{
title:"Location",
value:"Digital Infrastructure",
icon:<MapPin/>
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



<section className="
relative
mx-auto
max-w-7xl
px-6
py-32
">



{/* Hero */}


<motion.div

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

className="
text-center
"

>


<div className="
mx-auto
w-fit
rounded-full
border
border-cyan-400/30
bg-cyan-400/10
px-5
py-2
text-xs
tracking-[0.3em]
text-cyan-300
">

CONTACT ANOX

</div>



<h1 className="
mt-8
text-5xl
font-black
md:text-7xl
">


Lets Build The

<span className="
text-cyan-400
">

 Future

</span>


</h1>



<p className="
mx-auto
mt-6
max-w-2xl
text-lg
text-zinc-400
">

Have a project, idea or question?
Connect with the ANOX technology team.

</p>


</motion.div>







{/* Cards */}


<div className="
mt-20
grid
gap-5
sm:grid-cols-2
lg:grid-cols-4
">


{
cards.map((item)=>(


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
p-6
backdrop-blur-xl
"

>


<div className="
text-cyan-400
">

{item.icon}

</div>


<h3 className="
mt-5
font-bold
">

{item.title}

</h3>


<p className="
mt-2
text-sm
text-zinc-400
">

{item.value}

</p>


</motion.div>


))
}


</div>








{/* FORM */}


<div className="
mx-auto
mt-20
max-w-3xl
rounded-3xl
border
border-white/10
bg-white/5
p-8
backdrop-blur-xl
">


<h2 className="
text-3xl
font-black
">

Send Message

</h2>


<form className="
mt-8
space-y-5
">


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
text-white
outline-none
focus:border-cyan-400
"

/>


<input

placeholder="Email Address"

type="email"

className="
w-full
rounded-xl
border
border-white/10
bg-black/30
px-5
py-4
text-white
outline-none
focus:border-cyan-400
"

/>


<input

placeholder="Subject"

className="
w-full
rounded-xl
border
border-white/10
bg-black/30
px-5
py-4
text-white
outline-none
focus:border-cyan-400
"

/>



<textarea

placeholder="Your Message"

rows={5}

className="
w-full
rounded-xl
border
border-white/10
bg-black/30
px-5
py-4
text-white
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
font-bold
text-black
transition
hover:scale-[1.02]
"


>


<Send size={18}/>

Send Message


</button>


</form>


</div>








{/* CTA */}


<div className="
mt-20
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

Ready to create something powerful?

</h2>


<p className="
mt-4
text-zinc-400
">

ANOX is building the next generation
of intelligent systems.

</p>


</div>




</section>


</main>

);

}