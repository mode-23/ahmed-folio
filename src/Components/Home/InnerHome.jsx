import React from 'react'
import { NavLink } from 'react-router-dom'

const InnerHome = () => {
  return (
    <div className='inner_home'>
          <div className="front_title">
            <h5>Front-end Developper</h5>
          </div>
          <div className="inner_home_title">
               <h1>hello there</h1>
               <h1>my name is</h1>
               <h1>Ahmed</h1>
               <h1>Boukadida</h1>
          </div>
          <div className="short_about">
               <p>I believe anything can be overcome through commitment and hardwork, and i'm always up for learning new stuffs.</p>
               <NavLink to={'/about'} className={"main_link"}>about me</NavLink>
          </div>
    </div>
  )
}

export default InnerHome