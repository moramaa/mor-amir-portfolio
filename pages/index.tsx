import { FloatButton } from 'antd'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import About from '../components/About'
import ExperienceAndSkills from '../components/ExperienceAndSkills'
import Header from '../components/Header'
import Main from '../components/Main'
import Projects from '../components/Projects'
import SideBar from '../components/SideBar'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocial } from '../utils/fetchSocials'

import { UnorderedListOutlined, CommentOutlined, ArrowUpOutlined, UserOutlined, ShoppingOutlined, CheckSquareOutlined, ProfileOutlined  } from '@ant-design/icons';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[]
  skills: Skill[]
  projects: Project[]
  socials: Social[]
}

const Home = ({ experiences, pageInfo, projects, skills, socials }: Props) => {

  return (
    
<main className="min-h-screen w-full bg-gray-100 text-gray-700" x-data="layout">
      <Header socials={socials} />
      
    <div className="flex">


        <div className="w-full p-4">  
           <Head>
          <title>Mor Amir Portfolio</title>
        </Head>


          <section id="main" className='snap-start'>
            <Main pageInfo={pageInfo} />
          </section>

          <section id="about" className='snap-start'>
            <About pageInfo={pageInfo} />
          </section>
          <section id="experience" className='snap-start'>
            <WorkExperience experiences={experiences} />
          </section>
          <section id="skills" className='snap-start'>
            <Skills skills={skills} />
          </section>
          <section id="project" className='snap-start'>
            <Projects projects={projects} />
          </section>

      <FloatButton.Group
      trigger="click"
      type="primary"
      style={{ right: 24 }}
      icon={<UnorderedListOutlined  />}
    >
      <FloatButton tooltip="main" href="#main" description="main" icon={<ArrowUpOutlined   />} />
      <FloatButton tooltip="about" href="#about" icon={<UserOutlined   />} />
      <FloatButton tooltip="experience" href="#experience" icon={<ShoppingOutlined />} />
      <FloatButton tooltip="skills" href="#skills" icon={<CheckSquareOutlined />} />
      <FloatButton tooltip="project" href="#project" icon={<ProfileOutlined />} />
    </FloatButton.Group>
      </div>
        </div>
</main>
    
  )
}
export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
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
    revalidate: 100,
  };
};