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
              <Card  >

                <div key={item._id} className="container-fluid">
                  <h3>{item.title}</h3>
                  <div className="content">
                    <p>{item.summary}</p>
                    <Button icon={<GithubOutlined />} href={item.linkToBuild} size="large"> git</Button>
                  </div>
               
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
