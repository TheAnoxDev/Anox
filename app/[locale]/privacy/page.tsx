"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  ShieldCheck,
  Database,
  Lock,
  UserCheck,
  Globe,
  Server,
  Cookie,
  UserRoundCheck,
  Clock,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";



type PrivacySection = {

  id:string;

  icon:LucideIcon;

  title:string;

  text:string;

};



const sections:PrivacySection[]=[


{
id:"collect",
icon:Database,
title:"Information We Collect",
text:
"ANOX collects essential information including account details, authentication data, and usage information required to provide secure services."
},


{
id:"security",
icon:Lock,
title:"Data Security",
text:
"We use modern security practices including encryption, secure authentication, and protected infrastructure."
},


{
id:"usage",
icon:UserCheck,
title:"How We Use Data",
text:
"Information is used to improve products, personalize experiences, provide support, and maintain reliability."
},


{
id:"infra",
icon:Server,
title:"Secure Infrastructure",
text:
"ANOX uses scalable cloud infrastructure designed for performance, availability, and protection."
},


{
id:"thirdparty",
icon:Globe,
title:"Third Party Services",
text:
"Some features may use trusted providers for authentication, analytics, payments, and infrastructure."
},


{
id:"cookies",
icon:Cookie,
title:"Cookies & Tracking",
text:
"Cookies help improve performance, remember preferences, and understand platform usage."
},


{
id:"rights",
icon:UserRoundCheck,
title:"Your Rights",
text:
"Users may request access, correction, or deletion of their personal information."
},


{
id:"retention",
icon:Clock,
title:"Data Retention",
text:
"ANOX keeps information only as long as required for service delivery and legal obligations."
},


];





export default function PrivacyPage(){


return (

<main

className="
relative
min-h-screen
overflow-hidden
bg-[#04070b]
px-6
py-28
text-white
"

>



<div

className="
pointer-events-none
absolute
left-1/2
top-0
h-[700px]
w-[700px]
-translate-x-1/2
rounded-full
bg-cyan-500/10
blur-[160px]
"

/>




<section

className="
relative
mx-auto
max-w-6xl
"

>



<motion.header

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.5
}}

className="
text-center
"

>



<div

className="
mx-auto
flex
h-24
w-24
items-center
justify-center
rounded-3xl
border
border-cyan-400/30
bg-cyan-400/10
"

>

<ShieldCheck

size={45}

className="text-cyan-300"

/>


</div>




<h1

className="
mt-8
text-5xl
font-black
sm:text-6xl
"

>

Privacy Policy

</h1>




<p

className="
mx-auto
mt-5
max-w-2xl
text-lg
leading-8
text-zinc-400
"

>

Learn how ANOX protects, manages and uses your information across our digital ecosystem.

</p>



</motion.header>









<div

className="
mt-16
grid
gap-6
md:grid-cols-2
"

>


{

sections.map((item,index)=>{


const Icon=item.icon;


return (

<motion.article

key={item.id}


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
delay:index*.04,
duration:.35
}}


className="
rounded-3xl
border
border-white/10
bg-white/[0.04]
p-8
transition
hover:border-cyan-400/30
"

>


<Icon

size={32}

className="text-cyan-400"

/>




<h2

className="
mt-6
text-xl
font-black
"

>

{item.title}

</h2>




<p

className="
mt-3
leading-8
text-zinc-400
"

>

{item.text}

</p>



</motion.article>

);


})

}



</div>









<div

className="
mt-14
rounded-3xl
border
border-cyan-400/20
bg-cyan-400/5
p-10
text-center
"

>



<h3

className="
text-3xl
font-black
"

>

Your Privacy Matters

</h3>




<p

className="
mx-auto
mt-4
max-w-2xl
text-zinc-400
"

>

ANOX is committed to building secure technology while respecting user privacy and transparency.

</p>




<Link

href="/contact"

className="
mt-8
inline-flex
rounded-xl
bg-cyan-400
px-7
py-3
font-bold
text-black
transition
hover:bg-cyan-300
"

>

Contact Privacy Team

</Link>



</div>






<p

className="
mt-10
text-center
text-sm
text-zinc-600
"

>

Last updated: August 2026

</p>



</section>



</main>

);


}