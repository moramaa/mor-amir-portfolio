import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import TapCard from '../comon-components/projectCard/TapCard'
import { Project } from '../typings'
import { urlFor } from '../sanity.cli'
import { Carousel, Card, Button } from 'antd'

type Props = {
  projects: Project[]
}
const Projects = ({ projects }: Props) => {

  const contentStyle: React.CSSProperties = {
    height: '300px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  function AppHero() {
    return (
      <div className="heroBlock">
        <h3 className='absolute top-24  uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
        <Carousel draggable >
          {projects.map(item => {
            return (

              <div key={item._id} className="container-fluid">
                <h3>{item.title}</h3>
                <div className="content">
                  <p>{item.summary}</p>
                </div>
                <div className="btnHolder">
                  {/* <Button type="primary" size="large">Live</Button> */}
                  <Button href={item.linkToBuild} size="large"><i className="fas fa-desktop"></i>git</Button>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  }
  return (


    <>

      <h3 className='absolute top-24  uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
      {AppHero()}



    </>


  );
}
export default Projects;
