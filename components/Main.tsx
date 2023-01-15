import React from 'react'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity.cli'
import Image from 'next/image'

type Props = {pageInfo:PageInfo}

const Main = ({pageInfo}: Props) => {
  return (
    <div 
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-4xl text-center'>{pageInfo.name}</h3>
        <h4 className='absolute top-24 mt-8 uppercase tracking-[10px] text-gray-500 text-3xl text-center'>{pageInfo.role} </h4>
       
        <motion.div
        className='mt-40 md:mt-10'
            initial={{x: 0, opacity:0, scale:0.5}} whileInView={{ opacity:1, x:0}} transition={{duration:1.2}} 
          >
              <img
                className=' md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover'   
                src={urlFor(pageInfo?.profilePic).url()}
                alt="profile"
                />
        </motion.div>
        <div className='flex flex-col xl:flex-row xl:space-x-5'>


        <Link href="#about">
        <button className='text-gray-500 text-2xl border-opacity-10'>About</button>
        </Link>

          <Link href="#experience">
          <button className='text-gray-500 text-2xl border-opacity-10'>Experience</button>
          </Link>
          <Link href="#skills">
          <button className='text-gray-500 text-2xl border-opacity-10'>Skills</button>
          </Link>
        <Link href="#project">
        <button className='text-gray-500 text-2xl border-opacity-10'>Project</button>
        </Link>
      </div>

     </div> 
    
     )
}

export default Main