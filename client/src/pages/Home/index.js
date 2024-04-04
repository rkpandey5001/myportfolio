import React from 'react';
import {NavLink} from "react-router-dom";
import Header from "../../components/Header.js";
import Intro from './intro.js';
import About from './About.js';
import Experiences from './Experiences.js';
import Projects from './Projects.js';
import Courses from './Courses.js';
import Contact from './Contact.js';
import Footer from './Footer.js';
import Social from './Social.js';
import LeftSider from './LeftSider.js';
import Education from './Education.js';
import {useSelector} from "react-redux";

const Home = () => {
  const {loading,portfolioData}=useSelector(state=>state.root);
  return (
    <div>
    <div className="bg-primary text-white flex justify-end">
    <NavLink className="p-3 bg-secondary text-white" to="/admin-login">Admin Login</NavLink>
    </div>
    <div>
    <Header/>
    </div>
    <div className='bg-primary px-2 sm:px-5 md:px-5 flex  justify-between'>
      <div className='w-[50px] h-[70vh]  fixed top-[150px] sm:hidden'>
        <LeftSider/>
      </div>
      {portfolioData && (
      <div className='w-[1410px]  sm:w-full ml-[65px] sm:ml-0'>
      <Intro/>
      <About/>
      <Education/>
      <Experiences/>
      <Projects/>
      <Courses/>
      <Social/>
      <Contact/>
      <Footer/>
      </div>
      )}
    </div>
    </div>
  )
}

export default Home;