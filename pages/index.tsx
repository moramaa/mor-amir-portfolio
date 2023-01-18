import { GetStaticProps } from 'next'
import Head from 'next/head'
import About from '../components/About'
import ExperienceAndSkills from '../components/ExperienceAndSkills'
import Header from '../components/Header'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocial } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[]
  skills: Skill[]
  projects: Project[]
  socials:Social[]
}

const  Home  = ({experiences,pageInfo,projects,skills,socials}:Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-400 scrollbar-thumb-amber-200 ">
      <Head>
        <title>Mor Amir Portfolio</title>
      </Head>

      <Header socials={socials} />

      <section id="main" className='snap-center'>
      <Main pageInfo={pageInfo} />
      </section>

      <section id="about" className='snap-start'>
      <About pageInfo={pageInfo}/>
      </section>
      <div className='flex flex-col xl:flex-row '>
          <section id="experience" className='snap-start'>
          <WorkExperience experiences={experiences} />
                </section>
          <section id="Skills" className='snap-start'>
          <Skills skills={skills} />
          </section>
      </div>
      <section id="project" className='snap-start'>
      <Projects  projects={projects}/>
      </section>
    </div>
  )
}
export default Home;

export const getStaticProps: GetStaticProps<Props>= async () => {
  const pageInfo: PageInfo = await fetchPageInfo(); 
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props:
     {
       pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate:100,
  };
  };