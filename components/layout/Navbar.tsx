"use client";


import Link from "next/link";

import {
  useEffect,
  useMemo,
  useState,
} from "react";


import {
  AnimatePresence,
  motion,
} from "framer-motion";


import {
  Menu,
  X,
  Globe,
} from "lucide-react";


import clsx from "clsx";


import Logo from "./Logo";


import {
  useLang
} from "@/components/LangContext";


import {
  useTranslation
} from "@/hooks/useTranslation";





type SectionId =
  | "hero"
  | "about"
  | "technology"
  | "projects"
  | "contact";






export default function Navbar(){



const [open,setOpen]=useState(false);


const [scrolled,setScrolled]=useState(false);


const [active,setActive]=useState<SectionId>("hero");



const {
lang,
setLang
}=useLang();



const {
t
}=useTranslation();





const prefix =
`/${lang}`;



const rtl =
lang==="fa";







const links = useMemo(()=>[

{
id:"hero" as SectionId,
name:t.nav.home,
href:`${prefix}#hero`
},


{
id:"about" as SectionId,
name:t.nav.about,
href:`${prefix}#about`
},


{
id:"technology" as SectionId,
name:t.nav.technology,
href:`${prefix}/platform`
},


{
id:"projects" as SectionId,
name:t.nav.projects,
href:`${prefix}#projects`
},



],[
prefix,
t
]);








/*
========================
SCROLL + ACTIVE SECTION
========================
*/


useEffect(()=>{


let ticking=false;



const handleScroll=()=>{


if(!ticking){


requestAnimationFrame(()=>{


setScrolled(
window.scrollY > 30
);


ticking=false;


});


ticking=true;


}


};




window.addEventListener(
"scroll",
handleScroll,
{
passive:true
}
);




return()=>{


window.removeEventListener(
"scroll",
handleScroll
);


};



},[]);









useEffect(()=>{



const sections =
document.querySelectorAll<HTMLElement>(
"[data-section]"
);



const observer =
new IntersectionObserver(


entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


setActive(
entry.target.id as SectionId
);


}


});


},


{
rootMargin:"-35% 0px -55% 0px"
}


);





sections.forEach(section=>
observer.observe(section)
);





return()=>{

observer.disconnect();

};


},[]);









function changeLanguage(){


const next =
lang==="en"
?
"fa"
:
"en";



setLang(next);



document.documentElement.dir =
next==="fa"
?
"rtl"
:
"ltr";



setOpen(false);


}









return (


<header

dir={
rtl
?
"rtl"
:
"ltr"
}


className={clsx(


"fixed inset-x-0 top-0 z-50 transition-all duration-500",



scrolled

?

"border-b border-white/10 bg-black/70 backdrop-blur-xl shadow-xl shadow-black/20"

:

"bg-transparent"


)}


>



<div

className="
mx-auto
flex
max-w-7xl
items-center
justify-between
px-6
py-4
"

>


<Logo />







<nav

className="
hidden
items-center
gap-1
md:flex
"

>


{

links.map(link=>(


<Link

key={link.id}

href={link.href}


className={clsx(

"rounded-xl px-4 py-2 text-sm font-medium transition",


active===link.id

?

"bg-cyan-400/10 text-cyan-300"

:

"text-zinc-300 hover:bg-white/5 hover:text-white"


)}

>


{link.name}


</Link>


))

}






<Link

href={`${prefix}/contact`}

className="
ml-2
rounded-xl
border
border-cyan-400/30
bg-cyan-400/10
px-5
py-2
text-sm
font-semibold
text-cyan-300
hover:bg-cyan-400/20
"

>


{t.nav.contact}


</Link>








<Link

href={`${prefix}/login`}

className="
rounded-xl
px-4
py-2
text-sm
text-zinc-300
hover:bg-white/5
"

>


{t.nav.login}


</Link>







<Link

href={`${prefix}/register`}

className="
rounded-xl
bg-cyan-400
px-5
py-2
text-sm
font-bold
text-black
transition
hover:scale-105
"

>


{t.nav.register}


</Link>








<button

onClick={changeLanguage}

aria-label="Change language"


className="
flex
items-center
gap-2
rounded-xl
border
border-white/10
px-4
py-2
text-xs
text-cyan-300
hover:bg-white/5
"

>


<Globe size={15}/>


{
lang==="en"
?
"FA"
:
"EN"
}


</button>




</nav>









<button

onClick={()=>
setOpen(!open)
}


aria-label={open ? "Close menu" : "Open menu"}

aria-expanded={open}

aria-controls="mobile-navigation"


className="
rounded-xl
p-2
text-white
hover:bg-white/10
md:hidden
"

>


{
open
?

<X size={24}/>

:

<Menu size={24}/>

}


</button>





</div>









<AnimatePresence>


{

open && (


<motion.div


initial={{
opacity:0,
height:0
}}


animate={{
opacity:1,
height:"auto"
}}


exit={{
opacity:0,
height:0
}}



className="
overflow-hidden
border-t
border-white/10
bg-black/90
backdrop-blur-xl
md:hidden
"

>


<div

className="
space-y-2
p-6
"

>



{

links.map(link=>(


<Link

key={link.id}

href={link.href}

onClick={()=>
setOpen(false)
}


className="
block
rounded-xl
px-4
py-3
text-zinc-300
hover:bg-white/5
"

>


{link.name}


</Link>


))


}







<Link

href={`${prefix}/contact`}

className="
block
rounded-xl
px-4
py-3
text-cyan-300
"

>


{t.nav.contact}


</Link>







<div

className="
mt-4
flex
gap-3
"

>


<Link

href={`${prefix}/login`}

className="
flex-1
rounded-xl
border
border-white/10
py-3
text-center
"

>


{t.nav.login}


</Link>





<Link

href={`${prefix}/register`}

className="
flex-1
rounded-xl
bg-cyan-400
py-3
text-center
font-bold
text-black
"

>


{t.nav.register}


</Link>



</div>







<button

onClick={changeLanguage}

className="
mt-5
flex
items-center
gap-2
text-cyan-300
"

>


<Globe size={15}/>


{
lang==="en"
?
"FA"
:
"EN"
}


</button>




</div>



</motion.div>


)


}


</AnimatePresence>







</header>


);


}

