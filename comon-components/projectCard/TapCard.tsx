import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';
import { Project } from '../../typings';
import { urlFor } from '../../sanity.cli';


type Props = {
  project: Project
}

const TapCard = ({ project }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <article className="flex flex-col top-26 rounded-lg items-center space-y-7 flex-shrink
     min-h-max
      snap-center
     Obg-[#292929] hover:  opacity-80  cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div layout
        key="modal1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}

        exit={{ opacity: 0, transition: { duration: 1 } }}

        onClick={toggleOpen} >

        <div className="h-24 w-24 relative">
               <h4>{project.title} </h4>
                <img
                  src={urlFor(project?.image).url()}
                  alt="Picture of the author"
                />
              </div>
        {isOpen &&
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 , scale: 1.5,
            }}
           
            onClick={toggleOpen}
            className="flex flex-col rounded-lg items-center
                       min-h-fit
                       min-w-fit
                       bg-[#474242] 
                        hover: opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden"
          >

            <motion.button onClick={() => setIsOpen(true)}>

              
              <motion.h5 className='text-gray-500 text-lg z-100'>{project.summary}</motion.h5>

              <div className='flex flex-row'>
                {project?.technologies.map(technologie => (
                  <img
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