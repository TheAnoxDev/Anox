"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  Database,
  Lock,
  UserCheck,
  Globe,
  Server,
} from "lucide-react";


export default function PrivacyPage() {

  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      text:
        "ANOX may collect basic account information such as name, email address, and authentication data required to provide our services."
    },
    {
      icon: Lock,
      title: "Data Security",
      text:
        "We use modern security practices to protect user information and prevent unauthorized access."
    },
    {
      icon: UserCheck,
      title: "Account Information",
      text:
        "Your account data is used only to provide, improve, and personalize your ANOX experience."
    },
    {
      icon: Server,
      title: "Infrastructure",
      text:
        "ANOX uses secure cloud infrastructure designed for reliability, performance, and protection."
    },
    {
      icon: Globe,
      title: "Third Party Services",
      text:
        "Some features may use external services such as authentication providers or analytics tools."
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
        h-[700px]
        w-[700px]
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

            <ShieldCheck
              size={40}
              className="text-cyan-300"
            />

          </div>



          <h1
            className="
            mt-8
            text-5xl
            font-black
            tracking-tight
            "
          >

            Privacy Policy

          </h1>


          <p
            className="
            mx-auto
            mt-4
            max-w-xl
            text-zinc-400
            "
          >

            How ANOX collects, protects, and manages your information.

          </p>


        </div>





        {/* Cards */}


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
                    delay:index*.1
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
                  transition
                  hover:border-cyan-400/30
                  hover:bg-white/[0.07]
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





        {/* Bottom */}


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

            Your Privacy Matters

          </h3>


          <p
            className="
            mt-3
            text-zinc-400
            "
          >

            By using ANOX services, you agree to this privacy policy.
            We continuously improve our security and privacy standards.

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

            Contact Us

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