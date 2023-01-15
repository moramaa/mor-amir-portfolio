import React from 'react'
import { Experience as Experiences, Skill } from '../typings'
import Skills from './Skills'
import WorkExperience from './WorkExperience'

type Props = {
  experiences: Experiences[]
  skills: Skill[]
}

const ExperienceAndSkills = ({experiences,skills}: Props) => {
  return (
    <div className='flex flex-col xl:flex-row '>
        <div className="flex-1 " id='experience'><WorkExperience experiences={experiences} /></div>
        <div className="flex-1 " id='skills'><Skills skills={skills} /></div>
    </div>
  )
}

export default ExperienceAndSkills