import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import TapCard from '../comon-components/projectCard/TapCard'
import { Project } from '../typings'
import { urlFor } from '../sanity.cli'
import { Carousel, Card, Button } from 'antd'
import { GithubOutlined } from '@ant-design/icons';

type Props = {
  projects: Project[]
}
const Projects = ({ projects }: Props) => {


  function AppHero() {
    return (
      <div className="heroBlock">
        <Carousel draggable >
          {projects.map(item => {
            return (
              <Card key={item._id} style={{}} >

                <div key={item._id} className="flex flex-col ">
                  <h3 className=' mt-10 uppercase  text-gray-500 text-2xl '>{item.title}</h3>
                  
                    <p className=' mt-10  text-gray-500 text-1md '>{item.summary}</p>
                      <div className="flex flex-row space-x-2 my-2 "> 
                        {item?.technologies.map(technologie => (
                          <img
                          className=" h-6 md:h-10 md:w-10 rounded-full"
                          src={urlFor(technologie.image).url()}
                          alt="img"
                          />
                          ))}
                    </div>

                        <Button icon={<GithubOutlined />} href={item.linkToBuild} style={{width:'100px'}}> git</Button>
               
                </div>
              </Card>
            );
          })}
        </Carousel>
      </div>
    );
  }
  return (
    <>
<div
      className='flex flex-col relative  text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-2  uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
    </div>
      {AppHero()}
    </>



  );
}
export default Projects;
