import Heading from "./Heading";
import { cn } from "@/lib/cn";

interface SectionTitleProps {
  badge:string;
  title:string;
  description?:string;
  align?: "left"|"center"|"right";
}


export default function SectionTitle({
  badge,
  title,
  description,
  align="left"
}:SectionTitleProps){

return (

<div
className={cn(
"max-w-4xl",
align==="center" && "mx-auto text-center",
align==="right" && "ml-auto text-right"
)}
>


<div
className="
inline-flex
items-center
gap-2
rounded-full
border
border-cyan-400/20
bg-cyan-400/10
px-4
py-2
text-xs
font-bold
uppercase
tracking-[0.3em]
text-cyan-300
"
>

<span
className="
h-2
w-2
rounded-full
bg-cyan-400
animate-pulse
"
/>

{badge}

</div>



<Heading className="mt-7">

{title}

</Heading>



{
description && (

<p
className={cn(
"mt-6 max-w-2xl text-lg leading-8 text-zinc-400",
align==="center" && "mx-auto"
)}
>

{description}

</p>

)
}



</div>


);

}