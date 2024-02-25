import React, { useEffect, useState, useRef } from 'react'
import './navigation.css'
import './responsiveNavigation.css'
import NavBox from './NavBox'
import LinkBox from './LinkBox'
import { motion } from 'framer-motion'
import home_pic from '../../Assets/home.png'
import sm_home_pic from '../../Assets/sm_home_pic.png'
import projects_pic from '../../Assets/projects.png'
import sm_projects_pic from '../../Assets/sm_projects_pic.png'
import about_pic from '../../Assets/about.png'
import sm_about_pic from '../../Assets/sm_about_pic.png'
import contact_pic from '../../Assets/contact.png'
import sm_contact_pic from '../../Assets/sm_contact_pic.png'
import alt_folio from '../../Assets/altfolio_img.png'
import sm_alt_folio from '../../Assets/alt_folio_sm.png'

const Navigation = () => {
  const ref = useRef(null)
  const [width, setwidth] = useState(0)
  const [dragging, isDragging] = useState(false)
  useEffect(() => {
   setwidth(ref.current.scrollWidth - ref.current.offsetWidth)
  }, [])
  const nav_data = [
    {
      name: 'home',
      url: '/',
      img: home_pic,
      sm_img: sm_home_pic,
      type: 'navlink',
    },
    {
      name: 'projects',
      url: '/projects',
      img: projects_pic,
      sm_img: sm_projects_pic,
      type: 'navlink',
    },
    {
      name: 'about',
      url: '/about',
      img: about_pic,
      sm_img: sm_about_pic,
      type: 'navlink',
    },
    {
      name: 'contact',
      url: '/contact',
      img: contact_pic,
      sm_img: sm_contact_pic,
      type: 'navlink',
    },
    {
      name: 'Folio V2',
      url: 'https://picsum.photos/300/400',
      img: alt_folio,
      sm_img: sm_alt_folio,
      type: 'href',
    },
  ]
  let menuRef = useRef();
  
  // useEffect(() => {
  //   let clickOutside = (e) => {
  //     console.log(e.target.id);
  //     if(e.target.id === 'menuBtn'){
  //       setMenuState(prev => !prev)
  //     }
  //     else if(e.target.id === 'filterBtn'){
  //       isOpenProjectFilter(prev => !prev)
  //     }
  //     else{
  //     if(!menuRef.current.contains(e.target)){
  //       setMenuState(false)
  //     }
  //     }
  //   }
  //   document.addEventListener('click', clickOutside)
  //   return () => {
  //   document.removeEventListener('click', clickOutside)
  //   };
  // })
  const dragHandler = (e) => {
    isDragging(true)
  }
  const dragEndHandler = (e) => {
    isDragging(false)
  }
  return (
    <motion.div className='navigation' ref={menuRef} >
      <motion.div className="nav_carousel" ref={ref} onDragEnd={dragEndHandler} onDrag={dragHandler} drag='x' dragConstraints={{right: 0, left: -width}}>
        {nav_data.map((item, index) => (
          <React.Fragment key={index}>
          {item.type === 'navlink' ? 
          <NavBox  item={item} dragging={dragging} />
          :
          <LinkBox  item={item} dragging={dragging} />
          }
          </React.Fragment>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Navigation