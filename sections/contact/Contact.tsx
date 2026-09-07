"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  MapPin,
} from "lucide-react";


import { useLang } from "@/components/LangContext";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

import { cn } from "@/lib/cn";





export default function Contact(){

const [submitting, setSubmitting] = useState(false);
const [succeeded, setSucceeded] = useState(false);
const [error, setError] = useState("");

const {
lang,
t
}=useLang();



const rtl =
lang === "fa" || lang === "ar";

async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  if (submitting) return;

  setSubmitting(true);
  setSucceeded(false);
  setError("");

  try {
    const form = event.currentTarget;
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    });
    const result = await response.json();

    if (!response.ok) throw new Error(result.message || "Unable to send message.");
    setSucceeded(true);
    form.reset();
  } catch (submitError) {
    setError(
      submitError instanceof Error
        ? submitError.message
        : "Unable to send message."
    );
  } finally {
    setSubmitting(false);
  }
}



return (


<section

id="contact"

data-section

dir={
rtl
?
"rtl"
:
"ltr"
}


className="
relative
overflow-hidden
py-24
md:py-32
"


>


<Container>



<div

className={
cn(
rtl &&
"text-right"
)
}

>


<SectionTitle

badge={t.contact.badge}

title={t.contact.title}

description={t.contact.description}

/>


</div>







<motion.div

initial={{
opacity:0,
y:20
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
duration:.5
}}


className="mt-16"

>


<GlassCard

className="
p-6
md:p-10
lg:p-12
"


>


<form

onSubmit={handleSubmit}

className="
grid
gap-10
lg:grid-cols-2
"


>







<div>


<h3

className="
text-3xl
font-black
"

>

{t.contact.conversation}

</h3>




<p

className="
mt-5
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





<ContactItem

icon={
<Mail size={22}/>
}

title={
t.contact.email
}

value="anoxdev@gmail.com"

link="mailto:anoxdev@gmail.com"

/>





<ContactItem

icon={
<MapPin size={22}/>
}

title={
t.contact.location
}

value={
t.contact.locationValue
}

/>




</div>



</div>









<div

className="
space-y-5
"

>



<Input

name="name"

placeholder={
t.contact.namePlaceholder
}

/>




<Input

name="email"

type="email"

placeholder={
t.contact.emailPlaceholder
}

/>





<textarea

name="message"

required

rows={6}

placeholder={
t.contact.messagePlaceholder
}
aria-label={t.contact.messagePlaceholder}

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












<Button

type="submit"

disabled={submitting}

>

{submitting ? t.contact.sending : t.contact.send}


</Button>







{
succeeded &&

<p

className="
text-green-400
"

>

{
t.contact.success
}

</p>

}

{error && (
  <p className="text-sm text-red-400" role="alert">
    {error}
  </p>
)}



</div>






</form>




</GlassCard>



</motion.div>



</Container>


</section>


);


}









function ContactItem({

icon,
title,
value,
link

}:{

icon:React.ReactNode;

title:string;

value:string;

link?:string;

}){


return (


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

{icon}

</div>





<div>


<p

className="
text-sm
text-zinc-500
"

>

{title}

</p>



{
link ?


<a

href={link}

className="
text-white
transition
hover:text-cyan-400
"

>

{value}

</a>


:

<p className="text-white">

{value}

</p>


}



</div>




</div>


);


}







function Input({

name,

type="text",

placeholder

}:{

name:string;

type?:string;

placeholder:string;

}){


return (


<input


name={name}


type={type}


required


placeholder={placeholder}



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


);


}