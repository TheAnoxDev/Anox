"use client";

import { useRouter } from "next/navigation";
import { register } from "@/services/auth";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User
} from "lucide-react";


export default function RegisterPage(){


const router = useRouter();


const [showPassword,setShowPassword] = useState(false);


const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");


const [loading,setLoading] = useState(false);
const [error,setError] = useState("");




const handleRegister = async(
e:React.FormEvent
)=>{


e.preventDefault();


setLoading(true);
setError("");



try{


await register({
name,
email,
password,
});


setName("");
setEmail("");
setPassword("");


router.push("/login");



}catch(err){


setError(
err instanceof Error
? err.message
: "Register failed"
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

Create ANOX Account

</h1>




<p
className="
mt-3
text-center
text-sm
text-zinc-400
"
>

Join the next generation AI ecosystem.

</p>







<form

onSubmit={handleRegister}

className="
mt-10
space-y-5
"

>




{/* Name */}


<div>


<label
className="
mb-2
block
text-sm
text-zinc-300
"
>
Full Name
</label>



<div
className="
relative
"
>


<User
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

value={name}

onChange={(e)=>
setName(e.target.value)
}

required

type="text"

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
"

/>


</div>


</div>






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



<div className="relative">


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

required

type="email"

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



<div className="relative">


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


required


type={
showPassword
?
"text"
:
"password"
}


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
text-center
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
"Creating..."
:
"Create Account"
}


</motion.button>





</form>






<p

className="
mt-8
text-center
text-sm
text-zinc-400
"

>


Already have an account?


{" "}


<Link

href="/login"

className="
font-semibold
text-cyan-400
hover:text-cyan-300
"

>

Sign In

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