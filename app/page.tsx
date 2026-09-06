import type { Metadata } from "next";

import Hero from "@/sections/hero/Hero";
import About from "@/sections/about/About";
import Technology from "@/sections/technology/Technology";
import Projects from "@/sections/projects/Projects";
import Services from "@/sections/services/Services";
import WhyAnox from "@/sections/why-anox/WhyAnox";
import Contact from "@/sections/contact/Contact";
import Footer from "@/sections/footer/Footer";



export const metadata: Metadata = {

  title:
    "ANOX | Artificial Intelligence, Cybersecurity & Cloud Technology",

  description:
    "ANOX builds next-generation AI systems, cybersecurity solutions, software platforms and cloud infrastructure.",


  keywords:[
    "ANOX",
    "Artificial Intelligence",
    "Cybersecurity",
    "Cloud",
    "Software Engineering",
    "Automation",
    "AI Platform",
  ],

};






export default function Home(){


return (


<main

className="
relative
min-h-screen
overflow-hidden
bg-[#03070c]
text-white
"

>


{/* Global Background */}

<div

className="
pointer-events-none
absolute
inset-0
bg-[radial-gradient(circle_at_top,rgba(34,211,238,.12),transparent_45%)]
"

/>


<div

className="
pointer-events-none
absolute
inset-0
opacity-[0.03]
[background-image:radial-gradient(white_1px,transparent_1px)]
[background-size:32px_32px]
"

/>





<div

className="
relative
z-10
"

>


<Hero />



<About />



<Technology />



<Projects />



<Services />



<WhyAnox />



<Contact />



<Footer />



</div>



</main>


);


}