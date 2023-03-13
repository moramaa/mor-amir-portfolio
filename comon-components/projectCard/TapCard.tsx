import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image';
import { Project } from '../../typings';
import { urlFor } from '../../sanity.cli';
import Card from '../Card';


type Props = {
  projects: Project[]
}

const TapCard = ({ projects }: Props) => {

  const [show, setShow] = useState(false);
  const [info, setinfo] = useState<string>();
  // animation for list
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  //  animation for  popup 
  const variants = {
    visible: {
      scale: 1.5,
      boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
      y: -10,
      x: -100,
      cursor: "pointer",
      transition: { duration: 1, type: "spring" },
    },
    hidden: { scale: 1, opacity: 0 },
  };

  return (
    <section className="container mx-auto mt-5">
      <motion.ul
        style={{
          filter: show ? "blur(1px)" : "none",
        }}
        className="row d-flex p-10 justify-content-center align-items-center
         lg:flex flex-row "
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => {
          return (
            <>
              <motion.li
                layout
                className="col-lg-5 "
                onClick={() => {
                  setShow(!show);
                  setinfo(project._id);
                }}
                variants={item}
              >
          

<a href="#" style={{ borderRadius: "2rem" }} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 style={{ top: "30%", left: "40%",}} className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">{project.subSummary}</p>
</a>

              
                 
              </motion.li>
            </>
          );
        })}
      </motion.ul>

      <AnimatePresence>
        {show && (
          <>
            <motion.div
              // className="block  p-6
              //   w-3/5 md:w-3/6 lg:w-4/12
              //  bg-gray-400 border border-gray-200 rounded-lg shadow hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 "
              style={{
                position: "fixed",
                top: "30%",
                left: "40%",
              }}
              onClick={() => {
                setShow(!show);
              }}
              variants={variants}
              animate={show ? "visible" : "hidden"}
              exit={{ scale: 1, opacity: 0 }}
            >
              {projects
                .filter(item => item._id === info)
                .map(project =>
                  <Card summary={project.summary} title={project.title} image={project.image}/>
                )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
export default TapCard;
