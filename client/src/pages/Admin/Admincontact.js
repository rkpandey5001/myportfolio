import React from 'react';
import axios from "axios";
import {useSelector,useDispatch} from "react-redux";
import { Form} from 'antd';
import {ShowLoading,HideLoading} from "../../redux/rootSlice";
import {message} from "antd";

const Admincontact = () => {
  const {portfolioData}=useSelector(state=>state.root);
  const dispatch=useDispatch();
  const onFinish=async (values)=>{
  try{
   dispatch(ShowLoading());
   const response=await axios.post('/api/portfolio/update-contact',{
    ...values,
    _id:portfolioData.contact._id});
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
      <Form onFinish={onFinish} layout="vertical" initialValues={portfolioData.contact}>
        <Form.Item name="name" label="Name">
          <input/>
        </Form.Item>
        <Form.Item name="gender" label="Gender">
          <input/>
        </Form.Item>
        <Form.Item name="email" label="Email">
          <input/>
        </Form.Item>
        <Form.Item name="mobile" label="Mobile">
          <input/>
        </Form.Item>
        <Form.Item name="age" label="Age">
          <input/>
        </Form.Item>

        <Form.Item name="address" label="Address">
          <textarea/>
        </Form.Item>
        <div className="flex justify-end w-full">
          <button className="px-5 py-2 bg-primary text-white" type="submit">SAVE</button>
        </div>
      </Form>
    </div>
  )
}

export default Admincontact;