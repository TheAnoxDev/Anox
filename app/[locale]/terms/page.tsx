"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/components/LangContext";

import {
  FileText,
  ShieldCheck,
  UserCheck,
  Cpu,
  CreditCard,
  Lock,
  Scale,
  AlertTriangle,
  Mail,
} from "lucide-react";





export default function TermsPage(){

const { lang } = useLang();
const prefix = `/${lang}`;



const sections=[

{
icon:UserCheck,
title:"Account Responsibility",
text:
"Users are responsible for providing accurate information, maintaining account security, and protecting their authentication credentials."
},


{
icon:Cpu,
title:"AI & Technology Usage",
text:
"ANOX provides artificial intelligence, software, automation, and digital infrastructure services. Users must use these technologies ethically and legally."
},


{
icon:ShieldCheck,
title:"Security Policy",
text:
"Unauthorized access attempts, security abuse, reverse engineering, attacks, or disruption of ANOX infrastructure are strictly prohibited."
},


{
icon:CreditCard,
title:"Payments & Subscriptions",
text:
"Paid products and services are provided according to the selected plan. Pricing and subscription features may change in future updates."
},


{
icon:Lock,
title:"Data Protection",
text:
"ANOX respects user privacy and applies appropriate technical measures to protect personal information."
},


{
icon:AlertTriangle,
title:"Service Availability",
text:
"ANOX may update, modify, suspend, or improve services to maintain performance, reliability, and security."
},


{
icon:Scale,
title:"Legal Agreement",
text:
"By accessing ANOX products and services, you agree to these terms and all applicable regulations."
},


{
icon:Mail,
title:"Contact & Support",
text:
"For questions regarding these terms, users can contact the ANOX support team."
},


];





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
absolute
left-1/2
top-0
h-[800px]
w-[800px]
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
[background-image:radial-gradient(white_1px,transparent_1px)]
[background-size:32px_32px]
"
/>





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
duration:.7
}}

className="
relative
mx-auto
max-w-6xl
"

>



{/* HEADER */}


<div
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
rounded-[32px]
border
border-cyan-400/30
bg-cyan-400/10
shadow-[0_0_60px_rgba(34,211,238,.25)]
"
>


<FileText
size={46}
className="text-cyan-300"
/>


</div>



<h1
className="
mt-10
text-5xl
font-black
md:text-7xl
"
>

Terms of Service

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

The rules, responsibilities and agreements
that define the relationship between ANOX
and its users.

</p>



<div
className="
mt-6
inline-flex
rounded-full
border
border-white/10
bg-white/5
px-5
py-2
text-sm
text-zinc-400
"
>

Version 1.0 • Updated August 2026

</div>



</div>









{/* CARDS */}



<div
className="
mt-20
grid
gap-6
md:grid-cols-2
"
>


{
sections.map(
(item,index)=>{


const Icon=item.icon;


return (

<motion.article

key={item.title}


initial={{
opacity:0,
y:25
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
delay:index*.06
}}


whileHover={{
y:-6
}}


className="
rounded-3xl
border
border-white/10
bg-white/5
p-8
backdrop-blur-xl
transition
hover:border-cyan-400/40
hover:bg-white/[0.08]
"

>


<Icon

size={32}

className="
text-cyan-400
"

/>



<h2
className="
mt-6
text-2xl
font-bold
"
>

{item.title}

</h2>




<p
className="
mt-4
leading-8
text-zinc-400
"
>

{item.text}

</p>



</motion.article>


)

}

)

}



</div>









{/* AGREEMENT */}



<div
className="
mt-16
rounded-[32px]
border
border-cyan-400/20
bg-cyan-400/5
p-10
text-center
"
>


<h2
className="
text-3xl
font-black
"
>

Accepting These Terms

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

Creating an ANOX account, purchasing products,
or using our platform means you acknowledge
and accept these Terms of Service.

</p>



<Link

href={`${prefix}/contact`}

className="
mt-8
inline-flex
items-center
rounded-xl
bg-cyan-400
px-8
py-4
font-bold
text-black
transition
hover:scale-105
hover:bg-cyan-300
"

>

Contact ANOX

</Link>



</div>






<p
className="
mt-12
text-center
text-sm
text-zinc-600
"
>

© 2026 ANOX Technologies. All rights reserved.

</p>




</motion.section>




</main>

);


}