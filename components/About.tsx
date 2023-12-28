"use client";

import Image from 'next/image'
import React from 'react'
import { profilePicURL } from '@/lib/data'
import { motion } from 'framer-motion';
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function About() {

  return (

    // ABOUT SECTION: margin-bottom: 7rem; text-align: center; max-width: 50rem; 
      // @MediaCapabilities(min-width: 640px) {margin-bottom:0}
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>


        {/* PROFILE PICTURE & EMOJI: flexbox spanning entire viewport width, center align */}
        <div className='flex items-center justify-center'>
            <div className='relative'>

                {/* round profile image + border with dropshadow, loads image first as priority */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "tween",
                    duration: 0.2,
                  }}
                >
                  <Image
                  alt="Claire Peng" 
                  src={profilePicURL}
                  width={192}
                  height={192}
                  quality={95}
                  priority={true}
                  className='h-24 w-24 rounded-full
                  object-cover border-[0.35rem] border-white
                  shadow-xl'
                  />
                </motion.div>

                {/* emoji, placed relative to parent div classname relative */}
                <motion.span className="absolute 
                bottom-0 right-0
                text-4xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 125,
                    delay: 0.5,
                  }}
                >
                    👋
                </motion.span>


            </div>


        </div>

        {/* INTRO TEXT: padding-left: 1rem; padding-right: 1rem; margin-top: 1rem; margin-bottom: 2.5rem; font-size: 1.5rem; line-height: 2rem; font-weight: 500; 
          @media (min-width: 640px) { font-size: 2.25rem; line-height: 2.5rem; }*/}
        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hello, I'm Claire.</span>
          {" "}I'm a{" "}
          <span className="font-bold">junior full stack developer</span>
          {" "}and former {" "}            
          <span className="font-bold">fashion designer.</span>
          {" "}I enjoy building <span className="italic">sites & apps</span> with a {" "}
          <span className="font-bold">aesthetic edge.</span>
          {" "} My focus is the{" "}
          <span className="underline">MERN stack & Python/Flask</span>.
        </motion.h1>

        
        {/* CONTACT LINKS: flexbox, pl-1rem, pr-1rem,  gap-0.5rem, justify-contents center, align-items center, font-size 1.125rem, line-heigght 1.75rem, font-weight 500
          smaller devices: column; larger than 640px: row;        @media (min-width: 640px){flex-direct: row};
        */}
        <motion.div 
          className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
        }}>

          <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
            download
          >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>

          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://uk.linkedin.com/in/pengclaire"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/clairep94"
            target="_blank"
          >
            <FaGithubSquare />
          </a>

        </motion.div>

        


    </section>
  )
}
