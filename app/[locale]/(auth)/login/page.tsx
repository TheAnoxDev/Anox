"use client";

import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { login } from "@/services/auth";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import { signIn } from "next-auth/react";


export default function LoginPage() {


  const router = useRouter();


  const [showPassword,setShowPassword] = useState(false);

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");



  const handleLogin = async(
    e:React.FormEvent
  )=>{


    e.preventDefault();


    setLoading(true);
    setError("");



    try{


      await login({
        email,
        password,
      });


      router.push("/dashboard");



    }catch(err){


      setError(
        err instanceof Error
        ? err.message
        : "Login failed"
      );


    }finally{

      setLoading(false);

    }


  };





return (

<main
className="
relative
flex
min-h-screen
items-center
justify-center
overflow-hidden
bg-[#03070d]
px-6
"
>


{/* Background */}

<div
className="
absolute
inset-0
bg-[radial-gradient(circle_at_center,rgba(0,217,255,.15),transparent_45%)]
"
/>


<div
className="
absolute
inset-0
opacity-[0.05]
[background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
[background-size:40px_40px]
"
/>



<div
className="
absolute
top-[-200px]
left-1/2
h-[600px]
w-[600px]
-translate-x-1/2
rounded-full
bg-cyan-400/10
blur-[160px]
"
/>





<motion.div

initial={{
opacity:0,
y:30,
scale:.96
}}

animate={{
opacity:1,
y:0,
scale:1
}}

transition={{
duration:.6
}}

className="
relative
z-10
w-full
max-w-md
rounded-[36px]
border
border-white/10
bg-black/40
p-8
shadow-[0_0_80px_rgba(0,217,255,.12)]
backdrop-blur-3xl
"

>



{/* Logo */}


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
shadow-[0_0_50px_rgba(0,217,255,.35)]
"
>

<span
className="
text-4xl
font-black
text-cyan-300
"
>
A
</span>


</div>





<h1
className="
mt-8
text-center
text-4xl
font-black
tracking-tight
text-white
"
>

Access ANOX

</h1>




<p
className="
mt-3
text-center
text-sm
text-zinc-400
"
>

Authenticate your identity to enter the AI ecosystem.

</p>





<form
onSubmit={handleLogin}
className="
mt-10
space-y-5
"
>



{/* Email */}


<div>

<label
className="
mb-2
block
text-sm
text-zinc-300
"
>
Email Address
</label>


<div
className="
relative
"
>


<Mail
size={18}
className="
absolute
left-4
top-1/2
-translate-y-1/2
text-cyan-400
"
/>


<input

value={email}

onChange={(e)=>
setEmail(e.target.value)
}

type="email"

required

placeholder=""

className="
w-full
rounded-xl
border
border-white/10
bg-white/[0.03]
py-3
pl-12
pr-4
text-white
outline-none
transition
focus:border-cyan-400
focus:bg-white/[0.05]
"

/>


</div>

</div>






{/* Password */}


<div>

<label
className="
mb-2
block
text-sm
text-zinc-300
"
>
Password
</label>



<div
className="
relative
"
>


<Lock
size={18}
className="
absolute
left-4
top-1/2
-translate-y-1/2
text-cyan-400
"
/>



<input

value={password}

onChange={(e)=>
setPassword(e.target.value)
}

type={
showPassword
?"text"
:"password"
}

required

placeholder=""

className="
w-full
rounded-xl
border
border-white/10
bg-white/[0.03]
py-3
pl-12
pr-12
text-white
outline-none
transition
focus:border-cyan-400
"

/>



<button

type="button"

onClick={()=>
setShowPassword(!showPassword)
}

className="
absolute
right-4
top-1/2
-translate-y-1/2
text-zinc-400
hover:text-cyan-400
"

>

{
showPassword
?
<EyeOff size={18}/>
:
<Eye size={18}/>
}


</button>


</div>


</div>






{
error &&

<p
className="
text-sm
text-red-400
"
>
{error}
</p>

}





<motion.button

whileHover={{
scale:1.02
}}

whileTap={{
scale:.98
}}

disabled={loading}

type="submit"

className="
w-full
rounded-xl
bg-gradient-to-r
from-cyan-400
to-cyan-500
py-3.5
font-bold
text-black
shadow-[0_0_35px_rgba(0,217,255,.35)]
"

>


{
loading
?
"Authenticating..."
:
"Sign In"
}


</motion.button>



</form>






<div
className="
my-8
flex
items-center
gap-4
"
>

<div className="h-px flex-1 bg-white/10"/>


<span
className="
text-xs
tracking-widest
text-zinc-500
"
>
OR
</span>


<div className="h-px flex-1 bg-white/10"/>


</div>






<button

type="button"

onClick={()=>
signIn(
"github",
{
callbackUrl:"/dashboard"
}
)
}


className="
flex
w-full
items-center
justify-center
gap-3
rounded-xl
border
border-white/10
bg-white/[0.03]
py-3
font-semibold
text-white
transition
hover:border-cyan-400/40
hover:bg-cyan-400/5
"

>


<FaGithub size={20}/>


GitHub


</button>






<p
className="
mt-8
text-center
text-sm
text-zinc-400
"
>


Dont have an account?


{" "}


<Link

href="/register"

className="
font-semibold
text-cyan-400
hover:text-cyan-300
"

>

Create one

</Link>


</p>




<p
className="
mt-6
text-center
text-[10px]
tracking-[0.35em]
text-zinc-600
"
>

SECURED BY ANOX IDENTITY SYSTEM

</p>




</motion.div>


</main>

);

}