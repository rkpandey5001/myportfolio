import React from 'react';
import axios from "axios";
import {useSelector,useDispatch} from "react-redux";
import {ShowLoading,HideLoading,ReloadData} from "../../redux/rootSlice";
import {Modal,Form,message} from "antd";

const AdminCourse = () => {
  const dispatch=useDispatch();
  const {portfolioData}=useSelector(state=>state.root);
  const {course}=portfolioData;
  const [showAddEditModal,setShowAddEditModal]=React.useState(false);
  const [selectedItemForEdit,setSelectedItemForEdit]=React.useState(null);
  const [type,setType]=React.useState("add");
  const deleteitem=async(item)=>{
    console.log(item);
  try
  {
      const response=await axios.post('/api/portfolio/delete-course',{_id:item._id});
      dispatch(HideLoading());
      if(response.data.success)
      {
      message.success(response.data.message);
      dispatch(HideLoading());
      dispatch(ReloadData(true));
      }
      else
      {
        message.error(response.data.message); 
      }
  }
  catch(error)
  {
      dispatch(HideLoading());
      message.error(error.message); 
  }
}
  const onFinish=async(values)=>{
    console.log(values)
    try{
      dispatch(ShowLoading());
      let response;
      if(selectedItemForEdit)
      {
      response=await axios.post('/api/portfolio/update-course',{
          ...values,
          _id:selectedItemForEdit._id
        });
      }
      else
      {
        let {course,duration,institute,skills,images,description,link}=values;
        let str=skills.toString();
        let arr=str.split(",");
        let result={course:course,duration:duration,institute:institute,skills:arr,images:images,description:description,link:link};
        console.log(result);
        response=await axios.post('/api/portfolio/add-course',
          result);
      }
       dispatch(HideLoading());
       if(response.data.success)
       {
       message.success(response.data.message);
       setShowAddEditModal(false);
       setSelectedItemForEdit(null);
       dispatch(HideLoading());
       dispatch(ReloadData(true));
       }
       else
       {
         message.error(response.data.message); 
       }
      }
     catch(error)
     {
       message.error(error.message); 
     }
     }

  return (
  <div>
    <div className="flex justify-end">
       <button className="bg-primary px-5 py-2 text-white" onClick={()=>{
        setShowAddEditModal(true)
       }}>Add Course</button>
    </div>
    <div className="grid grid-cols-4 gap-5 sm:grid-cols-1 md:grid-cols-2">
    {course.map((courses)=>{
      return(
        <div className="shadow border p-5 border-gray-400 sm:w-full">
        <h1 className="text-secondary text-xl font-bold">Course: {courses.course}</h1>
        <h1>Duration: {courses.duration}</h1>
        <h1>Institute: {courses.institute}</h1>
        <div className="flex flex-wrap">
          {courses.skills.map((ele)=>{
          return (<div style={{padding:"3px 5px",background:"blue",color:"white",border:"1px solid white"}}>{ele}</div>)
        })} 
        </div>
        <img src={courses.images} alt="images" style={{marginTop:"5px"}}/>
        <h1>Description :{courses.description}</h1>
        <h1>Link :{courses.link}</h1>
        <div className="flex justify-end gap-5 mt-5">
           <button className="bg-red-500 text-white px-5 py-2"
           onClick={
            ()=>{
              deleteitem(courses)
            }
           }
           >Delete</button>
           <button className="bg-primary text-white px-5 py-2" onClick={
            ()=>{
              setSelectedItemForEdit(courses);
              setShowAddEditModal(true);
              setType("edit");
            }
           }>Edit</button>
        </div>
      </div>
      )
    })}
    </div>
  
  {(type==="add" || selectedItemForEdit ) && (<Modal
     visible={showAddEditModal}
     title={selectedItemForEdit?"Edit Experience":"Add Experience"}
     footer={null}
     onCancel={()=>{
      setShowAddEditModal(false)
      setSelectedItemForEdit(null)
      }}
    >
   <Form layout="vertical" onFinish={onFinish} initialValues={selectedItemForEdit}>
    <Form.Item name="course" label="Course">
      <input placeholder="Course"/>
    </Form.Item>

    <Form.Item name="duration" label="Duration">
      <input placeholder="Duration"/>
    </Form.Item>

    <Form.Item name="institute" label="Institute">
      <input placeholder="Institute"/>
    </Form.Item>

    <Form.Item name="skills" label="Skills">
      <input placeholder="Skills"/>
    </Form.Item>

    <Form.Item name="images" label="Image">
      <input placeholder="Image"/>
    </Form.Item>

    <Form.Item name="description" label="Description">
      <input placeholder="Description"/>
    </Form.Item>

    <Form.Item name="link" label="Link">
      <input placeholder="Link"/>
    </Form.Item>

    <div className="flex justify-end">
      <button className="border-primary text-primary px-5 py-2" onClick={()=>{setShowAddEditModal(false)
      setSelectedItemForEdit(null)}}> 
      Cancel
      </button>
      <button className="bg-primary text-white px-5 py-2"> 
      {selectedItemForEdit?"Update":"Add"}
      </button>
    </div>
   </Form>
    </Modal>) }


  </div>
  )
  }

export default AdminCourse;