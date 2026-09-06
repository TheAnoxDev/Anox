"use client";

import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import {
  Trash2,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Minus,
  Plus,
  CreditCard,
  Sparkles,
  Lock,
} from "lucide-react";

import Link from "next/link";



type CartItem = {

title:string;
description:string;
price:string;
quantity:number;
category?:string;

};




const CART_KEY="anox-cart";
const CART_EVENT="anox-cart-update";





function subscribe(callback:()=>void){

window.addEventListener(
CART_EVENT,
callback
);


return()=>{

window.removeEventListener(
CART_EVENT,
callback
);

};

}





function getCart():CartItem[]{


if(typeof window==="undefined")
return [];


const data=
localStorage.getItem(CART_KEY);


return data
?
JSON.parse(data)
:
[];

}





function saveCart(items:CartItem[]){

localStorage.setItem(
CART_KEY,
JSON.stringify(items)
);


window.dispatchEvent(
new Event(CART_EVENT)
);

}







export default function CartPage(){



const items=
useSyncExternalStore(
subscribe,
getCart,
()=>[]
);







function update(items:CartItem[]){

saveCart(items);

}





function remove(title:string){

update(
items.filter(
x=>x.title!==title
)
);

}





function clear(){

saveCart([]);

}





function plus(title:string){

update(

items.map(item=>

item.title===title

?

{
...item,
quantity:item.quantity+1
}

:

item

)

);

}





function minus(title:string){

update(

items.map(item=>

item.title===title

?

{
...item,
quantity:Math.max(
1,
item.quantity-1
)
}

:

item

)

);

}






const subtotal =
items.reduce(

(total,item)=>

total+

Number(
item.price.replace("$","")
)

*
item.quantity

,0);




const tax =
subtotal * 0.05;


const total =
subtotal + tax;







return (

<main
className="
relative
min-h-screen
overflow-hidden
bg-[#02060b]
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
relative
mx-auto
max-w-7xl
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
rounded-3xl
border
border-cyan-400/30
bg-cyan-400/10
shadow-[0_0_70px_rgba(34,211,238,.25)]
"
>


<ShoppingBag
size={45}
className="text-cyan-300"
/>


</div>




<h1
className="
mt-8
text-6xl
font-black
"
>

ANOX Cart

</h1>



<p
className="
mt-4
text-zinc-400
"
>

Your premium technology workspace

</p>



</div>









{
items.length===0

?




<div
className="
mt-20
rounded-3xl
border
border-white/10
bg-white/5
p-14
text-center
backdrop-blur-xl
"
>



<Sparkles
size={50}
className="
mx-auto
text-cyan-400
"
/>




<h2
className="
mt-6
text-3xl
font-black
"
>

Your cart is empty

</h2>



<p
className="
mt-3
text-zinc-400
"
>

Explore ANOX products and services.

</p>



<Link

href="/shop"

className="
mt-8
inline-flex
items-center
gap-3
rounded-xl
bg-cyan-400
px-8
py-4
font-black
text-black
"

>

Explore Store

<ArrowRight/>

</Link>



</div>






:



<div
className="
mt-16
grid
gap-8
lg:grid-cols-3
"
>









{/* PRODUCTS */}



<div
className="
space-y-5
lg:col-span-2
"
>


{
items.map((item,index)=>(


<motion.div

key={item.title}

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:index*.1
}}

whileHover={{
y:-5
}}

className="
rounded-3xl
border
border-white/10
bg-white/[0.04]
p-7
backdrop-blur-xl
"

>


<div
className="
flex
justify-between
gap-5
"
>



<div>


<div
className="
flex
items-center
gap-3
"
>

<h2
className="
text-2xl
font-black
"
>

{item.title}

</h2>


{
item.category &&

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

{item.category}

</span>

}


</div>




<p
className="
mt-3
text-zinc-400
"
>

{item.description}

</p>



</div>





<button

onClick={()=>remove(item.title)}

className="
rounded-xl
p-3
text-red-400
hover:bg-red-400/10
"

>

<Trash2/>

</button>




</div>







<div
className="
mt-8
flex
items-center
justify-between
"
>


<div
className="
flex
items-center
gap-4
"
>


<button
onClick={()=>minus(item.title)}
className="
rounded-xl
border
border-white/10
p-3
hover:bg-white/10
"
>

<Minus size={16}/>

</button>



<span
className="
font-bold
"
>

{item.quantity}

</span>




<button
onClick={()=>plus(item.title)}
className="
rounded-xl
border
border-white/10
p-3
hover:bg-white/10
"
>

<Plus size={16}/>

</button>


</div>





<p
className="
text-3xl
font-black
"
>

{item.price}

</p>



</div>



</motion.div>


))
}



</div>









{/* SUMMARY */}




<div
className="
h-fit
rounded-3xl
border
border-white/10
bg-white/[0.05]
p-8
backdrop-blur-xl
"
>



<h2
className="
text-3xl
font-black
"
>

Checkout

</h2>




<div
className="
mt-8
space-y-4
"
>


<div className="flex justify-between text-zinc-400">

<span>Subtotal</span>

<span>${subtotal.toFixed(2)}</span>

</div>




<div className="flex justify-between text-zinc-400">

<span>Tax</span>

<span>${tax.toFixed(2)}</span>

</div>




<div
className="
border-t
border-white/10
pt-5
flex
justify-between
"
>

<span className="font-bold">

Total

</span>


<span
className="
text-4xl
font-black
"
>

${total.toFixed(2)}

</span>


</div>



</div>







<div
className="
mt-8
space-y-3
"
>


<div
className="
flex
items-center
gap-3
rounded-xl
bg-cyan-400/10
p-4
text-cyan-300
"
>

<ShieldCheck/>

Secure Checkout

</div>



<div
className="
flex
items-center
gap-3
rounded-xl
bg-white/5
p-4
text-zinc-300
"
>

<Lock/>

Encrypted Payment

</div>



</div>





<button

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
font-black
text-black
hover:bg-cyan-300
"

>


<CreditCard/>

Proceed Payment


</button>




<button

onClick={clear}

className="
mt-3
w-full
rounded-xl
border
border-white/10
py-3
text-zinc-400
hover:bg-white/5
"

>

Clear Cart

</button>



</div>





</div>


}



</div>


</main>

);

}