import React, {useContext} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { generalContext } from '../../Context/GeneralContext'
const NavBox = ({item , dragging}) => {
  const navigate = useNavigate()
  const location = useLocation()
  const {setMenuState} = useContext(generalContext)
  const handleNavigate = (url) => {
    if(!dragging) {
      if(location.pathname !== url){
        setMenuState(false)
        setTimeout(() => {
          navigate(url)
        }, 500);
      }else{
        setMenuState(false)
      }
    }
  }
    return (
      <div className={dragging ? "nav_box no_drag" : "nav_box"} >
      <span onClick={() => handleNavigate(item.url)} className={location.pathname === item.url ? "main_link active"  :"main_link"}>{item.name}</span>
      <div onClick={() => handleNavigate(item.url)} draggable={false}>
      <img src={window.innerWidth > 700 ? item.img  :  item.sm_img} alt={item.url + "picture"} draggable={false} />
      </div>
      </div>
   )
}

export default NavBox