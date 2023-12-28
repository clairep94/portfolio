"use client";

import React from 'react';
import { motion } from "framer-motion";
import SectionHeading from './SectionHeading';

export default function About() {
  return (

    <motion.section
        // ref={ref}
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
    >

    <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After designing for luxury menswear brands such as{" "}
        <span className="font-medium">Burberry, ACW*</span> and <span className='font-medium'>DOM REBEL</span>
        , I decided to pursue my passion for programming. 
        I self-studied <span className="font-medium">Python</span> and was later awarded the 
        <span className="italic">{" "}Represent Scholarship</span> to attend <span className="font-medium">Maker's Academy</span>, Europe's
        premier coding bootcamp, where I learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        </p>

        <p className="mb-3">
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
            React, Express.js, Node.js, MongoDB, and Flask
        </span>
        . I am also familiar with TypeScript and Next.js. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy making <span className="font-medium">clothes, jewellery and graphic design. </span>
        I also do vocals for London-based shoegaze band{" "}
        <span className="font-medium">Sunnbrella</span>.
      </p>
        
    </motion.section>
  )
}
