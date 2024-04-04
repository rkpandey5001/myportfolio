import React from 'react';
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";
import { FcBiomass } from "react-icons/fc";
import { FcBusiness } from "react-icons/fc";
import { FcImport } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { FaPhoneAlt } from "react-icons/fa";

const LeftSider = () => {
  return (
    <div className='text-white sm:hidden'>
      <div className='nav p-[10px]'>
      <FcHome size={30} style={{margin:"auto"}}/>
      </div>
      <div className='nav p-[10px]'>
      <FcAbout size={30} style={{margin:"auto",padding:"5px"}}/>
      </div>
      <div className='nav p-[10px]'>
      <FcGraduationCap size={30} style={{margin:"auto",padding:"5px"}}/>
      </div>
      <div className='nav p-[10px]'>
      <FcBiomass size={30} style={{margin:"auto",padding:"5px"}}/>
      </div>
      <div className='nav p-[10px]'>
      <FcBusiness size={30} style={{margin:"auto",padding:"5px"}}/>
      </div>
      <div className='nav p-[10px]'>
      <FcImport size={30} style={{margin:"auto",padding:"5px"}}/>
      </div>
      <div className='nav p-[10px]'>
      <FcGlobe size={30} style={{margin:"auto",padding:"5px"}}/>
      </div>
      <div className='nav p-[10px]'>
      <FaPhoneAlt size={30} style={{margin:"auto",padding:"5px",color:"#54D6BB"}}/>
      </div>
    </div>
  )
}

export default LeftSider;