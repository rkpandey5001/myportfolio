import React from 'react';
import axios from "axios";
import {useSelector,useDispatch} from "react-redux";
import { Form} from 'antd';
import {ShowLoading,HideLoading} from "../../redux/rootSlice";
import {message} from "antd";

const AdminIntro = () => {
  const {portfolioData}=useSelector(state=>state.root);
  const dispatch=useDispatch();
  const onFinish=async (values)=>{
  try{
   dispatch(ShowLoading());
   const response=await axios.post('/api/portfolio/update-intro',{
    ...values,
    _id:portfolioData.intro._id});
    dispatch(HideLoading());
    if(response.data.success)
    {
    message.success(response.data.message);
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
      <Form onFinish={onFinish} layout="vertical" initialValues={portfolioData.intro}>
        <Form.Item name="welcomeText" label="Intro">
          <input/>
        </Form.Item>
        <Form.Item name="firstName" label="First Name">
          <input/>
        </Form.Item>
        <Form.Item name="lastName" label="Last Name">
          <input/>
        </Form.Item>
        <Form.Item name="caption" label="Caption">
          <input/>
        </Form.Item>
        <Form.Item name="description" label="Description">
          <textarea/>
        </Form.Item>
        <div className="flex justify-end w-full">
          <button className="px-5 py-2 bg-primary text-white" type="submit">SAVE</button>
        </div>
      </Form>
    </div>
  )
}

export default AdminIntro;