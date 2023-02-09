import React from 'react'
import { motion } from 'framer-motion'
import TapCard from '../comon-components/projectCard/TapCard'
import { Project } from '../typings'
type Props = {
  projects: Project[]
}

const Projects = ({projects}: Props) => {
  return (
    <motion.div
    initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration:1.5}}
    className="h-screen flex relative overflow-hidden flex-col text-left
     md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
           <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
             Project
           </h3>
           <div className='relative  flex overflow-x-scroll overflow-y-hidden
                    snap-x snap-mandatory z-20
                    scrollbar scrollbar-track-gray-400 scrollbar-thumb-amber-200 scrollbar-thin '>
                      {
                        projects.map(project => (
                          <TapCard key={project._id} project={project}/>
                        ))
                      }
            </div>
            
     </motion.div>
      )
}

export default Projects