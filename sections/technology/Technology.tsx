"use client";

import { motion } from "framer-motion";

import {
  Brain,
  Shield,
  Code2,
  Cloud,
  Cpu,
  Globe,
} from "lucide-react";

import { useLang } from "@/components/LangContext";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";

import { cn } from "@/lib/cn";



const technologies = [
  {
    icon: Brain,
    key: "ai",
  },

  {
    icon: Shield,
    key: "cyber",
  },

  {
    icon: Code2,
    key: "software",
  },

  {
    icon: Cloud,
    key: "cloud",
  },

  {
    icon: Cpu,
    key: "automation",
  },

  {
    icon: Globe,
    key: "web",
  },
];





export default function Technology() {


  const {
    t,
    lang,
  } = useLang();



  const rtl = lang === "fa";




  return (


    <section

      id="technology"

      dir={rtl ? "rtl" : "ltr"}

      className={cn(
        "relative overflow-hidden py-32",
        rtl && "text-right"
      )}

    >



      <div

        className="
        pointer-events-none
        absolute
        left-1/2
        top-1/2
        -z-10
        h-[420px]
        w-[420px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-cyan-500/10
        blur-[120px]
        "

      />




      <Container>


        <SectionTitle

          badge={t.technology.badge}

          title={t.technology.title}

          description={t.technology.description}

        />





        <motion.div


          initial="hidden"


          whileInView="show"


          viewport={{
            once:true,
            margin:"-100px",
          }}


          variants={{
            hidden:{},

            show:{
              transition:{
                staggerChildren:0.08,
              },
            },

          }}


          className="
          mt-20
          grid
          gap-8
          md:grid-cols-2
          lg:grid-cols-3
          "

        >




          {
            technologies.map((item,index)=>{


              const Icon = item.icon;



              const title =
                t.technology[
                  `${item.key}Title` as keyof typeof t.technology
                ];



              const desc =
                t.technology[
                  `${item.key}Desc` as keyof typeof t.technology
                ];




              return (



                <motion.article


                  key={item.key}


                  variants={{
                    hidden:{
                      opacity:0,
                      y:35,
                    },


                    show:{
                      opacity:1,
                      y:0,

                      transition:{
                        duration:0.5,
                        ease:"easeOut",
                      },

                    },

                  }}


                  whileHover={{
                    y:-8,
                  }}


                >




                  <GlassCard


                    className="
                    group
                    relative
                    h-full
                    overflow-hidden
                    p-8
                    transition-all
                    duration-300
                    hover:border-cyan-400/40
                    hover:bg-white/[0.07]
                    "

                  >




                    <span

                      className="
                      absolute
                      right-6
                      top-4
                      text-6xl
                      font-black
                      text-white/5
                      "

                    >

                      0{index + 1}

                    </span>





                    <div


                      className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-cyan-400/20
                      bg-cyan-400/10
                      "

                    >


                      <Icon

                        size={34}

                        className="
                        text-cyan-300
                        "

                      />


                    </div>







                    <h3


                      className="
                      mt-7
                      text-2xl
                      font-bold
                      text-white
                      transition
                      group-hover:text-cyan-300
                      "

                    >

                      {title}

                    </h3>






                    <p


                      className="
                      mt-4
                      leading-7
                      text-zinc-400
                      "

                    >

                      {desc}

                    </p>





                  </GlassCard>




                </motion.article>


              );


            })

          }




        </motion.div>




      </Container>




    </section>


  );


}