import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './home.css'
import './responsiveHome.css'
import ShowCase from './ShowCase'
import InnerHome from './InnerHome'

const Home = () => {
     const [windowDimentions, setWindowDimentions] = useState(0)

     const scrollHandler = (e) => {
      console.log(e.target.scrollTop);
       setWindowDimentions(e.target.scrollTop)
     }

     const rootRef = useRef(null)
     useEffect(() => {
          // console.log(rootRef.current.scrollTop);
          rootRef.current.scrollTo({top: -9999})
     }, [])
  return (
    <AnimatePresence mode='wait'>
     <motion.section 
          transition={{ duration: 1 }}
          animate={{opacity: 1}}
          initial={{opacity: 0}}
          exit={{opacity: 0}}
          className='section home' 
          ref={rootRef}
     >
     <ShowCase windowDimentions={windowDimentions} onScroll={scrollHandler} />
     <InnerHome />
    </motion.section>
    </AnimatePresence>
  )
}

export default Home