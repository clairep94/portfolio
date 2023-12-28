"use client";

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Header() {
  return (

    <header className='z-[999] relative'>

        {/* rounded div, centered to page with left-1/2 -translate-x-1/2 */}
        {/* framer motion overwrites the transform, so need x: "-50%". Added delay to make animation visible */}
        <motion.div className='fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full 
        rounded-none border border-white border-opacity-40 bg-white bg-opacity-80
        shadow-lg shadow-black/[0.03] backdrop-blur-[0.05rem]
        sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full'
            initial={{y: -100, x: "-50%", opacity: 0.5}}
            animate={{y: 0, x: "-50%", opacity: 1, transition: { delay: 0.2 }}}
        ></motion.div>


    </header>

  )
}
