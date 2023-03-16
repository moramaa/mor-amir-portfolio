import React from 'react'
import Skill from '../comon-components/Skill'
import { Skill as SkillType } from '../typings'

type Props = {
    skills: SkillType[]
}

const Skills = ({ skills }: Props) => {
    return (
        <div
                className='flex flex-col relative  text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            {/* className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"> */}
            <h3 className='absolute top-0  uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
            <div className=' pt-10 md:p-10' >
                <div className='grid grid-cols-4 gap-4  '>
                    {
                        skills?.map((skill) => (
                            <Skill key={skill._id} skill={skill} />
                        )
                        )
                    }
                </div>

            </div>

        </div>
    )
}

export default Skills