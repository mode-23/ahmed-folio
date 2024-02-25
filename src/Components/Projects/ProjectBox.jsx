import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProjectBox = ({item , filteredData}) => {
  const navigate = useNavigate()
  return (
     <div onClick={() => navigate(`/projects/${item.title}`)} className={filteredData?.length && !filteredData?.includes(item.type) ? "project_box active" : "project_box"} style={{backgroundImage: `url(${item?.image})`}}>
        <AnimatePresence mode='wait'>
      {filteredData?.length && !filteredData?.includes(item.type) && <motion.div animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}}  className="blurred_box" />}
        </AnimatePresence>

      <div className="project_type">
        <ul>
        <li className={item.color === "#000" ? "dark" : "light"}>{item.type}</li>
        </ul>
      </div>
      <img src={item?.image} alt={item.title} />
      <div className="project_box_info" style={{color: item.color}}>
        <h3 >{item.title}</h3>
        <>
        <p>•</p>
        <span>{item?.description?.slice(0,32)}...</span>
        </>
      </div>
     </div>
  )
}

export default ProjectBox