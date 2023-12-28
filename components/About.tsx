"use client";

import Image from 'next/image'
import React from 'react'
import { profilePicURL } from '@/lib/data'
import { motion } from 'framer-motion';

export default function About() {

  return (

    // about section: margin-bottom: 7rem; text-align: center; max-width: 50rem; 
      // @MediaCapabilities(min-width: 640px) {margin-bottom:0}
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>


        {/* profile picture + emoji. flexbox spanning entire viewport width, center align */}
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

        {/* intro text: padding-left: 1rem; padding-right: 1rem; margin-top: 1rem; margin-bottom: 2.5rem; font-size: 1.5rem; line-height: 2rem; font-weight: 500; 
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

        


    </section>
  )
}
