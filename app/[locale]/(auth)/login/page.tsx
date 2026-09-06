"use client";

import {
  useState
} from "react";

import {
  signIn
} from "next-auth/react";

import Link from "next/link";

import {
  motion
} from "framer-motion";


import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  Loader2
} from "lucide-react";


import {
  FaGithub,
  FaGoogle
} from "react-icons/fa";





export default function LoginPage(){


const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const [showPassword,setShowPassword] = useState(false);

const [loading,setLoading] = useState(false);

const [oauthLoading,setOauthLoading] = useState("");

const [error,setError] = useState("");





async function handleLogin(
e:React.FormEvent
){

e.preventDefault();


if(loading) return;


setLoading(true);
setError("");



try{


const result = await signIn(
"credentials",
{
email,
password,
redirect:false
}
);



if(result?.error){

throw new Error(
"Invalid email or password"
);

}



window.location.href="/dashboard";



}catch(err){


setError(
err instanceof Error
?
err.message
:
"Authentication failed"
);



}finally{

setLoading(false);

}


}







async function socialLogin(
provider:string
){


setOauthLoading(provider);


await signIn(
provider,
{
callbackUrl:"/dashboard"
}
);


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
bg-[#03070d]
px-6
"

>


{/* Background */}


<div

className="
absolute
inset-0
bg-[radial-gradient(circle_at_center,rgba(0,217,255,.18),transparent_45%)]
"

/>



<div

className="
absolute
inset-0
opacity-[0.04]
[background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
[background-size:40px_40px]
"

/>







<motion.div


initial={{
opacity:0,
y:40,
scale:.95
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
rounded-[40px]
border
border-white/10
bg-black/40
p-8
shadow-[0_0_100px_rgba(0,217,255,.15)]
backdrop-blur-3xl
"

>





{/* Logo */}


<div

className="
mx-auto
flex
h-24
w-24
items-center
justify-center
rounded-[30px]
border
border-cyan-400/30
bg-cyan-400/10
shadow-[0_0_60px_rgba(34,211,238,.35)]
"

>


<span

className="
text-5xl
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

Enter your identity to access ANOX ecosystem

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

type="email"

required

value={email}

onChange={
e=>setEmail(e.target.value)
}


className="
w-full
rounded-xl
border
border-white/10
bg-white/[0.04]
py-3
pl-12
pr-4
text-white
outline-none
transition
focus:border-cyan-400
"

placeholder="you@example.com"

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


type={
showPassword
?
"text"
:
"password"
}


required


value={password}


onChange={
e=>setPassword(e.target.value)
}



className="
w-full
rounded-xl
border
border-white/10
bg-white/[0.04]
py-3
pl-12
pr-12
text-white
outline-none
focus:border-cyan-400
"


placeholder="••••••••"



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







<div

className="
flex
justify-end
"

>


<Link

href="/forgot-password"

className="
text-sm
text-cyan-400
hover:text-cyan-300
"

>

Forgot password?

</Link>



</div>








{
error &&

<p

className="
rounded-xl
bg-red-500/10
p-3
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
scale:.97
}}


disabled={loading}


className="
flex
w-full
items-center
justify-center
gap-2
rounded-xl
bg-gradient-to-r
from-cyan-400
to-cyan-500
py-4
font-bold
text-black
"

>


{
loading
?
<>
<Loader2 className="animate-spin"/>
Authenticating...
</>
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









{/* Github */}


<button


disabled={!!oauthLoading}


onClick={()=>
socialLogin("github")
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
bg-white/5
py-3
font-semibold
text-white
transition
hover:border-cyan-400/50
"

>


{
oauthLoading==="github"
?
<Loader2 className="animate-spin"/>
:
<FaGithub/>
}


Continue with GitHub


</button>








{/* Google */}



<button


disabled={!!oauthLoading}


onClick={()=>
socialLogin("google")
}



className="
mt-4
flex
w-full
items-center
justify-center
gap-3
rounded-xl
border
border-white/10
bg-white/5
py-3
font-semibold
text-white
transition
hover:border-cyan-400/50
"

>


{
oauthLoading==="google"
?
<Loader2 className="animate-spin"/>
:
<FaGoogle/>
}



Continue with Google


</button>








<p

className="
mt-8
text-center
text-sm
text-zinc-400
"

>


Don&apos;t have an account?


{" "}


<Link

href="/register"

className="
font-semibold
text-cyan-400
"

>

Create one

</Link>


</p>








<div

className="
mt-6
flex
items-center
justify-center
gap-2
text-[10px]
tracking-[0.35em]
text-zinc-600
"

>

<ShieldCheck size={12}/>

SECURED BY ANOX IDENTITY SYSTEM


</div>






</motion.div>


</main>


);

}