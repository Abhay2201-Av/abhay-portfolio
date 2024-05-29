import React from 'react'
import { HERO_CONTENT } from '../constants'
import Me1 from '../assets/me1.jpg'
import { motion } from "framer-motion"
import resume from "../assets/AbhayResume.pdf"
import { FaEye } from 'react-icons/fa'

function Hero() {
  const Container = (delay) => ({
    hidden: { x: -400, opacity: 0 },
    visible:{
      x:0,
      opacity:1,
      transition: { duration:1.5, delay: delay }
    }
  })
  return (<>
    <div className=' pb-4 lg:mg-35'></div>
    <div className='flex flex-wrap'>
      <div className='w-full lg:w-1/2'>
        <div className=' mx-4 flex flex-col items-center lg:items-start'>
          <motion.h1 
          variants={Container(0)}
          initial="hidden"
          animate="visible"
          className='pb-16 text-6xl tracking-tight lg:mt-16
          lg:text-7xl'>Abhay Chauhan</motion.h1>
          <motion.span 
          variants={Container(0.6)}
          initial="hidden"
          animate="visible"
          className='text-zinc-500 bg-clip-text text-3xl tracking-tight text-transparent'>
          Front End Developer</motion.span>
          <motion.p
          variants={Container(1.2)}
          initial="hidden"
          animate="visible"
           className="my-2 max-w-xl py-6 font-light tracking-tight">{HERO_CONTENT}</motion.p>
           <motion.a 
           variants={Container(1.6)}
          initial="hidden"
          animate="visible"
            href={resume} className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-1 ">
           <FaEye className="w-4 h-4 me-2" /> Resume</motion.a>
        </div>
      </div>
      <div className='size-full mt-5 lg:w-1/2 lg:p-8'>
        <div className='flex justify-center'>
               <motion.img
               whileInView={{opacity:1, x:0}}
               initial={{opacity:0,x:200}} transition={{duration: 0.8, delay: 1.5}}
                src={Me1} alt=""  className="size-3/5  rounded sm:size-full"/>
             {/* <img src={Me1} alt="" /> */}
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero