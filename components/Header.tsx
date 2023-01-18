import { motion } from 'framer-motion'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { Social } from '../typings'

type Props = {
  socials: Social[]
}

function Header({socials}: Props) {
  return (
      <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div
          initial={{x: -500, opacity:0, scale:0.5}} animate={{x:0, opacity:1, scale:1}} transition={{duration:1.5}}
          className='flex flex-row space-x-5 '>
            {socials.map((social) =>(
            <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }} whileTap={{scale: 0.8, rotate: -360, borderRadius: "100%" }}  transition={{duration:1}}>
                
                      <SocialIcon
                        key={social._id}
                        url={social.url}
                        bgColor="gray"
                        fgColor='transparent'
                        />
            </motion.div>
              ))}
           
        </motion.div>

      
      <motion.div
          initial={{x: 500, opacity:0, scale:0.5}} animate={{x:0, opacity:1, scale:1}} transition={{duration:1.5}} 
          className='flex flex-row items-center text-gray-300 cursor-pointer space-x-5 pl-5'>
        
            <motion.p className='flex-col md:inline-flex text-sm text-gray-400'
                animate={{ scale: [ 0.7, 1,1, 0.7 ],}} transition={{duration: 2,ease: "easeInOut", times: [0, 1, 1], repeat: Infinity, repeatDelay: 2}}         >
              Get In Touch
            </motion.p>
            <p className='text-sm text-gray-400'>
              054-7932141</p>
      </motion.div>
    </header>

  )
}

export default Header