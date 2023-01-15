import React from 'react'
import { motion } from 'framer-motion'
import Skill from '../comon-components/Skill'
import {  Skill as SkillType  } from '../typings'
type Props = {
    skills: SkillType[]
}

const Skills = ({skills}: Props) => {
  return (
<div 
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly
     mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
    <div className='grid grid-cols-4 gap-5'>
        {
            skills?.map((skill) => (
                 <Skill  key={skill._id} skill={skill} />
            )
            )
        }
    </div>
           
</div>  )
}

export default Skills