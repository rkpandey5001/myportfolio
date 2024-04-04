import React from 'react'
import SectionTitle from '../../components/SectionTitle';
import {useSelector} from "react-redux";

const Projects = () => {
  let [selectIndex,setSelectIndex]=React.useState(0);
  const {portfolioData}=useSelector(state=>state.root);
  const {project}=portfolioData;
 console.log(project);
  return (
    <div>
    <SectionTitle title="Projects"/>
    <div className='flex py-10 sm:flex-col'>
    <div className='flex flex-col gap-5 border-l-2 border-[#135e4c82]  sm:w-full sm:flex-row sm:text-center sm:overflow-x-scroll'>
        {project.map((project,index)=>{
          return (
            <div className='cursor-pointer' onClick={()=>setSelectIndex(index)} key={index}>
            <h1 className={`text-xl px-5  ${selectIndex===index?"text-tertiary border-tertiary border-l-4 -ml-[2px] bg-[#1a7f5a31] py-3":"text-white py-3"}`}>{project.title}</h1>
            </div>
           )
        })}
      </div>
     <div className='flex items-center sm:flex-col sm:mt-5 sm:m-0 sm:w-full gap-5 m-auto w-2/3'>
      <img className='sm:h-[35vh] w-[30vw]  h-[25vh] sm:w-[150vw]' src={project[selectIndex].image} alt="image"/>
     <div className='flex flex-col m-auto w-2/3 sm:w-full'>
      <h1 className='text-secondary text-xl'>{project[selectIndex].title}</h1>
      <p className='text-white text-justify mt-3'>{project[selectIndex].description}</p>
      <p className='text-white text-justify h-auto flex mt-3'>{project[selectIndex].technologies.map((item,index)=>{
        return <div className='flex flex-wrap text-white border border-white bg-secondary px-3'>{item}</div>
      })}</p>
      <a href={project[selectIndex].link} className='border-2 border-tertiary text-white px-5 py-2 rounded mt-2 sm:w-full text-center w-[110px]'>
      View
      </a>
     </div>
     </div>
    </div>
    </div>
  )
}

export default Projects;