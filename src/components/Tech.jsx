import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import {  motion } from "framer-motion";

function Tech() {
  const IconVariant = (duration) => ({
    initial: { y: -10 },
    animate:{
      y:[10, -10],
      transition:{
        duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
      }
    }
    
  })
  return (
    <>
      <div className='pb-4'>
        <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.4, delay: 0.5 }}
         className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
             variants={IconVariant(2)}
          initial="initial"
          animate="animate"
            className='rounded-2xl border-4 border-neutral-900 p-4'>
             <FaHtml5 className='text-7xl text-orange-600' />
            </motion.div>
            <motion.div 
            variants={IconVariant(2.5)}
          initial="initial"
          animate="animate"
            className='rounded-2xl border-4 border-neutral-900 p-4'>
             <FaCss3 className='text-7xl text-blue-800' />
            </motion.div>
            <motion.div 
            variants={IconVariant(3)}
          initial="initial"
          animate="animate"
            className='rounded-2xl border-4 border-neutral-900 p-4'>
             <IoLogoJavascript className='text-7xl text-yellow-400'/>
            </motion.div>
            <motion.div 
            variants={IconVariant(3.5)}
          initial="initial"
          animate="animate"
            className='rounded-2xl border-4 border-neutral-900 p-4'>
             <FaBootstrap className='text-7xl text-purple-800' />
            </motion.div>
            <motion.div 
            variants={IconVariant(4)}
          initial="initial"
          animate="animate"
            className='rounded-2xl border-4 border-neutral-900 p-4'>
             <RiTailwindCssFill className='text-7xl text-sky-800' />
            </motion.div>
            <motion.div
            variants={IconVariant(4.5)}
          initial="initial"
          animate="animate"
             className='rounded-2xl border-4 border-neutral-900 p-4'>
             <FaReact className='text-7xl text-blue-500' />
            </motion.div>
        </div>
      </div>
    </>
  )
}

export default Tech