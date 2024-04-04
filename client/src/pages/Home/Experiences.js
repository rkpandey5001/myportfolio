import React from 'react';
import SectionTitle from "../../components/SectionTitle";
import {useSelector} from "react-redux";
const Experiences = () => {
  let [selectIndex,setSelectIndex]=React.useState(0);
  const {portfolioData}=useSelector(state=>state.root);
  const {experience}=portfolioData;
  return (
    <div>
      <SectionTitle title="Experience"/>
    <div className='flex py-10 sm:flex-col'>
    <div className='flex flex-col gap-5 border-l-2 border-[#135e4c82]  sm:w-full sm:flex-row sm:text-center'>
        {experience.map((experience,index)=>{
          return (
            <div className='cursor-pointer sm:overflow-x-scroll' onClick={()=>setSelectIndex(index)} key={index}>
            <h1 className={`text-xl px-5  ${selectIndex===index?"text-tertiary border-tertiary border-l-4 -ml-[2px] bg-[#1a7f5a31] py-3":"text-white py-3"}`}>{experience.period}</h1>
            </div>
           )
        })}
      </div>
     <div className='flex flex-col gap-5 w-2/3 m-auto sm:flex-col sm:mt-5 sm:m-0 sm:w-full'>
      <h1 className='text-secondary text-xl'>{experience[selectIndex].title}</h1>
      <h1 className='text-tertiary text-xl'>{experience[selectIndex].company}</h1>
      <p className='text-white text-justify h-auto'>{experience[selectIndex].description}</p>
     </div>
    </div>
    </div>
  )
}

export default Experiences;