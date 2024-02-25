import React from 'react'
import { projects_data } from '../../Data/Data'
import ProjectBox from '../Projects/ProjectBox'
import { NavLink } from 'react-router-dom'
const ShowCase = ({windowDimentions, onScroll}) => {

  return (
     <div className="project_container show_case" onScroll={onScroll}>
          <div className="inside_project" style={{transform: `translateY(${windowDimentions * .3}px)`}}>
               {projects_data.slice(0,8).map((item, index) => (
                    <ProjectBox key={index} item={item} />
               ))}
               <NavLink to={'/projects'} className='more main_link'>see all my work</NavLink>
          </div>
          <div className="inside_project" style={{transform: `translateY(${windowDimentions * .35}px)`}}>
               {projects_data.slice(8,16).map((item, index) => (
                    <ProjectBox key={index} item={item} />
               ))}
          </div>
     </div>
  )
}

export default ShowCase