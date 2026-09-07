"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

import { cn } from "@/lib/cn";

import { useLang } from "@/components/LangContext";
import { useTranslation } from "@/hooks/useTranslation";



const HeroGlobe = dynamic(
  () => import("@/components/3d/Globe"),
  {
    ssr: false,

    loading: () => (
      <div
        className="
        flex
        aspect-square
        w-[280px]
        items-center
        justify-center
        rounded-full
        border
        border-cyan-400/20
        bg-cyan-400/5
        animate-pulse

        sm:w-[380px]
        lg:w-[460px]
        "
      >

        <div className="text-center">

          <p
            className="
            font-mono
            text-xs
            tracking-[0.35em]
            text-cyan-400
            "
          >
            ANOX CORE
          </p>


          <p
            className="
            mt-3
            text-[10px]
            tracking-widest
            text-zinc-500
            "
          >
            AI NETWORK INITIALIZING
          </p>

        </div>


      </div>
    ),
  }
);





export default function Hero() {


  const { lang } = useLang();

  const { t } = useTranslation();


  const rtl = lang === "fa" || lang === "ar";


  const prefix = `/${lang}`;





  return (

    <section

      id="hero"

data-section

      dir={rtl ? "rtl" : "ltr"}

      className="
      relative
      isolate
      flex
      min-h-screen
      items-center
      overflow-hidden
      py-24
      "

    >



      {/* Background */}

      <div

        aria-hidden

        className="
        pointer-events-none
        absolute
        left-1/2
        top-1/2
        -z-10
        h-[600px]
        w-[600px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-cyan-400/10
        blur-[140px]
        "

      />





      <Container>


        <div

          className="
          grid
          items-center
          gap-16

          lg:grid-cols-[1fr_auto]

          "

        >



          {/* CONTENT */}


          <motion.div

            initial={{
              opacity:0,
              y:40
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:.8
            }}

            className={cn(
              "max-w-4xl",
              rtl && "text-right"
            )}

          >





            {/* Badge */}

            <div

              className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-cyan-400/20
              bg-white/[0.03]
              px-5
              py-2
              backdrop-blur-xl
              "

            >

              <span

                className="
                h-2
                w-2
                rounded-full
                bg-cyan-400
                animate-pulse
                "

              />


              <span

                className="
                text-xs
                font-semibold
                tracking-[0.25em]
                text-cyan-300
                "

              >

                {t.hero.badge}

              </span>


            </div>








            {/* TITLE */}


            <h1

              className="
              mt-8
              text-5xl
              font-black
              leading-[1.05]

              tracking-tight

              text-white

              sm:text-6xl

              lg:text-8xl

              "

            >


              {t.hero.title}



              <span

                className="
                mt-5
                block
                text-2xl

                font-bold

                text-zinc-300

                sm:text-4xl

                "

              >

                {t.hero.subtitle}

              </span>





              <span

                className="
                mt-4
                block
                text-cyan-400
                "

              >

                {t.hero.highlight}


              </span>



            </h1>









            <p

              className="
              mt-8
              max-w-2xl
              text-lg
              leading-9
              text-zinc-400
              "

            >

              {t.hero.description}


            </p>









            {/* BUTTONS */}


            <div

              className="
              mt-10
              flex
              flex-wrap
              gap-5
              "

            >



              <Link

                href={`${prefix}/platform`}

                className="
                rounded-xl
                bg-cyan-400
                px-8
                py-4
                font-black
                text-black

                transition

                hover:bg-cyan-300

                hover:shadow-[0_0_40px_rgba(34,211,238,.4)]

                "

              >

                {t.hero.primary}


              </Link>






              <Link

                href={`${prefix}/architecture`}

                className="
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-8
                py-4
                font-bold
                text-white

                backdrop-blur-xl

                transition

                hover:border-cyan-400/40

                "

              >

                {t.hero.secondary}


              </Link>



            </div>









            {/* STATS */}



            <div

              className="
              mt-14
              grid
              grid-cols-3
              gap-4
              "

            >


              {

                t.hero.stats.map(
                  (stat,index)=>(


                    <motion.div

                      key={index}

                      whileHover={{
                        y:-6
                      }}


                      className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      p-5
                      backdrop-blur-xl
                      "

                    >


                      <div

                        className="
                        text-2xl
                        font-black
                        text-cyan-400
                        "

                      >

                        {stat.value}


                      </div>



                      <p

                        className="
                        mt-2
                        text-xs
                        text-zinc-500
                        "

                      >

                        {stat.label}


                      </p>



                    </motion.div>


                  )

                )

              }



            </div>





          </motion.div>









          {/* GLOBE */}


          <motion.div

            initial={{
              opacity:0,
              scale:.8
            }}

            animate={{
              opacity:1,
              scale:1
            }}

            transition={{
              duration:1
            }}


            className="
            flex
            justify-center
            "

          >

            <HeroGlobe />


          </motion.div>





        </div>


      </Container>


    </section>


  );

}