import React from 'react'
import { PROJECTS } from '../constants'
import { FaEye } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa';
import { motion } from "framer-motion"

function Project() {
  return (
    <div className='pb-4'>
      <motion.h1 
      whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      className='my-20 text-center text-4xl'>Project</motion.h1>
      <div>
        {
          PROJECTS.map((project,index)=>{
            return <div
           key={index}
           className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
               <motion.img
               whileInView={{opacity:1, x:0}}
               initial={{opacity:0,x:-100}} transition={{duration: 0.8, delay: 1.5}}
                src={project.image} width={150} height={150} alt={project.title} className='mb-6 rounded' />
            </div>
            <motion.div 
            whileInView={{opacity:1, x:0}}
               initial={{opacity:0,x:200}} transition={{duration: 0.8, delay: 1.5}}
            className='w-full max-w-xl lg:w-3/4'>
             <div className='flex gap-4'> <h6 className='mb-2 font-semibold'>{project.title}</h6> 
             <span className=' text-neutral-500 text-2xl cursor-pointer'><a href={project.link}><FaEye /></a></span>
             <span className=' text-white text-xl cursor-pointer'><a href={project.gitlink}><FaGithub /></a></span> </div>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white"
                    >
                      {tech}
                    </span>
                  ))}
            </motion.div>
           </div>
          })
        }
      </div>
    </div>
  )
}

export default Project