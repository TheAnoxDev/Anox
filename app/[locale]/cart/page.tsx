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
} from "lucide-react";
import Link from "next/link";


type CartItem = {
  title: string;
  description: string;
  price: string;
  quantity: number;
};



const CART_KEY = "anox-cart";
const CART_EVENT = "anox-cart-update";



function subscribe(callback: () => void) {

  window.addEventListener(
    CART_EVENT,
    callback
  );


  return () => {

    window.removeEventListener(
      CART_EVENT,
      callback
    );

  };

}




function getCart(): CartItem[] {

  if(typeof window === "undefined") {
    return [];
  }


  const data =
  localStorage.getItem(CART_KEY);


  return data
  ? JSON.parse(data)
  : [];

}





function saveCart(items:CartItem[]) {

  localStorage.setItem(
    CART_KEY,
    JSON.stringify(items)
  );


  window.dispatchEvent(
    new Event(CART_EVENT)
  );

}





export default function CartPage(){


const items =
useSyncExternalStore(
  subscribe,
  getCart,
  ()=>[]
);





function removeItem(title:string){

saveCart(
  items.filter(
    item =>
    item.title !== title
  )
);

}





function clearCart(){

saveCart([]);

}





function increase(title:string){

saveCart(

items.map(item=>

item.title === title

?

{
 ...item,
 quantity:item.quantity + 1
}

:

item

)

);

}





function decrease(title:string){

saveCart(

items.map(item=>

item.title === title

?

{
 ...item,
 quantity:Math.max(
 1,
 item.quantity - 1
 )
}

:

item

)

);

}





const total =
items.reduce(

(sum,item)=>

sum +

Number(
item.price.replace("$","")
)

*

item.quantity,

0

);






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


<div
className="
absolute
left-1/2
top-0
h-[800px]
w-[800px]
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





<div
className="
relative
mx-auto
max-w-6xl
"
>



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
shadow-[0_0_50px_rgba(34,211,238,.2)]
"
>

<ShoppingBag
size={40}
className="text-cyan-300"
/>

</div>




<h1
className="
mt-8
text-5xl
font-black
"
>

Your Cart

</h1>



<p
className="
mt-3
text-zinc-400
"
>

Review your ANOX products

</p>


</div>







{
items.length === 0

?

<div
className="
mt-16
rounded-3xl
border
border-white/10
bg-white/5
p-12
text-center
backdrop-blur-xl
"
>


<h2
className="
text-2xl
font-bold
"
>

Cart is empty

</h2>


<p
className="
mt-3
text-zinc-400
"
>

You havent added any products yet.

</p>



<Link

href="/shop"

className="
mt-8
inline-flex
items-center
gap-2
rounded-xl
bg-cyan-400
px-6
py-3
font-bold
text-black
hover:bg-cyan-300
"

>

Go Shop

<ArrowRight size={18}/>

</Link>


</div>


:


<div
className="
mt-14
grid
gap-8
lg:grid-cols-3
"
>



<div
className="
space-y-5
lg:col-span-2
"
>



{
items.map(item=>(


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

className="
rounded-3xl
border
border-white/10
bg-white/5
p-6
backdrop-blur-xl
"

>


<div
className="
flex
justify-between
"
>


<div>

<h2
className="
text-xl
font-bold
"
>

{item.title}

</h2>


<p
className="
mt-2
text-zinc-400
"
>

{item.description}

</p>


</div>



<button

onClick={()=>
removeItem(item.title)
}

className="
rounded-xl
p-3
text-red-400
hover:bg-red-400/10
"

>

<Trash2 size={20}/>

</button>


</div>






<div
className="
mt-6
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
decrease(item.title)
}

className="
rounded-lg
border
border-white/10
p-2
"

>

<Minus size={16}/>

</button>




<span>
{item.quantity}
</span>




<button

onClick={()=>
increase(item.title)
}

className="
rounded-lg
border
border-white/10
p-2
"

>

<Plus size={16}/>

</button>



</div>




<span
className="
text-2xl
font-black
"
>

{item.price}

</span>



</div>



</motion.div>


))
}



</div>







<div
className="
h-fit
rounded-3xl
border
border-white/10
bg-white/5
p-7
backdrop-blur-xl
"
>


<h2
className="
text-2xl
font-bold
"
>

Summary

</h2>




<div
className="
mt-6
flex
justify-between
"
>

<span
className="
text-zinc-400
"
>

Total

</span>



<span
className="
text-3xl
font-black
"
>

${total}

</span>


</div>




<div
className="
mt-6
flex
items-center
gap-3
rounded-xl
bg-cyan-400/10
p-4
text-cyan-300
"
>

<ShieldCheck size={20}/>

Secure ANOX Checkout

</div>




<button

className="
mt-6
w-full
rounded-xl
bg-cyan-400
py-4
font-bold
text-black
hover:bg-cyan-300
"

>

Checkout

</button>




<button

onClick={clearCart}

className="
mt-3
w-full
rounded-xl
border
border-white/10
py-3
text-zinc-300
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