import React, { useEffect, useContext, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { projects_data } from '../../../Data/Data'
import { motion, AnimatePresence } from 'framer-motion'
import { generalContext } from '../../../Context/GeneralContext'

const ProjectReview = () => {
     const elementRef = useRef(null)
     const lastRef = useRef(null)
     const {id} = useParams()
     const navigate = useNavigate()
     const {project, setProject , isOpenProjectFilter} = useContext(generalContext)
     const [isReached, setIsReached] = useState(false)
     useEffect(() => {
          const filter_project = projects_data.filter(item => item.title === id);
          if(!filter_project.length) navigate('/projects')
          isOpenProjectFilter(false)
          setProject(filter_project)
     }, [id])
     const nextIndex = projects_data.findIndex(object => {
          return object.title === id;
        });
     const handleNavigate = () => {
          if(nextIndex + 1 < projects_data.length){
               navigate(`/projects/${projects_data[nextIndex + 1].title}`)
          }else{
               navigate(`/projects/${projects_data[0].title}`)
          }
          elementRef?.current?.scrollTo({ top: 0, behavior: "smooth" })
     }

     const scrollHandler = (e) => {
          if(e.target.scrollTop >= lastRef?.current?.offsetTop){
               setIsReached(true)
          }else{
               setIsReached(false)
          }
     }
     const formatDate = () => {
          let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
          return `${new Date(project?.[0]?.date).getDate()} ${months[new Date(project?.[0]?.date).getMonth()]} ${new Date(project?.[0]?.date).getFullYear()}`
     }
  let r = /^(ftp|http|https):\/\/[^ "]+$/;
  return (
     <AnimatePresence mode='wait'>
     <motion.section key={id} transition={{ duration: 1 }} animate={{opacity: 1 }} initial={{opacity: 0}} exit={{opacity: 0}} className='section project_section'>
     <div className="section_content" ref={elementRef} onScroll={scrollHandler}>
          <main className='main_landing' style={{backgroundImage: `url(${project?.[0]?.image})`}} >
               <div className="main_landing_title" style={{color: project?.[0]?.color}}>
                    <h3>{project?.[0]?.title}</h3>
                    <span>•</span>
                    <h4>{project?.[0]?.description}</h4>
               </div>
          </main>
          <main className='main_screen'>
               <div className="screen_left screen">
                    <h5>{project?.[0]?.title}</h5>
                    <p>
                    {r.test(project?.[0]?.description_project) == true ?
                      <a href={project?.[0]?.description_project} target='_blank'>{project?.[0]?.description_project}</a> 
                      :
                      project?.[0]?.description_project?.split(' ')?.map((word, index) => {
                        if(r.test(word) == true){
                          return <><a href={word} target='_blank'>{word}</a>{' '}</>
                        }else{
                          return word + ' '
                        }
                      })
     }
                    </p>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio mollitia fugit id. Quae, exercitationem architecto mollitia eum nobis fugiat iure voluptatem eos necessitatibus ea et deleniti distinctio magni.</p> */}
                    <div className="df">
                    <a href={project?.[0]?.url} target='_blank' className='main_link'>visit website</a>
                    {project?.[0]?.github && <a href={project?.[0]?.github} target='_blank' className='main_link'>github code</a>}
                    {project?.[0]?.apiLink && <a href={project?.[0]?.apiLink} target='_blank' className='main_link'>API link</a>}
                    </div>
                    <div className="screen_details">
                         <div className="screen_details_box">
                              <span>tools used</span>
                              <div className="df">
                              {project?.[0]?.langs && project?.[0]?.langs?.map((item, index) => 
                              (
                                   <small className='sm_lang' key={index}>{item}</small>
                              ))}
                              </div>
                         </div>
                         <div className="screen_details_box">
                              <span>project type</span>
                              <small>{project?.[0]?.type}</small>
                         </div>
                         <div className="screen_details_box">
                              <span>date created</span>
                              <small>{formatDate()}</small>
                         </div>
                    </div>
               </div>
               <div className="screen_right screen">
                    <img src={project?.[0]?.first_ss} alt={"screen shot of page" + project?.[0]?.title} />
               </div>
          </main>
          {project?.[0]?.pages?.map((item, index) => (
          <main key={index} style={{backgroundColor: item?.page_description?.pageColor ?  item?.page_description?.pageColor : project?.[0]?.accent }} className='page_section'>
               <img src={item?.page_ss} alt="page ss" draggable={false} style={{backgroundColor: item?.page_description?.pageColor ?  item?.page_description?.pageColor : project?.[0]?.accent }} />
               <div className="page_description" style={{color: item?.page_description?.pageTextColor && item?.page_description?.pageTextColor }}>
                    <h2>{item?.page_description?.heading}</h2>
                    <p>{item?.page_description?.body}</p>
               </div>
          </main>
          ))}
          {project?.[0]?.responsive_page && (
          <main className='responsive_page'>
               {project?.[0]?.responsive_page?.map((item, index) => (
               <div className="responsive_element" key={index} style={{backgroundColor : item.bgColor}}>
                    <img src={item.img} alt="responsive image" style={{backgroundColor : item.bgColor}} draggable={false} />
               </div>
               ))}
          </main>
          )}
          <AnimatePresence mode='wait'>
          <motion.main transition={{ duration: 1 }} animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} ref={lastRef} className='last_section' style={{backgroundImage: `url(${nextIndex + 1 < projects_data.length ? projects_data[nextIndex + 1].image : projects_data[0].image})`}}>
               <div className="next_up">
               <h2 className={isReached ? "active" : "not_active"} data-fill-text={`next up — ${nextIndex + 1 < projects_data.length ? projects_data[nextIndex + 1].title : projects_data[0].title}`}>next up — {nextIndex + 1 < projects_data.length ? projects_data[nextIndex + 1].title : projects_data[0].title} </h2>
               <div className="df">
                    <Link to={`/projects/${nextIndex + 1 < projects_data.length ? projects_data[nextIndex + 1].title : projects_data[0].title}`} className={"main_link"}>explore</Link>
               </div>
               </div>
          </motion.main>
          </AnimatePresence>
     </div>
   </motion.section>
   </AnimatePresence>
  )
}

export default ProjectReview