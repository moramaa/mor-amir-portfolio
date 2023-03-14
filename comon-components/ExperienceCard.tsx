import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity.cli'


type Props = {
  experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col top-26 rounded-lg items-center space-y-7 flex-shrink w-[300px] md:w-[500px] xl:w-[900px] snap-center
     Obg-[#292929] hover:  opacity-40  cursor-pointer  transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0, }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-20 rounded-full xl:w-32 xl:h-32 object-cover
      object-center"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-xl xl:text-4xl font-light">{experience.company}</h4>
        <p className="font-bold text-lg xl:text-2xl mt-1">{experience.jobTitle}</p>
        <div className="flex space-x-2 my-2">
          {experience?.technologies.map(technologie => (
            <img
              className="h-6 md:h-10 md:w-10 rounded-full"
              src={urlFor(technologie.image).url()}
              alt="img"
            />
          ))}
        </div>
        {/* <p className="uppercase py-3 text-gray-300">
          {new Date(experience.dateStarted).toDateString()}-{" "} {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p> */}

        <ul className="list-disc space-y-4 ml-5 text-sm xl:text-lg">
          {experience.points.map((point, i) =>
          (
            <li key={i}>{point} </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard