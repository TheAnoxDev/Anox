"use client";

import dynamic from "next/dynamic";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/cn";



const HeroGlobe = dynamic(
  () => import("@/components/3d/Globe"),
  {
    ssr: false,

    loading: () => (

      <div

        className="
        flex
        flex-col
        items-center
        justify-center

        rounded-full

        border
        border-cyan-400/20

        bg-cyan-400/5

        animate-pulse

        w-[320px]
        h-[320px]

        sm:w-[420px]
        sm:h-[420px]

        lg:w-[520px]
        lg:h-[520px]
        "

      >

        <span

          className="
          font-mono
          text-xs
          tracking-[0.35em]
          text-cyan-400/80
          "

        >

          BOOTING ANOX CORE

        </span>


        <span

          className="
          mt-3
          text-[10px]
          tracking-widest
          text-zinc-500
          "

        >

          ESTABLISHING AI NETWORK

        </span>


      </div>

    )
  }
);





interface HeroProps {

  locale?: "en" | "fa";

}





export default function Hero({

  locale="en"

}:HeroProps){


const rtl = locale==="fa";



const content = {

en:{

badge:"Autonomous AI & Cybersecurity",

title:"ANOX",

subtitle:"Next-Gen Enterprise",

highlight:"Security Intelligence",

description:
"ANOX engineers autonomous AI systems and enterprise cybersecurity platforms designed for resilient digital infrastructure.",


primary:"Explore Platform",

secondary:"Security Architecture",


stats:[

["Zero-Trust","Core Principle"],

["Autonomous","AI Engine"],

["Real-Time","Security Processing"]

]


},



fa:{

badge:"هوش مصنوعی خودمختار و امنیت سایبری",

title:"ANOX",

subtitle:"سازمان نسل بعدی",

highlight:"هوش امنیت سایبری",

description:
"ANOX سیستم‌های هوش مصنوعی خودمختار و پلتفرم‌های امنیت سایبری سازمانی را برای زیرساخت‌های دیجیتال مقاوم مهندسی می‌کند.",


primary:"بررسی پلتفرم",

secondary:"معماری امنیت",


stats:[

["اعتماد صفر","اصل بنیادین"],

["خودمختار","موتور هوش مصنوعی"],

["در لحظه","پردازش امنیتی"]

]


}


}[locale];





return (


<section

dir={rtl?"rtl":"ltr"}

className={cn(

"relative isolate overflow-hidden",

"min-h-[100dvh]",

"flex items-center",

"bg-[#04070b]",

"py-24 lg:py-32"

)}

>




{/* Background Grid */}

<div

aria-hidden

className="

absolute

inset-0

opacity-[0.035]

-z-10

[background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]

[background-size:4rem_4rem]

"

/>





{/* AI Glow */}

<div

aria-hidden

className="

pointer-events-none

absolute

left-1/2

top-1/2

-translate-x-1/2

-translate-y-1/2

w-[700px]

h-[700px]

rounded-full

bg-cyan-500/10

blur-[120px]

-z-10

"

/>






<Container>


<div

className="

grid

grid-cols-1

lg:grid-cols-[1fr_auto]

items-center

gap-16

xl:gap-24

"

>




{/* TEXT */}


<div

className="

max-w-3xl

animate-[fadeUp_.8s_ease-out]

"

>


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

w-2

h-2

rounded-full

bg-cyan-400

animate-pulse

"

/>


<span

className="

text-xs

uppercase

tracking-[0.3em]

text-cyan-300

"

>

{content.badge}

</span>


</div>






<h1

className="

mt-8

text-5xl

sm:text-7xl

lg:text-[88px]

font-black

leading-[0.9]

tracking-tight

"

>


<span

className="

block

text-white

"

>

{content.title}

</span>



<span

className="

block

text-3xl

sm:text-5xl

text-zinc-200

"

>

{content.subtitle}

</span>




<span

className="

block

text-cyan-400

"

>

{content.highlight}

</span>



</h1>







<p

className="

mt-7

max-w-xl

text-lg

sm:text-xl

leading-relaxed

text-zinc-400

"

>

{content.description}

</p>







{/* CTA */}


<div

className="

mt-9

flex

flex-wrap

gap-4

"

>


<a

href="/platform"

className="

rounded-xl

bg-cyan-500

px-7

py-3.5

font-bold

text-black

transition

hover:bg-cyan-400

hover:shadow-[0_0_30px_rgba(6,182,212,.35)]

"

>

{content.primary}

</a>




<a

href="/architecture"

className="

rounded-xl

border

border-white/15

bg-white/[0.03]

px-7

py-3.5

font-semibold

text-white

transition

hover:bg-white/10

"

>

{content.secondary}

</a>



</div>








{/* Stats */}


<div

className="

mt-12

grid

grid-cols-1

sm:grid-cols-3

gap-4

"

>


{content.stats.map(([value,label])=>(


<div

key={value}

className="

rounded-xl

border

border-white/10

bg-white/[0.02]

p-4

"

>


<div

className="

text-2xl

font-black

text-cyan-400

"

>

{value}

</div>


<div

className="

mt-1

text-[11px]

uppercase

tracking-widest

text-zinc-500

"

>

{label}

</div>



</div>


))}


</div>



</div>








{/* GLOBE */}


<div

className="

flex

justify-center

animate-[fadeIn_1.2s_ease-out]

"

>


<HeroGlobe/>


</div>





</div>


</Container>


</section>


);


}