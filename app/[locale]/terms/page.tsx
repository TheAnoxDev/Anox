"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileText,
  UserCheck,
  Shield,
  Cpu,
  AlertTriangle,
  Scale,
} from "lucide-react";


export default function TermsPage() {


  const sections = [

    {
      icon: UserCheck,
      title: "Account Usage",
      text:
        "Users are responsible for maintaining accurate account information and protecting their login credentials."
    },


    {
      icon: Cpu,
      title: "Using ANOX Services",
      text:
        "ANOX provides software, AI, cybersecurity, and digital services. Users must use these services responsibly."
    },


    {
      icon: Shield,
      title: "Security & Protection",
      text:
        "Attempting unauthorized access, abusing systems, or harming infrastructure is strictly prohibited."
    },


    {
      icon: FileText,
      title: "Content Ownership",
      text:
        "ANOX products, designs, software, and technologies remain the intellectual property of ANOX."
    },


    {
      icon: AlertTriangle,
      title: "Service Limitations",
      text:
        "Services may change, improve, or become temporarily unavailable for maintenance and upgrades."
    },


    {
      icon: Scale,
      title: "Legal Agreement",
      text:
        "By accessing ANOX, you agree to follow these terms and all applicable laws."
    },


  ];



  return (

    <main
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#04070b]
      px-6
      py-24
      text-white
      "
    >


      {/* Background */}

      <div
        className="
        absolute
        left-1/2
        top-0
        h-[750px]
        w-[750px]
        -translate-x-1/2
        rounded-full
        bg-cyan-500/10
        blur-[180px]
        "
      />



      <div
        className="
        absolute
        inset-0
        opacity-[0.03]
        [background-image:radial-gradient(white_1px,transparent_1px)]
        [background-size:24px_24px]
        "
      />




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
          duration:.7
        }}

        className="
        relative
        mx-auto
        max-w-5xl
        "
      >





        {/* Header */}


        <div
          className="
          text-center
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
            shadow-[0_0_40px_rgba(34,211,238,.25)]
            "
          >

            <FileText
              size={40}
              className="text-cyan-300"
            />

          </div>




          <h1
            className="
            mt-8
            text-5xl
            font-black
            "
          >

            Terms of Service

          </h1>



          <p
            className="
            mx-auto
            mt-4
            max-w-xl
            text-zinc-400
            "
          >

            The rules and conditions for using ANOX products and services.

          </p>


        </div>







        {/* Sections */}


        <div
          className="
          mt-16
          grid
          gap-6
          md:grid-cols-2
          "
        >


          {
            sections.map((item,index)=>{


              const Icon=item.icon;


              return (

                <motion.div


                  key={index}


                  initial={{
                    opacity:0,
                    y:20
                  }}


                  whileInView={{
                    opacity:1,
                    y:0
                  }}


                  transition={{
                    delay:index*.08
                  }}


                  viewport={{
                    once:true
                  }}


                  className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-7
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-cyan-400/30
                  hover:bg-white/[0.08]
                  "


                >


                  <Icon

                    size={28}

                    className="
                    text-cyan-400
                    "

                  />



                  <h2

                    className="
                    mt-5
                    text-xl
                    font-bold
                    "

                  >

                    {item.title}

                  </h2>




                  <p

                    className="
                    mt-3
                    leading-7
                    text-zinc-400
                    "

                  >

                    {item.text}

                  </p>



                </motion.div>


              )


            })
          }



        </div>







        {/* Agreement */}



        <div

          className="
          mt-12
          rounded-3xl
          border
          border-white/10
          bg-black/30
          p-8
          text-center
          "

        >


          <h3
            className="
            text-2xl
            font-bold
            "
          >

            Agreement

          </h3>



          <p

            className="
            mt-3
            text-zinc-400
            leading-7
            "

          >

            By creating an account or using ANOX services,
            you acknowledge that you have read and accepted these terms.

          </p>



          <Link

            href="/contact"

            className="
            mt-6
            inline-flex
            rounded-xl
            bg-cyan-400
            px-6
            py-3
            font-bold
            text-black
            transition
            hover:bg-cyan-300
            "

          >

            Contact Support

          </Link>



        </div>




        <p

          className="
          mt-10
          text-center
          text-sm
          text-zinc-600
          "

        >

          Last updated: August 2026

        </p>




      </motion.div>


    </main>

  );
}