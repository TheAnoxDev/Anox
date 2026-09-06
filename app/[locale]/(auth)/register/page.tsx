"use client";

import { useState } from "react";
import Link from "next/link";
import { useLang } from "@/components/LangContext";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import {
  FaGithub,
  FaGoogle,
} from "react-icons/fa";

import { signIn } from "next-auth/react";

import { register } from "@/services/auth";



export default function RegisterPage(){

const { lang } = useLang();
const prefix = `/${lang}`;


const router = useRouter();


const [name,setName] = useState("");
const [email,setEmail] = useState("");

const [password,setPassword] = useState("");
const [confirmPassword,setConfirmPassword] = useState("");


const [showPassword,setShowPassword] = useState(false);
const [showConfirm,setShowConfirm] = useState(false);


const [terms,setTerms] = useState(false);


const [loading,setLoading] = useState(false);
const [error,setError] = useState("");





const passwordStrength =
[
password.length >= 8,
/[A-Z]/.test(password),
/[0-9]/.test(password),
/[^A-Za-z0-9]/.test(password)

].filter(Boolean).length;






async function handleRegister(
e:React.FormEvent
){


e.preventDefault();

setError("");



if(!terms){

setError(
"Please accept the terms and conditions."
);

return;

}



if(password !== confirmPassword){

setError(
"Passwords do not match."
);

return;

}



setLoading(true);



try{


await register({

name,
email,
password

});


router.push(`${prefix}/login`);


}

catch(err){


setError(

err instanceof Error
?
err.message
:
"Registration failed"

);


}

finally{

setLoading(false);

}


}





return (


<main

className="
relative
flex
min-h-screen
items-center
justify-center
overflow-hidden
bg-[#02060b]
px-6
text-white
"

>


<div

className="
absolute
inset-0
bg-[radial-gradient(circle_at_center,rgba(0,230,255,.18),transparent_45%)]
"

/>



<div

className="
absolute
inset-0
opacity-[0.04]
[background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
[background-size:45px_45px]
"

/>





<motion.div


initial={{
opacity:0,
y:40,
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
w-full
max-w-md
rounded-[40px]
border
border-white/10
bg-black/40
p-8
shadow-[0_0_100px_rgba(0,230,255,.15)]
backdrop-blur-3xl
"

>





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
shadow-[0_0_50px_rgba(0,230,255,.35)]
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





{/* NAME */}


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

required

value={name}

onChange={
e=>setName(e.target.value)
}


placeholder="Your name"


className="
w-full
rounded-xl
border
border-white/10
bg-white/[0.03]
py-3
pl-12
pr-4
outline-none
focus:border-cyan-400
"

/>


</div>


</div>









{/* EMAIL */}


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

required

type="email"

value={email}

onChange={
e=>setEmail(e.target.value)
}


placeholder="you@example.com"


className="
w-full
rounded-xl
border
border-white/10
bg-white/[0.03]
py-3
pl-12
pr-4
outline-none
focus:border-cyan-400
"

/>



</div>


</div>









{/* PASSWORD */}



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

required

value={password}

onChange={
e=>setPassword(e.target.value)
}


type={
showPassword
?
"text"
:
"password"
}


placeholder="••••••••"


className="
w-full
rounded-xl
border
border-white/10
bg-white/[0.03]
py-3
pl-12
pr-12
outline-none
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





<div

className="
mt-3
flex
gap-1
"

>

{

[1,2,3,4].map(i=>(


<div

key={i}

className={`
h-1
flex-1
rounded-full

${
passwordStrength >= i
?
"bg-cyan-400"
:
"bg-white/10"
}

`}

/>


))

}

</div>



</div>









{/* CONFIRM PASSWORD */}



<div>


<label

className="
mb-2
block
text-sm
text-zinc-300
"

>

Confirm Password

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


required


value={confirmPassword}


onChange={
e=>setConfirmPassword(e.target.value)
}


type={
showConfirm
?
"text"
:
"password"
}



placeholder="Repeat password"



className="
w-full
rounded-xl
border
border-white/10
bg-white/[0.03]
py-3
pl-12
pr-12
outline-none
focus:border-cyan-400
"

/>





<button

type="button"

onClick={()=>
setShowConfirm(!showConfirm)
}

className="
absolute
right-4
top-1/2
-translate-y-1/2
text-zinc-400
"

>

{

showConfirm

?

<EyeOff size={18}/>

:

<Eye size={18}/>

}

</button>



</div>


</div>







<label

className="
flex
items-center
gap-3
text-sm
text-zinc-400
"

>

<input

type="checkbox"

checked={terms}

onChange={
e=>setTerms(e.target.checked)
}

/>


I agree to ANOX Terms & Privacy


</label>







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






<button


disabled={loading}


className="
flex
w-full
items-center
justify-center
gap-2
rounded-xl
bg-cyan-400
py-4
font-bold
text-black
transition
hover:bg-cyan-300
disabled:opacity-50
"

>


{

loading

?

"Creating Account..."

:

<>

Create Account

<ArrowRight size={18}/>

</>

}



</button>





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

<span className="text-xs text-zinc-500">
OR
</span>

<div className="h-px flex-1 bg-white/10"/>


</div>









<div

className="
grid
grid-cols-2
gap-3
"

>



<button

type="button"

onClick={()=>
signIn(
"github",
{
callbackUrl:`${prefix}/dashboard`
}
)
}


className="
flex
items-center
justify-center
gap-2
rounded-xl
border
border-white/10
bg-white/5
py-3
hover:bg-white/10
"

>

<FaGithub/>

GitHub

</button>







<button

type="button"

onClick={()=>
signIn(
"google",
{
callbackUrl:`${prefix}/dashboard`
}
)
}


className="
flex
items-center
justify-center
gap-2
rounded-xl
border
border-white/10
bg-white/5
py-3
hover:bg-white/10
"

>

<FaGoogle/>

Google

</button>



</div>









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
"

>

Sign In

</Link>


</p>






<div

className="
mt-6
flex
justify-center
items-center
gap-2
text-[10px]
tracking-[.3em]
text-zinc-600
"

>


<ShieldCheck size={14}/>

SECURED BY ANOX IDENTITY


</div>





</motion.div>



</main>


);

}