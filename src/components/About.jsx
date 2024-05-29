import React from 'react'
import Me from '../assets/me2.jpg'
import { ABOUT_TEXT } from '../constants'
import { motion } from "framer-motion"

function About() {

  return (
    <>
      <div className='pb-4'>
        <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.4, delay: 0.5 }}
         className='my-14 text-center text-4xl'>About Me</motion.h1>
      <div className='flex flex-wrap'>
      <div className='w-full lg:w-1/2 lg:p-8 '>
         <div className='flex item-center justify-center'>
          <motion.img
          whileInView={{opacity:1, x:0}}
               initial={{opacity:0,x:-400}} transition={{duration: 0.8, delay: 1.5}}
           className='size-3/5   rounded' src={Me} alt="" />
         </div>
      </div>
      <div className='flex justify-center lg:justify-start'>
      <motion.p
      whileInView={{opacity:1, x:0}}
               initial={{opacity:0,x:400}} transition={{duration: 0.8, delay: 1.5}}
       className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</motion.p>
      </div>
      </div>
      </div>
    </>
  )
}

export default About