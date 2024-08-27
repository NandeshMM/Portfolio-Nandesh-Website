import React from 'react'
import aboutImg from '../assets/AboutPhoto.jpg'
import { ABOUT_TEXT } from '../constants'
import {motion} from "framer-motion"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className='my-20 text-center te4x'>
           About 
           <span className='text-neutral-500'>Me</span>
           <div className="flex flex-wrap">
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.5 }} className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <img className="rounded-2xl" src={aboutImg} alt="About Image" height={300} width={300}/>
            </div>
            </motion.div>
            <div className="w-full lg:w-1/2">
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:0.5}} className="flex justify-center lg:justify-start">
              <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{ABOUT_TEXT}</p>
            </motion.div>
            </div>
           </div>
        </h2>
    </div>
  )
}

export default About