import React from 'react'
import SectionTitle from '../../components/SectionTitle';
import {useSelector} from "react-redux";

const About = () => {
  const {portfolioData}=useSelector(state=>state.root);
  const {about}=portfolioData;
  const {lottieURL,description1,description2,skills}=about;
  return (
    <div className='mt-3 sm:pt-28'>
      <SectionTitle title='About'/>
      <div className='flex w-full items-center sm:flex-col sm:text-justify'>
       <div className='h-[70vh] w-1/2 sm:w-full sm:h-[50vh]'>
         <dotlottie-player src={lottieURL || ''} background="transparent" speed="1" loop autoplay></dotlottie-player>
       </div>
       <div className='flex flex-col gap-5 w-1/2 sm:w-full'>
         <p className='text-white'>
           {description1 || ''}
         </p>
         <p className='text-white'>
           {description2 || ''}
         </p>
       </div>
      </div>

    <div className='py-5'>
        <h1 className="text-tertiary text-2xl sm:text-1xl">
          Here are a few technologies I've been working with recently
        </h1>
      <div className='flex flex-wrap gap-10 mt-5'>
      {skills.map((ele,index)=>{
        return (
          <div className=' border border-tertiary px-5 py-3  sm:w-32 sm:px-0 sm:text-center'>
          <h1 className='text-tertiary'>{ele}</h1>
          </div>
        )
      }) || ''}
      </div>
    </div>
         
      
    </div>
  )
}

export default About;