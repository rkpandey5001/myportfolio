import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {useSelector} from "react-redux";

const Social = () => {
  let [selectIndex,setSelectIndex]=React.useState(0);
  const {portfolioData}=useSelector(state=>state.root);
  const {social}=portfolioData;
  console.log(social);
  return (
    <div>
     <SectionTitle title="Social Media"/>
     <div className='flex sm:flex-col'>
     <div className='w-1/2 h-[300px] sm:w-full'>
     <dotlottie-player src="https://lottie.host/1100b4ca-d58e-4ede-95ee-d12f9a51c8fd/XBCtLSQ9ug.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
     </div>
     <div className='w-1/2 h-[300px] sm:w-full flex flex-col justify-center items-center'>
      <div className='w-1/2 flex justify-between '>
      <a className='social' href={social.facebook}>
      <FaFacebookF size={30}/>
      </a>
      <a className='social' href={social.linkedin}>
      <FaLinkedinIn size={30}/>
      </a> 
      </div>

      <div className='w-1/2 flex justify-between mt-7 '>
      <a className='social' href={social.instagram}>
      <FaInstagram size={30}/>
      </a>
      <a className='social' href={social.git}>
      <FaGithub size={30}/>
      </a>
      </div>
     </div>
     </div>
    </div>
  )
}

export default Social;