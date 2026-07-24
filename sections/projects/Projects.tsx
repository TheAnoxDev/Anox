"use client";

import {
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";

import { useTranslation } from "@/hooks/useTranslation";


/* ======================================================
   TYPES
====================================================== */

type Project = {
  id: string;
  title: string;
  desc: string;
  image: string;
  tags: string[];
};




/* ======================================================
   ANIMATION
====================================================== */

const containerAnimation: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};


const cardAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* ======================================================
   COMPONENT
====================================================== */

export default function Projects() {

  const { t } = useTranslation();


  const [selected, setSelected] =
    useState<Project | null>(null);



  /* =========================
      PROJECT DATA
  ========================= */

  const projects = useMemo<Project[]>(
    () => [
      {
        id: "intelligence",

        title:
          t.projects.intelligence.title,

        desc:
          t.projects.intelligence.desc,

        image:
          "/images/projects/anox-intelligence.jpg",

        tags: [
          "AI",
          "Next.js",
          "Machine Learning",
        ],
      },


      {
        id: "shield",

        title:
          t.projects.shield.title,

        desc:
          t.projects.shield.desc,

        image:
          "/images/projects/anox-shield.jpg",

        tags: [
          "Security",
          "Cloud",
          "Zero Trust",
        ],
      },


      {
        id: "future",

        title:
          t.projects.future.title,

        desc:
          t.projects.future.desc,

        image:
          "/images/projects/anox-future-systems.jpg",

        tags: [
          "AI",
          "IoT",
          "Robotics",
        ],
      },

    ],
    [t]
  );



  /* =========================
      ESC CLOSE + SCROLL LOCK
  ========================= */

  useEffect(() => {

    if (!selected)
      return;


    const close = (e: KeyboardEvent) => {

      if (e.key === "Escape")
        setSelected(null);

    };


    document.addEventListener(
      "keydown",
      close
    );


    document.body.style.overflow =
      "hidden";


    return () => {

      document.removeEventListener(
        "keydown",
        close
      );


      document.body.style.overflow =
        "";

    };


  }, [selected]);



  const closeModal = useCallback(() => {

    setSelected(null);

  }, []);



  return (

    <section
      id="projects"
      className="
      relative
      overflow-hidden
      py-32
      "
    >


      {/* =========================
          BACKGROUND
      ========================= */}

      <div
        className="
        absolute
        inset-0
        -z-10
        "
      >

        <div
          className="
          absolute
          left-20
          top-20
          h-72
          w-72
          rounded-full
          bg-cyan-500/10
          blur-3xl
          "
        />


        <div
          className="
          absolute
          right-20
          bottom-20
          h-72
          w-72
          rounded-full
          bg-violet-500/10
          blur-3xl
          "
        />

      </div>



      {/* =========================
          TITLE
      ========================= */}

      <motion.div

        initial={{
          opacity:0,
          y:30
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        viewport={{
          once:true
        }}

        transition={{
          duration:.6
        }}

        className="
        mx-auto
        mb-16
        max-w-3xl
        px-6
        text-center
        "

      >

        <h2
          className="
          text-4xl
          font-black
          text-white
          sm:text-5xl
          "
        >

          {t.projects.title}

        </h2>


        <p
          className="
          mt-4
          text-zinc-400
          "
        >

          {t.projects.subtitle}

        </p>

      </motion.div>





      {/* =========================
          GRID
      ========================= */}


      <motion.div

        variants={containerAnimation}

        initial="hidden"

        whileInView="show"

        viewport={{
          once:true,
          margin:"-100px"
        }}

        className="
        mx-auto
        grid
        max-w-7xl
        gap-10
        px-6
        lg:grid-cols-3
        "

      >


        {projects.map((project)=> (

          <motion.article

            key={project.id}

            variants={cardAnimation}

            onClick={() =>
              setSelected(project)
            }

            whileHover={{
              y:-8
            }}

            className="
            group
            cursor-pointer
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            transition
            "

          >


            {/* IMAGE */}

            <div
              className="
              relative
              h-64
              overflow-hidden
              "
            >

              <Image

                src={project.image}

                alt={project.title}

                fill

                sizes="
                (max-width:768px) 100vw,
                33vw
                "

                className="
                object-cover
                transition
                duration-700
                group-hover:scale-110
                "

              />


              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black
                via-black/30
                to-transparent
                "
              />

            </div>




            {/* CONTENT */}

            <div
              className="
              p-6
              "
            >

              <div
                className="
                flex
                flex-wrap
                gap-2
                "
              >

                {project.tags.map(tag=>(

                  <span

                    key={tag}

                    className="
                    rounded-full
                    bg-cyan-500/10
                    px-3
                    py-1
                    text-xs
                    text-cyan-300
                    "

                  >

                    {tag}

                  </span>

                ))}

              </div>



              <h3
                className="
                mt-5
                text-2xl
                font-bold
                text-white
                "
              >

                {project.title}

              </h3>


              <p
                className="
                mt-3
                text-sm
                leading-6
                text-zinc-400
                "
              >

                {project.desc}

              </p>


            </div>


          </motion.article>

        ))}


      </motion.div>






      {/* =========================
          MODAL
      ========================= */}


      <AnimatePresence>


        {selected && (

          <motion.div

            className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            p-6
            "

            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

            exit={{
              opacity:0
            }}

          >


            <button

              aria-label="Close"

              onClick={closeModal}

              className="
              absolute
              inset-0
              bg-black/80
              backdrop-blur-xl
              "

            />



            <motion.div

              initial={{
                scale:.85,
                opacity:0
              }}

              animate={{
                scale:1,
                opacity:1
              }}

              exit={{
                scale:.85,
                opacity:0
              }}

              className="
              relative
              z-10
              max-h-[90vh]
              w-full
              max-w-5xl
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-[#080b12]
              "

            >


              <div
                className="
                relative
                h-80
                "
              >

                <Image

                  src={selected.image}

                  alt={selected.title}

                  fill

                  className="
                  object-cover
                  "

                />

              </div>



              <div
                className="
                p-8
                "
              >

                <h2
                  className="
                  text-3xl
                  font-black
                  text-white
                  "
                >

                  {selected.title}

                </h2>


                <p
                  className="
                  mt-4
                  text-zinc-400
                  "
                >

                  {selected.desc}

                </p>



                <button

                  onClick={closeModal}

                  className="
                  mt-8
                  rounded-xl
                  bg-cyan-500
                  px-6
                  py-3
                  font-bold
                  text-black
                  transition
                  hover:bg-cyan-400
                  "

                >

                  {t.projects.close}

                </button>


              </div>


            </motion.div>


          </motion.div>

        )}


      </AnimatePresence>


    </section>

  );
}