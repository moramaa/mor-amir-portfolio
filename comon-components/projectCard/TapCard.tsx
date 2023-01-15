import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';
import { Project } from '../../typings';
import { urlFor } from '../../sanity.cli';


type Props = {
  project:Project
}

const TapCard = ({project}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

    return (
      <article
     className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[500px] 
              xl:w-[600px] snap-center bg-[#404040] p-10 hover:opacity-100 opacity-40 cursor-pointer
              transition-opacity duration-200 overflow-hidden'>
        <motion.div layout  
          key="modal1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={toggleOpen} >
             
                <h5>{project.title} </h5>
                {isOpen && 
                  <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                  transition={{ duration: 0.2, delay: 0.15 }}
                  style={{ pointerEvents: "auto" }}
                  className="flex flex-col rounded-lg items-center
                      h-[300px] w-[300px] md:h-[300px] w-[400px] xl:h-[500px] w-[600px]
                      p-10 bg-[#251f1f]
                        hover: opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden" 
                  > 
               
                      <motion.button onClick={() => setIsOpen(true)}>
                      
                        <div className="h-6 w-9 relative"> 
                            <Image
                              src={urlFor(project?.image).url()}
                              alt="Picture of the author"
                            />
                        </div> 
                      <motion.h5 className='text-gray-500 text-2xl'>{project.summary}</motion.h5>

                            <div className='flex flex-row'>
                            {project?.technologies.map(technologie =>(
                                <Image
                                  className="h-10 w-10 rounded-full"
                                  src={urlFor(technologie.image).url()}
                                  alt=""
                                />
                               ))}
                            </div>
                    
                     </motion.button>
                </motion.div>
             }
        </motion.div>
        </article>
    );
    }
    
    // function Item() {
    //   const [isOpen, setIsOpen] = useState(false);
    //   const toggleOpen = () => setIsOpen(!isOpen);
    //   const variants = {
    //     visible: { opacity: 1 },
    //     hidden: { opacity: 0 },
    //   }
    //   return (      
    //           <motion.div layout  
    //             key="modal1"
    //           initial={{ opacity: 0 }}
    //           animate={{ opacity: 1 }}
             
    //           style={{ height: isOpen ? "h-[2px]  md:h-[30px] xl:h-[5px]" : "h-[20px]  md:h-[30px] xl:h-[50px]",width: isOpen ? "150px" : "500px",backgroundColor:'blue',borderRadius: 10,zIndex:1  }}

    //           onClick={toggleOpen} >
    //                 <AnimatePresence>
    //                 <Image 
    //                   className="border border-green-500 object-cover 
    //                   h-[2px] w-[2px] md:w-[30px] md:h-[30px] xl:w-[5px] xl:h-[5px]
    //                   filter group-hover:grayscale transition duration-300 ease-in-out rounded-full "
    //                   src={react} alt="" />
    //                   <h5>samery of the project </h5>
    //                   {!isOpen && 
    //                 <motion.button onClick={() => setIsOpen(true)}>
    //                 <motion.h5 className=''>more bla bla bla bala bal bal bal  fxgxfg gfdfg </motion.h5>
    //                 </motion.button>

    //                }</AnimatePresence>
    //           </motion.div>
    // );
    // }
    
    // function Content() {
    // return (
    //             <motion.div  
    //             layout
    //             key="modal"
    //             initial={{ opacity: 0, borderRadius: 10,  }}
    //             animate={{ opacity: 1, }}
    //             style={{ height:"300px",width:'300px',z:1,alignContent:'start', backgroundColor:'whitesmoke' }}
    //             exit={{ opacity: 0 }}

    //             >
    //               <motion.h5 className=''>more abut the project more abut the project more abut the project</motion.h5>
    //             </motion.div>
    // );
    // }

export default TapCard