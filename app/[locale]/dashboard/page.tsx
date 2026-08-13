"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Brain,
  Shield,
  Cloud,
  Settings,
  Folder,
  Cpu,
  Zap,
  Menu,
} from "lucide-react";

export default function DashboardPage() {

  const stats = [
    {
      title:"AI Systems",
      value:"12",
      icon:<Brain size={22}/>,
    },
    {
      title:"Projects",
      value:"24",
      icon:<Folder size={22}/>,
    },
    {
      title:"Security",
      value:"98%",
      icon:<Shield size={22}/>,
    },
    {
      title:"API Requests",
      value:"1.2M",
      icon:<Activity size={22}/>,
    },
  ];


  const menu = [
    {
      name:"Overview",
      icon:<Cpu size={18}/>
    },
    {
      name:"AI Engine",
      icon:<Brain size={18}/>
    },
    {
      name:"Security",
      icon:<Shield size={18}/>
    },
    {
      name:"Cloud",
      icon:<Cloud size={18}/>
    },
    {
      name:"Projects",
      icon:<Folder size={18}/>
    },
    {
      name:"Settings",
      icon:<Settings size={18}/>
    },
  ];


return (

<main className="
min-h-screen
bg-[#03070c]
text-white
overflow-hidden
">


{/* Background */}

<div className="
absolute
inset-0
bg-[radial-gradient(circle_at_top,#00eaff20,transparent_40%)]
"/>


<div className="
relative
flex
min-h-screen
">


{/* Sidebar */}

<aside className="
hidden
md:flex
w-72
border-r
border-white/10
bg-white/5
backdrop-blur-xl
flex-col
p-6
">


<div className="
text-3xl
font-black
tracking-widest
text-cyan-400
">

ANOX

</div>


<p className="
mt-2
text-xs
text-zinc-500
">

AI Infrastructure Panel

</p>



<nav className="
mt-10
space-y-2
">


{
menu.map((item,index)=>(

<motion.button

key={item.name}

whileHover={{
x:5
}}

className={`
flex
items-center
gap-3
w-full
rounded-xl
px-4
py-3
text-sm
transition

${
index===0
?
"bg-cyan-400/10 text-cyan-300"
:
"text-zinc-400 hover:bg-white/5 hover:text-white"
}

`}

>

{item.icon}

{item.name}


</motion.button>

))
}


</nav>



</aside>





{/* Main */}

<section className="
flex-1
p-6
md:p-10
">



{/* Top */}

<div className="
flex
items-center
justify-between
">


<div>


<h1 className="
text-4xl
font-black
">

Welcome Back 👋

</h1>


<p className="
mt-2
text-zinc-400
">

Control your ANOX ecosystem

</p>


</div>


<button className="
rounded-xl
border
border-white/10
bg-white/5
p-3
md:hidden
">

<Menu/>

</button>


</div>






{/* Hero */}

<motion.div

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

className="
mt-10
rounded-3xl
border
border-cyan-400/20
bg-gradient-to-br
from-cyan-400/10
to-transparent
p-8
backdrop-blur-xl
"

>


<div className="
flex
items-center
gap-4
">


<div className="
rounded-2xl
bg-cyan-400/20
p-4
text-cyan-300
">

<Zap/>

</div>


<div>

<h2 className="
text-2xl
font-bold
">

ANOX Core Online

</h2>

<p className="
text-zinc-400
">

All systems operational

</p>

</div>


</div>



</motion.div>






{/* Stats */}


<div className="
mt-8
grid
gap-5
sm:grid-cols-2
xl:grid-cols-4
">


{
stats.map((item)=>(


<motion.div

whileHover={{
y:-5
}}

key={item.title}

className="
rounded-2xl
border
border-white/10
bg-white/5
p-6
backdrop-blur-xl
"


>


<div className="
text-cyan-400
">

{item.icon}

</div>


<h3 className="
mt-5
text-sm
text-zinc-400
">

{item.title}

</h3>


<p className="
mt-2
text-4xl
font-black
">

{item.value}

</p>



</motion.div>


))

}


</div>






{/* System Status */}

<div className="
mt-8
rounded-3xl
border
border-white/10
bg-white/5
p-6
">


<h2 className="
text-xl
font-bold
">

System Status

</h2>


<div className="
mt-5
space-y-4
">


{
[
"AI Engine",
"Security Layer",
"Cloud Network",
"Database"
].map((x)=>(


<div
key={x}
className="
flex
items-center
justify-between
rounded-xl
bg-black/30
px-5
py-4
">


<span className="
text-zinc-300
">

{x}

</span>


<span className="
text-sm
text-cyan-400
">

ONLINE

</span>


</div>


))
}


</div>


</div>



</section>



</div>


</main>

);

}