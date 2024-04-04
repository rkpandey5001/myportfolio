import React from 'react';
import SectionTitle from "../../components/SectionTitle";
import {useSelector} from "react-redux";

const Education = () => {
  let [selectIndex,setSelectIndex]=React.useState(0);
  const {portfolioData}=useSelector(state=>state.root);
  const {education}=portfolioData;
  console.log(portfolioData);
  return (
    <div>
      <SectionTitle title="Education"/>
    <div className='flex py-10 sm:flex-col'>
    <div className='flex flex-col gap-5 border-l-2 border-[#135e4c82]  sm:w-full sm:flex-row sm:text-center'>
        {education.map((edu,index)=>{
          return (
            <div className='cursor-pointer sm:overflow-x-scroll' onClick={()=>setSelectIndex(index)} key={index}>
            <h1 className={`text-xl px-5  ${selectIndex===index?"text-tertiary border-tertiary border-l-4 -ml-[2px] bg-[#1a7f5a31] py-3":"text-white py-3"}`}>{edu.course}</h1>
            </div>
           )
        })}
      </div>
     <div className='flex flex-col gap-5 w-2/3 m-auto sm:flex-col sm:mt-5 sm:m-0 sm:w-full'>
      <h1 className='text-secondary text-xl'>{education[selectIndex].course}</h1>
      <h1 className='text-tertiary text-xl'>{education[selectIndex].year}</h1>
      <p className='text-white text-justify h-auto'>{education[selectIndex].institute}</p>
      <div className='flex justify-between flex-wrap w-1/3 sm:w-full'>{education[selectIndex].subject.map((sub,index)=>{
        return <div key={index} className='text-white bg-secondary px-5 rounded mt-3   text-center'>{sub}</div>
      })}</div>
     </div>
    </div>
    </div>
  )
}

export default Education;