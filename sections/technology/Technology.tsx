"use client";

import { motion, type Variants } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";

import {
  Brain,
  Shield,
  Code2,
  Cloud,
  Cpu,
  Globe,
} from "lucide-react";


const containerVariants: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};


const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};


const iconClass =
  "text-cyan-400 drop-shadow-[0_0_18px_rgba(34,211,238,0.45)]";


export default function Technology() {

  const { t } = useTranslation();


  const technologies = [
    {
      icon: Brain,
      title: t.technology.aiTitle,
      desc: t.technology.aiDesc,
    },

    {
      icon: Shield,
      title: t.technology.cyberTitle,
      desc: t.technology.cyberDesc,
    },

    {
      icon: Code2,
      title: t.technology.softwareTitle,
      desc: t.technology.softwareDesc,
    },

    {
      icon: Cloud,
      title: t.technology.cloudTitle,
      desc: t.technology.cloudDesc,
    },

    {
      icon: Cpu,
      title: t.technology.automationTitle,
      desc: t.technology.automationDesc,
    },

    {
      icon: Globe,
      title: t.technology.webTitle,
      desc: t.technology.webDesc,
    },
  ];


  return (

    <section
      id="technology"
      className="
      relative
      overflow-hidden
      py-32
      "
    >


      {/* Background Glow */}

      <div
        className="
        absolute
        left-1/2
        top-1/2
        -z-10
        h-[500px]
        w-[500px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-cyan-500/10
        blur-[140px]
        "
      />


      <Container>


        <SectionTitle
          badge="TECHNOLOGY"
          title={t.technology.title ?? "Our Expertise"}
          description={t.technology.description}
        />



        <motion.div

          variants={containerVariants}

          initial="hidden"

          whileInView="show"

          viewport={{
            once:true,
            margin:"-100px"
          }}

          className="
          mt-20
          grid
          gap-8
          md:grid-cols-2
          lg:grid-cols-3
          "

        >


          {technologies.map((item)=>{


            const Icon = item.icon;


            return (

              <motion.article

                key={item.title}

                variants={cardVariants}

              >

                <GlassCard

                  className="
                  group
                  h-full
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-cyan-400/30
                  hover:bg-white/[0.06]
                  "

                >


                  <Icon

                    size={46}

                    className={iconClass}

                  />


                  <h3

                    className="
                    mt-8
                    text-2xl
                    font-bold
                    text-white
                    transition
                    group-hover:text-cyan-300
                    "

                  >

                    {item.title}

                  </h3>



                  <p

                    className="
                    mt-5
                    leading-8
                    text-zinc-400
                    "

                  >

                    {item.desc}

                  </p>


                </GlassCard>


              </motion.article>

            );


          })}


        </motion.div>


      </Container>


    </section>

  );

}