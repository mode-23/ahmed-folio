import React from 'react'
import './about.css'
import './responsiveAbout.css'
import { motion, AnimatePresence } from 'framer-motion'
import altImg from '../../Assets/pexels-pixabay-159862(1).jpg'
const About = () => {
  return (
    <AnimatePresence mode='wait'>
         <motion.section 
         transition={{ duration: 1 }} 
         animate={{opacity: 1}} 
         initial={{opacity: 0}} 
         exit={{opacity: 0}} 
         className='section about'>
          <div className="about_container">
            <header className="intro_about">
              <h2>about</h2>
              <p>I'm Ahmed Boukadida, <br /> a <span>React</span> FrontEnd<br />  Web Developper,</p>
              <br />
            <small>
             I'm constantly driven by my curiosity and eagerness to stay at the forefront of the ever-evolving world of web development.
              With a keen eye for design and a knack for problem-solving, I strive to create beautiful and intuitive interfaces that captivate users.
            </small>
            <br />
            <br />
            <small>
            When I'm not immersed in coding and creating delightful user interfaces, you can often find me on the football field, chasing after the ball and enjoying the thrill of the game. Football is not just a hobby for me; it's a way to unwind, stay fit, and build camaraderie with fellow teammates. The teamwork, strategy, and determination required in football perfectly align with the skills I bring to my development projects.
            </small>
            <br />
            <br />
            <small>
            With a strong foundation in HTML, CSS, JavaScript , I'm well-versed in modern frontend frameworks such as React. I'm constantly honing my skills and exploring new technologies to deliver seamless and interactive web experiences. I take pride in writing clean, scalable code and working collaboratively with designers and backend developers to bring ideas to life.
            </small>
            <br />
            <br />
            <small>
            I thrive in dynamic and fast-paced environments, and I'm always eager to take on new challenges that push me to learn and grow. As a frontend developer, I'm passionate about creating impactful digital experiences that not only meet but exceed user expectations. If you're looking for a dedicated and versatile frontend developer who can kick-start your project and score with stunning UI, look no further
            </small>
            <br />
            </header>
            <div className="profile_pic">
            <img src={altImg} alt="my profile" />
            </div>
          </div>
          <div className="about_body">
          <h3>experience</h3>
          <ul>
            <li><span>— Bachelor degree in Computer Science </span> <span>Jul, 2021</span></li>
            <li><span>— +2 years in Front-end Web Development </span> <span>Feb, 2022</span></li>
            <li><span>— Student intern in Dreaxlmaier company and i built them a <a href="https://gestion-stage-b803d.web.app/" target='_blank'>react web application</a> that they're using till now.</span> <span>Jan, 2023</span></li>
            {/* <li><span>— Student intern in Dreaxlamier company for the second time and i built them another react web application but a bigger one.</span> <span>Jan, 2024</span></li> */}
            {/* <li><span>— Diploma in Computer Science</span> <span>Jul, 2024</span></li> */}
          </ul>
          <h3>skills</h3>
          <ul>
            <li><span>— Decent English communication </span></li>
            <li><span>— React.js </span></li>
            {/* <li><span>— Redux Toolkit </span></li> */}
            <li><span>— HTML </span></li>
            <li><span>— CSS </span></li>
            {/* <li><span>— SASS </span></li> */}
            <li><span>— JavaScript </span></li>
            <li><span>— Firebase </span></li>
            <li><span>— Familiar with Git & Github </span></li>
          </ul>
          </div>
         </motion.section>
    </AnimatePresence>
 )
}

export default About