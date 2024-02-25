import React, { useContext, useRef } from 'react'
import { generalContext } from '../../Context/GeneralContext'
import menuImg from '../../Assets/download-removebg-preview.png'
import closeImg from '../../Assets/download_1_-removebg-preview.png'
import applyImg from '../../Assets/download_2_-removebg-preview.png'
import { useNavigate, useParams } from 'react-router-dom'

const Menu = () => {
     const {id} = useParams()
     const navigate = useNavigate()
     let  { project , setMenuState, openProjectFilter , isOpenProjectFilter , setFilteredData, menuState  } = useContext(generalContext)
     const handleMenu = () => {
          if(id){
               navigate('/projects')
          }else{
               if(openProjectFilter){
                    isOpenProjectFilter(false)
               }
               else{
                    setMenuState(prev => !prev)
               }
          }
     }
     const handleProjectMenuColor = () => {
          if(!id){
               return 
          }else{
               return project?.[0]?.accent
          }
     }
     return (
     <div className='menuHolder'>
          {!id ?
          <>
          {!openProjectFilter ? 
                    <>
                    {menuState ?
                    <img src={closeImg} alt="open menu image" />
                         :
                    <img src={menuImg} alt="close menu image" />
                    }
                    </>
                    :
                    <>
                    <img src={applyImg} alt="apply menu image" />
                    </>
          }
          </>
          :
          <>
                    <img src={closeImg} alt="open menu image" />
          </>
          }

          <button id='menuBtn' className={openProjectFilter ? 'menuBtn openFilter' : 'menuBtn'} onClick={handleMenu} style={{backgroundColor : handleProjectMenuColor()}}>
          </button>
     </div>
     )
}

export default Menu