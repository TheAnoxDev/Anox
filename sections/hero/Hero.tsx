"use client";


import dynamic from "next/dynamic";
import Link from "next/link";


import Container from "@/components/ui/Container";
import { cn } from "@/lib/cn";


import { useLang } from "@/components/LangContext";
import { useTranslation } from "@/hooks/useTranslation";



const HeroGlobe = dynamic(
  () => import("@/components/3d/Globe"),
  {
    ssr:false,

    loading:()=>(
      <div
        className="
        flex
        aspect-square
        w-[280px]
        items-center
        justify-center
        rounded-full
        border
        border-cyan-400/20
        bg-cyan-400/5
        animate-pulse

        sm:w-[380px]
        lg:w-[460px]
        "
      >

        <div className="text-center">

          <p
            className="
            font-mono
            text-xs
            tracking-[0.35em]
            text-cyan-400
            "
          >
            ANOX CORE
          </p>


          <p
            className="
            mt-3
            text-[10px]
            tracking-widest
            text-zinc-500
            "
          >
            AI NETWORK INITIALIZING
          </p>

        </div>

      </div>
    )
  }
);



export default function Hero(){


const {lang}=useLang();

const {t}=useTranslation();



const rtl = lang==="fa";

const prefix=`/${lang}`;



return (

<section

id="hero"

dir={rtl ? "rtl":"ltr"}

className="
relative
isolate
flex
min-h-screen
items-center
overflow-hidden
py-24
"

>


{/* Background Glow */}

<div

aria-hidden

className="
pointer-events-none
absolute
left-1/2
top-1/2
-z-10
h-[550px]
w-[550px]
-translate-x-1/2
-translate-y-1/2
rounded-full
bg-cyan-400/10
blur-[120px]
"

/>



<Container>


<div

className="
grid
items-center
gap-14

lg:grid-cols-[1fr_auto]

"

>


{/* Content */}


<div

className={cn(
"max-w-3xl",
rtl && "text-right"
)}

>


{/* Badge */}

<div

className="
inline-flex
items-center
gap-3
rounded-full
border
border-cyan-400/20
bg-white/[0.03]
px-4
py-2
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


<span

className="
text-xs
font-medium
tracking-[0.25em]
text-cyan-300
"

>

{t.hero.badge}

</span>


</div>





{/* Title */}

<h1

className="
mt-8

text-4xl
font-black

leading-[1.05]

tracking-[-0.04em]

sm:text-6xl

lg:text-[72px]

"

>


<span className="block text-white">

{t.hero.title}

</span>


<span

className="
mt-4
block
text-2xl
font-bold
text-zinc-200

sm:text-4xl
"

>

{t.hero.subtitle}

</span>


<span

className="
mt-3
block
text-cyan-400
"

>

{t.hero.highlight}

</span>


</h1>





<p

className="
mt-7
max-w-xl
text-base
leading-8
text-zinc-400

sm:text-lg

"

>

{t.hero.description}

</p>







{/* Buttons */}


<div

className="
mt-9
flex
flex-wrap
gap-4
"

>


<Link

href={`${prefix}/platform`}

className="
rounded-xl
bg-cyan-400
px-7
py-3.5
font-bold
text-black
transition
hover:bg-cyan-300
hover:shadow-[0_0_30px_rgba(34,211,238,.35)]
"

>

{t.hero.primary}

</Link>




<Link

href={`${prefix}/architecture`}

className="
rounded-xl
border
border-white/10
bg-white/[0.03]
px-7
py-3.5
font-semibold
text-white
transition

hover:border-cyan-400/30
hover:bg-white/10

"

>

{t.hero.secondary}

</Link>


</div>








{/* Stats */}

<div

className="
mt-12
grid
grid-cols-3
gap-4

"

>


{
t.hero.stats.map((stat,index)=>(


<div

key={index}

className="
rounded-2xl
border
border-white/10
bg-white/[0.03]
p-4
backdrop-blur-sm
"

>


<div

className="
text-xl
font-black
text-cyan-400
sm:text-2xl
"

>

{stat[0]}

</div>



<p

className="
mt-1
text-[10px]
uppercase
tracking-widest
text-zinc-500
"

>

{stat[1]}

</p>


</div>


))

}


</div>




</div>







{/* Globe */}


<div

className="
flex
justify-center
"

>

<HeroGlobe/>

</div>




</div>



</Container>


</section>

);

}