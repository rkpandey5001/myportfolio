import React from 'react';
import {useSelector} from "react-redux";

const Intro = () => {
  const {loading,portfolioData}=useSelector(state=>state.root);
  const {intro}=portfolioData;
  const {firstName,lastName,welcomeText,caption,description}=intro;
  return (
    <div className='h-[60vh] md:h-[170vh] sm:h-[80vh] bg-primary flex  items-start justify-center gap-8 py-10 md:gap-0 md:py-0 md:pt-0 mt-20 sm:flex-col sm:pt-[180px]' >
    <div className='w-1/3 h-[50vh] flex justify-center items-center sm:w-full'>
    <img src='image/rahul.jpg' alt='image' className='rounded-full sm:h-[205px] sm:w-[205px] h-[300px] w-[300px]'/>
    </div>
    
    <div className='flex flex-col w-2/3 sm:w-full sm:mt-5'>
    <h1 className='text-white sm:mt-0 mt-8 md:-mt-[120px]'>{welcomeText || ''}</h1>
      <h1 className='text-7xl sm:text-3xl md:text-5xl text-secondary font-semibold md:mt-4 mt-3'>{firstName || ''} {lastName || ''}</h1>
      <h1 className='text-6xl sm:text-2xl  md:text-3xl text-white font-semibold md:mt-4 mt-3'>
      {caption || ''}
      </h1>
      <p className=' text-white w-3/4 flex sm:text-justify sm:w-full md:mt-4 mt-3'>
      {description || ''}
      </p>
      <button className='border-2 border-tertiary sm:mt-[40px] text-white px-10 py-3 rounded md:mt-5 mt-7'>Get Started</button>
    </div>
    </div>
  )
}

export default Intro;