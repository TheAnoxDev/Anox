"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Globe2,
  Brain,
  Shield,
  Code2,
} from "lucide-react";

import { useTranslation } from "@/hooks/useTranslation";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";

import {
  fadeUp,
  fadeUpDelay,
} from "@/lib/motion";


export default function About() {

  const { t } = useTranslation();


  return (

    <section
      id="about"
      className="
      relative
      min-h-screen
      overflow-hidden
      py-32
      "
    >


      {/* Background Glow */}

      <div
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
        bg-cyan-500/10
        blur-[140px]
        "
      />



      <Container>


        <SectionTitle
          badge={t.about.badge}
          title={t.about.title}
          description={t.about.description}
        />



        <div
          className="
          mt-20
          grid
          gap-10
          lg:grid-cols-2
          "
        >



          {/* Vision */}


          <motion.div

            variants={fadeUp}

            initial="hidden"

            whileInView="show"

            viewport={{
              once:true,
              margin:"-100px"
            }}

          >

            <GlassCard
              className="
              h-full
              p-10
              "
            >


              <IconBox>

                <Rocket
                  size={32}
                />

              </IconBox>



              <h3
                className="
                mt-8
                text-3xl
                font-black
                text-white
                "
              >

                {t.about.visionTitle}

              </h3>



              <p
                className="
                mt-6
                leading-8
                text-zinc-400
                "
              >

                {t.about.visionDescription}

              </p>


            </GlassCard>


          </motion.div>





          {/* Mission */}



          <motion.div

            variants={fadeUpDelay(0.15)}

            initial="hidden"

            whileInView="show"

            viewport={{
              once:true,
              margin:"-100px"
            }}

          >


            <GlassCard

              className="
              h-full
              p-10
              "

            >


              <IconBox>

                <Globe2
                  size={32}
                />

              </IconBox>




              <h3

                className="
                mt-8
                text-3xl
                font-black
                text-white
                "

              >

                {t.about.missionTitle}

              </h3>




              <p

                className="
                mt-6
                leading-8
                text-zinc-400
                "

              >

                {t.about.missionDescription}

              </p>




              <div

                className="
                mt-10
                space-y-5
                "

              >


                <Feature

                  icon={<Brain size={18}/>}

                  text={t.about.ai}

                />


                <Feature

                  icon={<Shield size={18}/>}

                  text={t.about.cyber}

                />


                <Feature

                  icon={<Code2 size={18}/>}

                  text={t.about.software}

                />


              </div>



            </GlassCard>


          </motion.div>



        </div>



      </Container>



    </section>

  );

}




function IconBox({
  children,
}:{
  children:React.ReactNode;
}){

  return (

    <div

      className="
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-2xl
      bg-cyan-400/10
      text-cyan-400
      "

    >

      {children}

    </div>

  );

}




function Feature({

  icon,

  text,

}:{

  icon:React.ReactNode;

  text:string;

}){


  return (

    <div

      className="
      flex
      items-center
      gap-4
      text-zinc-300
      "

    >


      <div

        className="
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-xl
        bg-cyan-400/10
        text-cyan-400
        "

      >

        {icon}

      </div>



      <span>

        {text}

      </span>



    </div>

  );

}