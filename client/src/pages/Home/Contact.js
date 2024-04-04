import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import {useSelector} from "react-redux";

const Contact = () => {
  const {portfolioData}=useSelector(state=>state.root);
  const {contact}=portfolioData;
 console.log(contact);
  return (
    <div>
      <SectionTitle title="Say Hello"/>
      <div className='flex sm:flex-col pt-5 pb-5 '>
      <div className='w-1/2 h-[300px] sm:w-full mt-7'>
        <dotlottie-player src="https://lottie.host/221cad2f-5a96-4dc1-81cf-1ea9529a8ea9/j58E29Ly1B.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
       </div>
       
       <div className='flex justify-center'>
       <div  className='mt-20 ml-20 sm:ml-0 sm:w-full sm:mt-10'>
       <h1 className='text-white'>{'{'}</h1>
       {Object.keys(contact).map((key)=>{
        return <h1 className='ml-5'>
        <span className='text-tertiary'>{key} : </span>
        <span className='text-white'>{contact[key]}</span>
        </h1>
       })}
       <h1 className='text-white'>{'}'}</h1>
       </div>
       </div>
    
      </div>
    </div>
  )
}

export default Contact;