import React from 'react'

const LinkBox = ({item , dragging}) => {

  return (
    <div className={dragging ?  'nav_box  no_drag' : 'nav_box '}>
       <a href={item.url} target='_blank'  className={"main_link"}>{item.name}</a>
      <a href={item.url} target='_blank' draggable={false}>
      <img src={window.innerWidth > 700 ? item.img  :  item.sm_img} alt={item.url + "picture"} draggable={false} />
      </a>
    </div>
  )
}

export default LinkBox