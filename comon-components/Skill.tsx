import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '../typings'
import { urlFor } from '../sanity.cli'

import { Progress, Space } from 'antd';

type Props = {
  skill: Skill
}

function Skill({ skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">

      <motion.img
        initial={{ x: 10, opacity: 0, }}
        // transition={{ duration: 1 }}
         whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        className="rounded-full border border-gray-500 object-cover
      w-24 h-24 md:w-28 md:h-28 xl:w-30 xl:h-30 filter group-hover:grayscale 
      transition duration-300 ease-in-out"
      />

      <div className=" absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out
       group-hover:bg-white w-24 h-24 md:w-28 md:h-28 xl:w-30 xl:h-30  rounded-full  ">
      <Progress type="dashboard" size={120} percent={skill.progress} >
        
      </Progress>

    
      </div>
    </div>
    
  );
}

export default Skill