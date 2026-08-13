"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Cpu,
  Shield,
  Code2,
  Cloud,
  ArrowRight,
  Sparkles,
} from "lucide-react";


export default function ShopPage() {


  const [category,setCategory] = useState("All");
  const [search,setSearch] = useState("");



  const products = [

    {
      title:"ANOX AI Pro",
      description:
      "Advanced AI assistant with powerful automation capabilities.",
      price:"$19",
      category:"AI",
      icon:Cpu,
      tag:"Popular"
    },


    {
      title:"AI API Credits",
      description:
      "High performance API access for your applications.",
      price:"$49",
      category:"AI",
      icon:Sparkles,
      tag:"Developer"
    },


    {
      title:"Security Audit",
      description:
      "Professional security assessment for your infrastructure.",
      price:"$299",
      category:"Cyber",
      icon:Shield,
      tag:"Security"
    },


    {
      title:"Pentest Report",
      description:
      "Detailed vulnerability analysis and recommendations.",
      price:"$499",
      category:"Cyber",
      icon:Shield,
      tag:"Enterprise"
    },


    {
      title:"UI Pro Kit",
      description:
      "Premium futuristic UI components for developers.",
      price:"$39",
      category:"Software",
      icon:Code2,
      tag:"Design"
    },


    {
      title:"Cloud Instance",
      description:
      "Scalable cloud infrastructure for your projects.",
      price:"$99",
      category:"Cloud",
      icon:Cloud,
      tag:"Cloud"
    },


  ];



  const categories=[
    "All",
    "AI",
    "Cyber",
    "Software",
    "Cloud"
  ];



  const filtered =
  products.filter(product=>{

    const matchCategory =
    category==="All"
    ||
    product.category===category;


    const matchSearch =
    product.title
    .toLowerCase()
    .includes(
      search.toLowerCase()
    );


    return matchCategory && matchSearch;

  });




  return (

<main
className="
relative
min-h-screen
overflow-hidden
bg-[#04070b]
px-6
py-24
text-white
"
>


{/* Background */}

<div
className="
absolute
left-1/2
top-0
h-[900px]
w-[900px]
-translate-x-1/2
rounded-full
bg-cyan-500/10
blur-[180px]
"
/>


<div
className="
absolute
inset-0
opacity-[0.03]
[background-image:radial-gradient(white_1px,transparent_1px)]
[background-size:24px_24px]
"
/>





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
relative
mx-auto
max-w-7xl
"

>



{/* Header */}


<div
className="
text-center
"
>


<div
className="
mx-auto
flex
h-20
w-20
items-center
justify-center
rounded-3xl
border
border-cyan-400/30
bg-cyan-400/10
shadow-[0_0_50px_rgba(34,211,238,.25)]
"
>

<Sparkles
size={38}
className="text-cyan-300"
/>

</div>



<h1
className="
mt-8
text-6xl
font-black
tracking-tight
"
>

ANOX Store

</h1>


<p
className="
mx-auto
mt-4
max-w-xl
text-zinc-400
"
>

Premium AI, cybersecurity and software solutions.

</p>


</div>







{/* Search */}


<div
className="
mx-auto
mt-12
max-w-xl
"
>

<div
className="
flex
items-center
gap-3
rounded-2xl
border
border-white/10
bg-white/5
px-5
py-4
backdrop-blur-xl
"
>

<Search
size={20}
className="text-cyan-400"
/>


<input

value={search}

onChange={(e)=>
setSearch(e.target.value)
}

placeholder="Search products..."

className="
w-full
bg-transparent
outline-none
text-white
placeholder:text-zinc-500
"

/>


</div>


</div>







{/* Categories */}


<div
className="
mt-10
flex
flex-wrap
justify-center
gap-3
"
>


{
categories.map(cat=>(


<button

key={cat}

onClick={()=>
setCategory(cat)
}

className={`
rounded-xl
px-5
py-2
text-sm
font-semibold
transition-all

${
category===cat

?
"bg-cyan-400 text-black"

:

"border border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"

}

`}

>

{cat}

</button>


))
}



</div>







{/* Products */}


<div
className="
mt-14
grid
gap-6
md:grid-cols-2
lg:grid-cols-3
"
>


{
filtered.map((product,index)=>{


const Icon=product.icon;


return (

<motion.div

key={product.title}

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:index*.08
}}

whileHover={{
y:-8
}}

className="
group
rounded-3xl
border
border-white/10
bg-white/5
p-7
backdrop-blur-xl
transition
hover:border-cyan-400/40
hover:shadow-[0_0_40px_rgba(34,211,238,.12)]
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
flex
h-14
w-14
items-center
justify-center
rounded-2xl
bg-cyan-400/10
"
>

<Icon
size={28}
className="text-cyan-300"
/>

</div>



<span
className="
rounded-full
bg-cyan-400/10
px-3
py-1
text-xs
text-cyan-300
"
>

{product.tag}

</span>


</div>





<h2
className="
mt-6
text-2xl
font-bold
"
>

{product.title}

</h2>



<p
className="
mt-3
leading-7
text-zinc-400
"
>

{product.description}

</p>




<div
className="
mt-8
flex
items-center
justify-between
"
>


<div>

<p
className="
text-sm
text-zinc-500
"
>
Starting
</p>

<p
className="
text-3xl
font-black
"
>

{product.price}

</p>


</div>




<button
className="
flex
items-center
gap-2
rounded-xl
bg-cyan-400
px-5
py-3
font-bold
text-black
transition
hover:bg-cyan-300
"
>

Buy

<ArrowRight size={18}/>

</button>


</div>



</motion.div>


)


})
}


</div>





</motion.div>


</main>

  );
}