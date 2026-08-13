"use client";

import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { Mail, MapPin } from "lucide-react";

import { useLang } from "@/components/LangContext";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

import { cn } from "@/lib/cn";


export default function Contact() {


  const [state, handleSubmit] =
    useForm("xgojlpjq");


  const {
    lang,
    t
  } = useLang();



  const rtl = lang === "fa";



  return (

    <section

      id="contact"

      dir={rtl ? "rtl" : "ltr"}

      className="
      relative
      overflow-hidden
      py-32
      "

    >


      <Container>



        <div

          className={
            cn(
              rtl && "text-right"
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
            transition
            hover:border-cyan-400/30
            lg:p-12
            "

          >



            <form

              onSubmit={handleSubmit}

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


                      <p

                        className="
                        text-sm
                        text-zinc-500
                        "

                      >

                        {t.contact.email}


                      </p>



                      <a

                        href="mailto:anoxdev@gmail.com"

                        className="
                        text-white
                        transition
                        hover:text-cyan-400
                        "

                      >

                        anoxdev@gmail.com


                      </a>


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


                      <p

                        className="
                        text-sm
                        text-zinc-500
                        "

                      >

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


                  placeholder={
                    t.contact.namePlaceholder
                  }



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


                  placeholder={
                    t.contact.emailPlaceholder
                  }



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








                <textarea


                  name="message"


                  required


                  rows={6}



                  placeholder={
                    t.contact.messagePlaceholder
                  }



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







                <Button

                  type="submit"

                  disabled={state.submitting}

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
                  state.succeeded && (


                    <p

                      className="
                      text-green-400
                      "

                    >

                      {t.contact.success}


                    </p>


                  )
                }






              </div>





            </form>





          </GlassCard>





        </motion.div>





      </Container>



    </section>


  );


}