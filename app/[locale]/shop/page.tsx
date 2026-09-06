"use client";

import {
  useMemo,
  useState,
} from "react";

import {
  motion,
} from "framer-motion";

import {
  Search,
  Cpu,
  Shield,
  Code2,
  Cloud,
  Sparkles,
  Check,
  Star,
  ShoppingCart,
  X,
  Plus,
  Minus,
  Zap,
  SlidersHorizontal,
} from "lucide-react";

import type {
  LucideIcon,
} from "lucide-react";





type Product = {

  id:string;

  title:string;

  description:string;

  price:number;

  category:string;

  icon:LucideIcon;

  tag:string;

  rating:number;

  type:string;

  features:string[];

};




type CartItem = Product & {

  quantity:number;

};







const PRODUCTS:Product[] = [


{
id:"ai-pro",

title:"ANOX AI Pro",

description:
"Advanced artificial intelligence assistant for automation, productivity and intelligent workflows.",

price:19,

category:"AI",

icon:Cpu,

tag:"MOST POPULAR",

rating:5,

type:"Subscription",

features:[
"Unlimited AI requests",
"Advanced AI models",
"Automation tools",
"Priority support"
]

},



{
id:"ai-api",

title:"ANOX AI API",

description:
"Developer focused AI infrastructure with scalable API access.",

price:49,

category:"AI",

icon:Sparkles,

tag:"DEVELOPER",

rating:5,

type:"API",

features:[
"Fast inference",
"Developer dashboard",
"Production ready"
]

},



{
id:"security-audit",

title:"Security Audit",

description:
"Professional cybersecurity assessment for systems and applications.",

price:299,

category:"Cyber",

icon:Shield,

tag:"ENTERPRISE",

rating:5,

type:"Service",

features:[
"Vulnerability scan",
"Security report",
"Expert review"
]

},



{
id:"pentest",

title:"Pentest Package",

description:
"Advanced penetration testing service with detailed remediation.",

price:499,

category:"Cyber",

icon:Shield,

tag:"RED TEAM",

rating:5,

type:"Service",

features:[
"Web testing",
"Network testing",
"Final report"
]

},



{
id:"ui-kit",

title:"ANOX UI Kit",

description:
"Premium futuristic components for modern applications.",

price:39,

category:"Software",

icon:Code2,

tag:"DESIGN",

rating:4,

type:"License",

features:[
"100+ components",
"Dark UI system",
"Developer friendly"
]

},



{
id:"cloud",

title:"Cloud Infrastructure",

description:
"Scalable cloud environments optimized for modern applications.",

price:99,

category:"Cloud",

icon:Cloud,

tag:"CLOUD",

rating:5,

type:"Monthly",

features:[
"Auto scaling",
"High availability",
"Monitoring"
]

}

];





const CATEGORIES = [
"All",
"AI",
"Cyber",
"Software",
"Cloud"
];








export default function ShopPage(){


const [category,setCategory] =
useState("All");


const [search,setSearch] =
useState("");



const [sort,setSort] =
useState("popular");



const [cart,setCart] =
useState<CartItem[]>([]);



const [selected,setSelected] =
useState<Product|null>(null);





const products = useMemo(()=>{


const filtered =
PRODUCTS.filter(product=>{


const categoryMatch =
category==="All"
||
product.category===category;



const searchMatch =
product.title
.toLowerCase()
.includes(
search.toLowerCase()
);



return categoryMatch && searchMatch;


});



if(sort==="price-low"){

return [...filtered].sort(
(a,b)=>a.price-b.price
);

}



if(sort==="price-high"){

return [...filtered].sort(
(a,b)=>b.price-a.price
);

}



return filtered;



},[
category,
search,
sort
]);





function addToCart(product:Product){


setCart(current=>{


const exists =
current.find(
item=>item.id===product.id
);



if(exists){

return current.map(item=>

item.id===product.id

?

{
...item,
quantity:item.quantity+1
}

:

item

);

}



return [
...current,
{
...product,
quantity:1
}
];


});


}





function updateQuantity(
id:string,
amount:number
){


setCart(current=>

current.map(item=>


item.id===id

?

{
...item,
quantity:
Math.max(
1,
item.quantity+amount
)
}

:

item


)

);


}





function removeCart(id:string){


setCart(current=>

current.filter(
item=>item.id!==id
)

);


}





const total =
cart.reduce(
(sum,item)=>
sum+(item.price*item.quantity),
0
);
return (

<main

className="
relative
min-h-screen
overflow-hidden
bg-[#020617]
px-6
py-28
text-white
"

>


{/* BACKGROUND */}


<div

className="
absolute
left-1/2
top-[-300px]
h-[900px]
w-[900px]
-translate-x-1/2
rounded-full
bg-cyan-500/20
blur-[180px]
"

/>



<div

className="
absolute
inset-0
opacity-[0.04]
bg-[linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)]
bg-[size:50px_50px]
"

/>





<section

className="
relative
mx-auto
max-w-7xl
"

>





{/* HERO */}



<motion.div

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.7
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
rounded-[32px]
border
border-cyan-400/30
bg-cyan-400/10
shadow-[0_0_80px_rgba(34,211,238,.35)]
"

>

<Sparkles

size={45}

className="
text-cyan-300
"

/>


</div>




<h1

className="
mt-10
text-6xl
font-black
"

>

ANOX Store

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

Premium artificial intelligence,
cybersecurity and software solutions
built for the future.

</p>



<div

className="
mt-8
flex
justify-center
"

>


<div

className="
flex
items-center
gap-2
rounded-full
border
border-cyan-400/20
bg-cyan-400/10
px-5
py-2
text-sm
text-cyan-300
"

>


<Zap size={16}/>

Future Technology


</div>


</div>



</motion.div>









{/* SEARCH */}



<div

className="
mt-16
grid
gap-5
lg:grid-cols-3
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
lg:col-span-2
"

>


<Search

className="
text-cyan-400
"

/>



<input

value={search}

onChange={
e=>setSearch(e.target.value)
}

placeholder="Search ANOX products..."

className="
w-full
bg-transparent
outline-none
placeholder:text-zinc-500
"

/>



</div>





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
"

>


<SlidersHorizontal

size={18}

className="
text-cyan-400
"

/>



<select

value={sort}

onChange={
e=>setSort(e.target.value)
}

className="
w-full
bg-transparent
py-4
outline-none
"

>


<option
value="popular"
className="bg-black"
>

Popular

</option>



<option
value="price-low"
className="bg-black"
>

Price Low

</option>



<option
value="price-high"
className="bg-black"
>

Price High

</option>



</select>


</div>


</div>









{/* CATEGORY */}



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

CATEGORIES.map(item=>(


<button

key={item}

onClick={()=>
setCategory(item)
}

className={`
rounded-xl
px-6
py-3
font-bold
transition

${
category===item

?

"bg-cyan-400 text-black"

:

"border border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"

}

`}

>


{item}


</button>


))


}


</div>









{/* PRODUCTS */}



<div

className="
mt-16
grid
gap-8
md:grid-cols-2
lg:grid-cols-3
"

>


{


products.map(product=>{


const Icon =
product.icon;



return (


<motion.article


key={product.id}


initial={{
opacity:0,
y:30
}}


animate={{
opacity:1,
y:0
}}


whileHover={{
y:-10
}}


className="
rounded-[32px]
border
border-white/10
bg-white/[0.04]
p-8
backdrop-blur-xl
transition
hover:border-cyan-400/40
"

>


<div

className="
flex
justify-between
"

>


<div

className="
flex
h-16
w-16
items-center
justify-center
rounded-2xl
bg-cyan-400/10
"

>


<Icon

size={32}

className="
text-cyan-300
"

/>


</div>



<span

className="
rounded-full
bg-cyan-400/10
px-3
py-1
text-xs
font-bold
text-cyan-300
"

>

{product.tag}

</span>



</div>





<h2

className="
mt-7
text-2xl
font-black
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
mt-5
flex
gap-1
"

>


{

Array.from({
length:product.rating
}).map((_,index)=>(


<Star

key={index}

size={16}

className="
fill-cyan-400
text-cyan-400
"

/>


))


}


</div>





<ul

className="
mt-6
space-y-3
"

>


{

product.features.map(feature=>(


<li

key={feature}

className="
flex
items-center
gap-2
text-sm
text-zinc-300
"

>


<Check

size={16}

className="
text-cyan-400
"

/>


{feature}


</li>


))


}


</ul>





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
text-xs
text-zinc-500
"

>

{product.type}

</p>


<p

className="
text-3xl
font-black
"

>

${product.price}

</p>


</div>





<div

className="
flex
gap-2
"

>


<button

onClick={()=>
setSelected(product)
}

className="
rounded-xl
border
border-white/10
px-4
py-3
hover:bg-white/10
"

>

View

</button>



<button

onClick={()=>
addToCart(product)
}

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
"

>


<ShoppingCart size={18}/>

Buy


</button>


</div>


</div>






</motion.article>


)


})


}



</div>
{/* EMPTY STATE */}

{
products.length===0 && (

<div

className="
mt-20
text-center
text-zinc-400
"

>

No products found.

</div>

)

}









{/* CART PANEL */}



{

cart.length > 0 && (


<div

className="
fixed
bottom-6
right-6
z-40
w-[320px]
rounded-3xl
border
border-white/10
bg-black/70
p-6
shadow-2xl
backdrop-blur-2xl
"

>


<div

className="
flex
items-center
justify-between
"

>


<h3

className="
text-xl
font-black
"

>

Cart

</h3>


<ShoppingCart

className="
text-cyan-400
"

/>


</div>





<div

className="
mt-5
space-y-4
"

>


{

cart.map(item=>(


<div

key={item.id}

className="
rounded-xl
bg-white/5
p-4
"

>


<div

className="
flex
justify-between
"

>


<span

className="
font-bold
"

>

{item.title}

</span>


<button

onClick={()=>
removeCart(item.id)
}

className="
text-red-400
"

>

<X size={16}/>

</button>


</div>





<div

className="
mt-3
flex
items-center
justify-between
"

>


<div

className="
flex
items-center
gap-3
"

>


<button

onClick={()=>
updateQuantity(
item.id,
-1
)
}

className="
rounded-lg
border
border-white/10
p-1
"

>

<Minus size={14}/>

</button>



<span>

{item.quantity}

</span>



<button

onClick={()=>
updateQuantity(
item.id,
1
)
}

className="
rounded-lg
border
border-white/10
p-1
"

>

<Plus size={14}/>

</button>


</div>




<span

className="
font-black
"

>

${item.price * item.quantity}

</span>



</div>


</div>


))


}


</div>






<div

className="
mt-5
flex
justify-between
border-t
border-white/10
pt-4
"

>


<span>

Total

</span>


<span

className="
text-2xl
font-black
text-cyan-400
"

>

${total}

</span>


</div>



<button

className="
mt-5
w-full
rounded-xl
bg-cyan-400
py-3
font-bold
text-black
"

>

Checkout

</button>



</div>


)


}









{/* PRODUCT MODAL */}



{

selected && (


<div

className="
fixed
inset-0
z-50
flex
items-center
justify-center
bg-black/70
px-6
"

onClick={()=>
setSelected(null)
}

>


<motion.div

initial={{
opacity:0,
scale:.9
}}

animate={{
opacity:1,
scale:1
}}

onClick={
e=>e.stopPropagation()
}

className="
w-full
max-w-xl
rounded-[32px]
border
border-white/10
bg-[#05070b]
p-8
"

>


<div

className="
flex
justify-between
"

>


<h2

className="
text-3xl
font-black
"

>

{selected.title}

</h2>



<button

onClick={()=>
setSelected(null)
}

>

<X/>

</button>


</div>





<p

className="
mt-5
leading-8
text-zinc-400
"

>

{selected.description}

</p>





<div

className="
mt-6
space-y-3
"

>


{

selected.features.map(feature=>(


<div

key={feature}

className="
flex
items-center
gap-3
"

>


<Check

size={18}

className="
text-cyan-400
"

/>


{feature}


</div>


))


}


</div>





<button

onClick={()=>{

addToCart(selected);

setSelected(null);

}}

className="
mt-8
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
"

>


<ShoppingCart/>

Add To Cart


</button>




</motion.div>


</div>


)


}








</section>


</main>


);

}