import React from 'react';
import axios from "axios";
import {useSelector,useDispatch} from "react-redux";
import {ShowLoading,HideLoading,ReloadData} from "../../redux/rootSlice";
import {Modal,Form,message} from "antd";

const AdminProjects = () => {
  const dispatch=useDispatch();
  const {portfolioData}=useSelector(state=>state.root);
  const {project}=portfolioData;
  const [showAddEditModal,setShowAddEditModal]=React.useState(false);
  const [selectedItemForEdit,setSelectedItemForEdit]=React.useState(null);
  const [type,setType]=React.useState("add");
  const deleteitem=async(item)=>{
    console.log(item);
  try
  {
      const response=await axios.post('/api/portfolio/delete-project',{_id:item._id});
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
    try{
      dispatch(ShowLoading());
      let response;
      if(selectedItemForEdit)
      {
        let {title,description,image,link,technologies}=values;
        let str=technologies.toString();
        let arr=str.split(",");
        let result={title:title,description:description,image:image,link:link,technologies:arr};
      response=await axios.post('/api/portfolio/update-project',{
          ...result,
          _id:selectedItemForEdit._id
        });
      }
      else
      {
        let {title,description,image,link,technologies}=values;
        let str=technologies.toString();
        let arr=str.split(",");
        let result={title:title,description:description,image:image,link:link,technologies:arr};
        response=await axios.post('/api/portfolio/add-project',
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
       }}>Add Project</button>
    </div>
    <div className="grid grid-cols-4 gap-5 sm:grid-cols-1 md:grid-cols-2">
    {project.map((projects)=>{
      return(
        <div className="shadow border p-5 border-gray-400">
        <img src={projects.image} alt="images"/>
        <h1 className="text-secondary text-xl font-bold">Title: {projects.title}</h1>
        <h1>Description: {projects.description}</h1>
        <div className="flex flex-wrap">
          {projects.technologies.map((ele)=>{
          return (<div style={{padding:"3px 5px",background:"blue",color:"white"}}>{ele}</div>)
        })} 
        </div>
       
        <h1>Link :{projects.link}</h1>
        <div className="flex justify-end gap-5 mt-5">
           <button className="bg-red-500 text-white px-5 py-2"
           onClick={
            ()=>{
              deleteitem(projects)
            }
           }
           >Delete</button>
           <button className="bg-primary text-white px-5 py-2" onClick={
            ()=>{
              setSelectedItemForEdit(projects);
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
    <Form.Item name="title" label="Title">
      <input placeholder="Title"/>
    </Form.Item>

    <Form.Item name="image" label="Image">
      <input placeholder="Image"/>
    </Form.Item>

    <Form.Item name="description" label="Description">
      <input placeholder="Description"/>
    </Form.Item>

    <Form.Item name="link" label="Link">
      <input placeholder="Link"/>
    </Form.Item>

    <Form.Item name="technologies" label="Technologies">
      <input placeholder="Technologies"/>
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

export default AdminProjects;