import React from 'react'
import {  FaInstagram } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SOCIALMEDIALINKS } from '../constants';


function Navbar() {
  return (
    <nav className=' mb-5 flex items-center justify-between py-6'>
       <div className='m-6 flex flex-shrink-0 items-center text-4xl'>
        <p className='mx-2 w-10'>AC</p>
       </div>
       <div className='m-8  flex items-center justify-center gap-4 text-2xl cursor-pointer '>
       
      <a href={SOCIALMEDIALINKS.instalink}> <FaInstagram /> </a>
       <a href={SOCIALMEDIALINKS.linkdinlink}><FaLinkedin /></a>
       <a href={SOCIALMEDIALINKS.githublink}> <FaGithub /></a>
        </div>
    </nav>
  )
}

export default Navbar