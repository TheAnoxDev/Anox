"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

import {
  Mail,
  MapPin,
} from "lucide-react";


export default function Contact() {

  const [state, handleSubmit] = useForm("xgojlpjq");

  const { t } = useTranslation();


  return (

<section
id="contact"
className="
relative
overflow-hidden
py-32
"
>


<Container>


<SectionTitle

badge={t.contact.badge}

title={t.contact.title}

description={t.contact.description}

/>



<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true,
amount:.2
}}

transition={{
duration:.7
}}

className="mt-20"

>


<GlassCard

className="
p-8
lg:p-12
hover:border-cyan-400/30
transition
"

>


<form

onSubmit={handleSubmit}

>


<div

className="
grid
gap-12
lg:grid-cols-2
"

>



{/* INFO */}

<div>


<h3

className="
text-3xl
font-bold
text-white
"

>

{t.contact.conversation}

</h3>



<p

className="
mt-6
leading-8
text-zinc-400
"

>

{t.contact.conversationDescription}

</p>




<div

className="
mt-10
space-y-6
"

>


<div

className="
flex
items-center
gap-4
"

>

<div

className="
rounded-xl
bg-cyan-400/10
p-3
text-cyan-400
"

>

<Mail size={22}/>

</div>


<div>

<p className="text-sm text-zinc-500">

{t.contact.email}

</p>


<p className="text-white">

anoxdev@gmail.com

</p>


</div>


</div>




<div

className="
flex
items-center
gap-4
"

>

<div

className="
rounded-xl
bg-cyan-400/10
p-3
text-cyan-400
"

>

<MapPin size={22}/>

</div>


<div>

<p className="text-sm text-zinc-500">

{t.contact.location}

</p>


<p className="text-white">

{t.contact.locationValue}

</p>


</div>


</div>


</div>



</div>





{/* FORM */}


<div

className="
space-y-5
"

>


<input

name="name"

type="text"

required

placeholder={t.contact.namePlaceholder}

className="
w-full
rounded-2xl
border
border-white/10
bg-white/5
px-6
py-4
text-white
outline-none
transition
focus:border-cyan-400
"

/>



<input

name="email"

type="email"

required

placeholder={t.contact.emailPlaceholder}

className="
w-full
rounded-2xl
border
border-white/10
bg-white/5
px-6
py-4
text-white
outline-none
transition
focus:border-cyan-400
"

/>



<ValidationError

prefix="Email"

field="email"

errors={state.errors}

/>




<textarea


name="message"

required

rows={6}

placeholder={t.contact.messagePlaceholder}

className="
w-full
resize-none
rounded-2xl
border
border-white/10
bg-white/5
px-6
py-4
text-white
outline-none
transition
focus:border-cyan-400
"

/>



<ValidationError

prefix="Message"

field="message"

errors={state.errors}

/>





<Button

type="submit"

disabled={state.submitting}

className="
w-full
"

>


{
state.submitting

?

t.contact.sending

:

t.contact.send

}


</Button>




{
state.succeeded &&

<motion.p

initial={{
opacity:0,
y:10
}}

animate={{
opacity:1,
y:0
}}

className="
text-center
text-green-400
"

>

{t.contact.success}

</motion.p>

}



</div>



</div>


</form>


</GlassCard>



</motion.div>





<div

className="
pointer-events-none
absolute
bottom-0
left-1/2
h-[450px]
w-[450px]
-translate-x-1/2
rounded-full
bg-cyan-400/10
blur-[150px]
"

/>


</Container>


</section>

  );
}