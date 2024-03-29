import React from 'react'
import ExperienceCard from '../comon-components/ExperienceCard'
import { motion } from 'framer-motion'
import { Experience } from '../typings'

type Props = {
  experiences: Experience[]
}
const WorkExperience = ({experiences}: Props) => {
  return (
    <motion.div
     initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration:1.5}}
     className="h-screen flex relative overflow-hidden flex-col text-left
      md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
            <h3 className='absolute top-24 uppercase tracking-[18px] text-gray-500 text-2xl'>
              Experience
            </h3>
            <div className=' flex space-x-5 p-5 snap-x snap-mandatory '>
                {experiences.map(experience => (
                    <ExperienceCard key={experience._id} experience={experience} />
                  ))} 
             </div>
      </motion.div>
    );
}

export default WorkExperience