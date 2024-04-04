import React from 'react'
import SectionTitle from '../../components/SectionTitle';
import {useSelector} from "react-redux";
const Courses = () => {
  let [selectIndex,setSelectIndex]=React.useState(0);
  const {portfolioData}=useSelector(state=>state.root);
  const {course}=portfolioData;
  return (
    <div>
      <SectionTitle title="courses"/>
      <div className='flex py-10 sm:flex-col'>
    <div className='flex flex-col gap-5 border-l-2 border-[#135e4c82] w-1/6 sm:w-full sm:flex-row sm:text-center sm:overflow-x-scroll'>
        {course.map((course,index)=>{
          return (
            <div className='cursor-pointer ' onClick={()=>setSelectIndex(index)} key={index}>
            <h1 className={`text-xl px-5  ${selectIndex===index?"text-tertiary border-tertiary border-l-4 -ml-[2px] bg-[#1a7f5a31] py-3":"text-white py-3"}`}>{course.course}</h1>
            </div>
           )
        })}
      </div>
     <div className='sm:mt-5 sm:m-0 sm:w-full gap-5 m-auto w-2/3 justify-between'>
     <div className="flex sm:flex-col justify-between">
     <div className='flex flex-col pr-2 sm:pr-0'>
      <h1 className='text-tertiary text-xl'>{course[selectIndex].course}</h1>
      <p className='text-white '>{course[selectIndex].duration}</p>
      <p className='text-secondary '>{course[selectIndex].institute}</p>
      <p className='text-white text-justify'>{course[selectIndex].description}</p>
      <p className='text-white flex justify-between mt-3 flex-wrap'>{course[selectIndex].skills.map((item,index)=>{
        return <div className='text-black bg-tertiary pl-2 pr-2 mt-1 mb-2 border-2 border-black' key={index}>{item}</div>
      })}</p>
      <a href={course[selectIndex].link} className='border-2 border-tertiary text-white px-5 py-2 rounded mt-5 sm:w-full text-center w-[110px]'>
      View
      </a>
     </div>
     <div>
     <img className='sm:h-[35vh] w-[25vw]  min-h-[28vh] sm:w-[150vw] mt-3' src={course[selectIndex].images} alt="image"/>
     </div>
     </div>

     </div>
    </div>
    </div>
  )
}

export default Courses;