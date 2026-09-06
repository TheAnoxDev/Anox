import dynamic from "next/dynamic";

import Hero from "@/sections/hero/Hero";

const About = dynamic(
  () => import("@/sections/about/About")
);

const Technology = dynamic(
  () => import("@/sections/technology/Technology")
);

const WhyAnox = dynamic(
  () => import("@/sections/why-anox/WhyAnox")
);

const Services = dynamic(
  () => import("@/sections/services/Services")
);

const Projects = dynamic(
  () => import("@/sections/projects/Projects")
);

const Contact = dynamic(
  () => import("@/sections/contact/Contact")
);





export default function Home(){


return (

<>


<main
className="
relative
overflow-hidden
bg-[#05070b]
"
>


{/* Global Background Glow */}

<div
className="
pointer-events-none
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



{/* Grid */}

<div
className="
pointer-events-none
absolute
inset-0
opacity-[0.035]
[background-image:radial-gradient(white_1px,transparent_1px)]
[background-size:32px_32px]
"
/>





<section>

<Hero />

</section>




<section>

<About />

</section>





<section>

<Technology />

</section>





<section>

<WhyAnox />

</section>





<section>

<Services />

</section>





<section>

<Projects />

</section>





<section>

<Contact />

</section>



</main>





</>

);


}