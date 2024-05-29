import React from 'react'
import {  motion } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';

function Contactme() {
  const [state, handleSubmit] = useForm("mnqeykrz");
  if (state.succeeded) {
      return <p className='text-center m-5 '>Thanks for your reply!</p>;
  }
  return (
    <div>
      <section >
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
        <motion.h1
      whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.4, delay: 0.5 }}
       className='my-2  text-center text-4xl'>Contact Me</motion.h1>
        </div>
        <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div className="rounded-lg overflow-hidden"
                whileInView={{opacity:1, x:0}}
               initial={{opacity:0,x:-200}} transition={{duration: 0.8, delay: 1.5}}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74842955027!2d72.41492903300148!3d23.020474101226686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1716822451028!5m2!1sen!2sin"
                        width="100%" height="480"  allowfullscreen="" loading="lazy"></iframe>
                </motion.div>
                <div>
                    <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                    <motion.form 
                whileInView={{opacity:1, x:0}}
               initial={{opacity:0,x:200}} transition={{duration: 0.8, delay: 1.5}}
               onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="name@flowbite.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Your phone no
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="phone no"
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="+91 xxxx xxxx xx"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                      Your message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Leave a comment..."
                      required
                    ></textarea>
                  </div>
                  <button
                  disabled={state.submitting}
                    type="submit"
                    className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-sky-400 sm:w-fit  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Send message
                  </button>
                </motion.form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Contactme