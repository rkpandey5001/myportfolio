import React from 'react';
import axios from "axios";
import {useSelector,useDispatch} from "react-redux";
import {ShowLoading,HideLoading,ReloadData} from "../../redux/rootSlice";
import {Modal,Form,message} from "antd";

const AdminEducation = () => {
  const dispatch=useDispatch();
  const {portfolioData}=useSelector(state=>state.root);
  const {education}=portfolioData;
  const [showAddEditModal,setShowAddEditModal]=React.useState(false);
  const [selectedItemForEdit,setSelectedItemForEdit]=React.useState(null);
  const [type,setType]=React.useState("add");
  const deleteitem=async(item)=>{
    console.log(item);
  try
  {
      const response=await axios.post('/api/portfolio/delete-education',{_id:item._id});
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
    // console.log(values)
    try{
      dispatch(ShowLoading());
      let response;
      if(selectedItemForEdit)
      {
        let {year,course,institute,subject}=values;
        let str=subject.toString();
        let arr=str.split(",");
        let result={course:course,year:year,institute:institute,subject:arr};
      response=await axios.post('/api/portfolio/update-education',{
          ...result,
          _id:selectedItemForEdit._id
        });
      }
      else
      {
        let {year,course,institute,subject}=values;
        let str=subject.toString();
        let arr=str.split(",");
        let result={course:course,year:year,institute:institute,subject:arr};
        response=await axios.post('/api/portfolio/add-educations',
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
       }}>Add Education</button>
    </div>
    <div className="grid grid-cols-4 gap-5 sm:grid-cols-1 md:grid-cols-2">
    {education.map((educations)=>{
      return(
        <div className="shadow border p-5 border-gray-400" key={educations._id}>
        <h1 className="text-secondary text-xl font-bold">{educations.period}</h1>
        <h1>Year: {educations.year}</h1>
        <h1>Course: {educations.course}</h1>
        <h1>Institute:{educations.institute}</h1>
        <div>{educations.subject.map((sub)=>{
          return(<span style={{background:"orange", color:"white",padding:"2px 2px",margin:"0px 2px" }}>{sub}</span>)
        })}</div>
        <div className="flex justify-end gap-5 mt-5">
           <button className="bg-red-500 text-white px-5 py-2"
           onClick={
            ()=>{
              deleteitem(educations)
            }
           }
           >Delete</button>
           <button className="bg-primary text-white px-5 py-2" onClick={
            ()=>{
              setSelectedItemForEdit(educations);
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
    <Form.Item name="year" label="Year">
      <input placeholder="Year"/>
    </Form.Item>

    <Form.Item name="course" label="Course">
      <input placeholder="Course"/>
    </Form.Item>

    <Form.Item name="institute" label="Institute">
      <input placeholder="Institute"/>
    </Form.Item>

    <Form.Item name="subject" label="Subject">
      <input placeholder="Subject"/>
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

export default AdminEducation;