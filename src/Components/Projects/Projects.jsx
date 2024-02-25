import React, {useState, useContext } from 'react'
import { generalContext } from '../../Context/GeneralContext'
import './project.css'
import './Project/projects.css'
import './responsiveProject.css'
import ProjectBox from './ProjectBox'
import { projects_data } from '../../Data/Data'
import { motion, AnimatePresence } from 'framer-motion'
import Filter from './Filter'

const Projects = () => {
  const  {openProjectFilter , isOpenProjectFilter , filteredData } = useContext(generalContext)
  const [windowDimentions, setWindowDimentions] = useState(0)

  const scrollHandler = (e) => {
    if(window.innerWidth > 1024){
      setWindowDimentions(e.target.scrollTop)
    }
    // console.log(e.target.scrollTop, "scroll top");
    // console.log(e.target.scrollHeight - e.target.clientHeight, "scroll height");
  }

  return (
    <AnimatePresence mode='wait'>
    <motion.section transition={{ duration: 1 }} animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} className={openProjectFilter ?  'section projects active' : 'section projects'} onScroll={scrollHandler} >
      <div className="left_projects project_container">
        <div className="inside_project" style={{transform: `translateY(${windowDimentions * .3}px)`}}>
          {projects_data.slice(0,4).map((item, index) => (
          <ProjectBox key={index} item={item} filteredData={filteredData} />
          ))}
        </div>
        <div  className="inside_project" style={{transform: `translateY(${windowDimentions * .4 }px)`}}>
        {projects_data.slice(4,8).map((item, index) => (
          <ProjectBox key={index} item={item} filteredData={filteredData} />
          ))}
        </div>
      </div>
      <AnimatePresence mode='wait'>
      {openProjectFilter && <Filter />}
      </AnimatePresence>
      <div className="project_filter">
        <AnimatePresence mode='wait'>
        {!openProjectFilter && <motion.button id='filterBtn' transition={{ duration: 0.5 }} animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}}  onClick={() => isOpenProjectFilter(prev => !prev)}>filter projects {filteredData.length ? <>({filteredData? filteredData?.length : ''})</> : <></>}</motion.button>}
        </AnimatePresence>
      </div>
      <div className="right_projects project_container">
      <div className="inside_project" style={{transform: `translateY(${windowDimentions * .32}px)`}} >
        {projects_data.slice(8,12).map((item, index) => (
          <ProjectBox key={index} item={item} filteredData={filteredData} />
          ))}
      </div>
        <div className="inside_project" style={{transform: `translateY(${windowDimentions * .4}px)`}}>
          {projects_data.slice(12,16).map((item, index) => (
          <ProjectBox key={index} item={item} filteredData={filteredData} />
          ))}
        </div>
      </div>
    </motion.section>
    </AnimatePresence>
  )
}

export default Projects