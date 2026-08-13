"use client";

import Link from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";

import Logo from "./Logo";

import { useLang } from "@/components/LangContext";
import { useTranslation } from "@/hooks/useTranslation";


export default function Navbar() {


  const [open,setOpen] = useState(false);
  const [scrolled,setScrolled] = useState(false);
  const [active,setActive] = useState("hero");


  const {
    lang,
    setLang
  } = useLang();


  const {
    t
  } = useTranslation();



  const prefix = `/${lang}`;



  const rtl = lang === "fa";





  const links = [

    {
      id:"about",
      name:t.nav.about,
      href:`${prefix}#about`
    },


    {
      id:"technology",
      name:t.nav.technology,
      href:`${prefix}/platform`
    },


    {
      id:"projects",
      name:t.nav.projects,
      href:`${prefix}/projects`
    },


  ];





  useEffect(()=>{


    const onScroll = ()=>{


      setScrolled(
        window.scrollY > 30
      );


      const sections=[
        "hero",
        "about",
        "technology",
        "projects",
        "contact"
      ];



      sections.forEach((id)=>{


        const el =
        document.getElementById(id);



        if(!el)
          return;



        const top =
        el.offsetTop - 180;



        const bottom =
        top + el.offsetHeight;



        if(
          window.scrollY >= top &&
          window.scrollY < bottom
        ){

          setActive(id);

        }


      });


    };



    onScroll();


    window.addEventListener(
      "scroll",
      onScroll
    );



    return ()=>{

      window.removeEventListener(
        "scroll",
        onScroll
      );

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

"fixed top-0 left-0 right-0 z-50 transition-all duration-500",

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
links.map((link)=>(


<Link

key={link.id}

href={link.href}


className={clsx(

"rounded-xl px-4 py-2 text-sm font-medium transition-all",

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
transition
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
transition
hover:bg-white/5
hover:text-white
"

>


Login


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


Register


</Link>







<button

onClick={changeLanguage}

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
transition
hover:bg-white/5
"

>


<Globe size={14}/>


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


onClick={()=>setOpen(!open)}


className="
rounded-xl
p-2
text-white
transition
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










{
open && (


<div


className="
border-t
border-white/10
bg-black/90
p-6
backdrop-blur-xl
md:hidden
"


>



{

links.map((link)=>(


<Link

key={link.id}

href={link.href}

onClick={()=>setOpen(false)}

className="
block
rounded-xl
px-4
py-3
text-zinc-300
transition
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
text-zinc-300
"

>


Login


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


Register


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


)

}







</header>


);



}