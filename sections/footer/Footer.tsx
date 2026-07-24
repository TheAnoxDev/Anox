"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";

import { ArrowUp } from "lucide-react";

import { useTranslation } from "@/hooks/useTranslation";
import Container from "@/components/ui/Container";
import Logo from "@/components/layout/Logo";

import type { Variants } from "framer-motion";


const footerAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};


export default function Footer() {

  const { t } = useTranslation();


  const companyLinks = [
    {
      label: t.footer.about,
      href: "#about",
    },
    {
      label: t.footer.technology,
      href: "#technology",
    },
    {
      label: t.footer.projects,
      href: "#projects",
    },
  ];


  const resourceLinks = [
    {
      label: t.footer.contact,
      href: "#contact",
    },
    {
      label: t.footer.privacy,
      href: "/privacy",
    },
    {
      label: t.footer.terms,
      href: "/terms",
    },
  ];


  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/TheAnoxDev",
      icon: FaGithub,
    },

    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/anox-dev-34933941b",
      icon: FaLinkedin,
    },

    {
      label: "X",
      href: "https://x.com/anox_dev",
      icon: FaXTwitter,
    },

    {
      label: "Telegram",
      href: "https://t.me/anoxdev",
      icon: FaTelegram,
    },

    {
      label: "Instagram",
      href: "https://www.instagram.com/anox.dev",
      icon: FaInstagram,
    },
  ];



  return (

    <footer
      className="
      relative
      overflow-hidden
      border-t
      border-white/10
      py-24
      "
    >


      {/* BACKGROUND GLOW */}

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
        bg-cyan-500/10
        blur-[150px]
        "
      />



      <Container>


        <motion.div

          variants={footerAnimation}

          initial="hidden"

          whileInView="show"

          viewport={{
            once:true,
          }}

          className="
          grid
          gap-14
          lg:grid-cols-4
          "

        >


          {/* BRAND */}

          <div>

            <Logo />


            <p
              className="
              mt-8
              max-w-sm
              leading-8
              text-zinc-400
              "
            >

              {t.footer.description}

            </p>


          </div>




          {/* COMPANY */}

          <div>

            <h3
              className="
              text-lg
              font-bold
              text-white
              "
            >
              {t.footer.company}
            </h3>


            <div
              className="
              mt-6
              flex
              flex-col
              gap-4
              "
            >

              {
                companyLinks.map((item)=>(
                  
                  <Link

                    key={item.href}

                    href={item.href}

                    className="
                    text-zinc-400
                    transition
                    hover:text-cyan-400
                    hover:translate-x-1
                    "

                  >

                    {item.label}

                  </Link>

                ))
              }

            </div>

          </div>





          {/* RESOURCES */}

          <div>

            <h3
              className="
              text-lg
              font-bold
              text-white
              "
            >

              {t.footer.resources}

            </h3>


            <div
              className="
              mt-6
              flex
              flex-col
              gap-4
              "
            >

              {
                resourceLinks.map((item)=>(

                  <Link

                    key={item.href}

                    href={item.href}

                    className="
                    text-zinc-400
                    transition
                    hover:text-cyan-400
                    hover:translate-x-1
                    "

                  >

                    {item.label}

                  </Link>

                ))
              }


            </div>


          </div>






          {/* SOCIAL */}

          <div>


            <h3
              className="
              text-lg
              font-bold
              text-white
              "
            >

              {t.footer.follow}

            </h3>



            <div
              className="
              mt-6
              flex
              flex-col
              gap-4
              "
            >

              {
                socials.map((item)=>{

                  const Icon = item.icon;


                  return (

                    <a

                      key={item.label}

                      href={item.href}

                      target="_blank"

                      rel="noopener noreferrer"

                      className="
                      group
                      flex
                      items-center
                      gap-3
                      text-zinc-400
                      transition
                      hover:text-cyan-400
                      "

                    >

                      <Icon
                        size={20}
                        className="
                        transition
                        group-hover:scale-110
                        "
                      />


                      <span>
                        {item.label}
                      </span>


                    </a>

                  );

                })
              }


            </div>


          </div>


        </motion.div>






        {/* BOTTOM */}


        <div

          className="
          mt-20
          flex
          flex-col
          items-center
          justify-between
          gap-6
          border-t
          border-white/10
          pt-10
          md:flex-row
          "

        >


          <p
            className="
            text-sm
            text-zinc-500
            "
          >

            © {new Date().getFullYear()} ANOX. {t.footer.copyright}

          </p>




          <a

            href="#hero"

            className="
            group
            flex
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-white/5
            px-6
            py-3
            text-sm
            text-white
            backdrop-blur
            transition-all
            hover:-translate-y-1
            hover:border-cyan-400/40
            hover:text-cyan-400
            "

          >

            <ArrowUp
              size={16}
              className="
              transition
              group-hover:-translate-y-1
              "
            />


            {t.footer.backToTop}


          </a>



        </div>



      </Container>


    </footer>

  );
}