import React from 'react'
import './contact.css'
import './responsiveContact.css'
import { motion, AnimatePresence } from 'framer-motion'
import ContactView from './ContactView'
import ContactDetails from './ContactDetails'

const Contact = () => {
  return (
     <AnimatePresence mode='wait'>
          <motion.section transition={{ duration: 1 }} animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} className='section contact'>
               <ContactView />
               <ContactDetails />
          </motion.section>
     </AnimatePresence>
  )
}

export default Contact