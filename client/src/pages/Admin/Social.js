import React from 'react';
import axios from "axios";
import {useSelector,useDispatch} from "react-redux";
import { Form} from 'antd';
import {ShowLoading,HideLoading} from "../../redux/rootSlice";
import {message} from "antd";

const Social = () => {
  const {portfolioData}=useSelector(state=>state.root);
  console.log(portfolioData);
  const dispatch=useDispatch();
  const onFinish=async (values)=>{
    console.log(values);
  try{
   dispatch(ShowLoading());
   const response=await axios.post('/api/portfolio/update-social',{
    ...values,
    _id:portfolioData.social._id});
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
      <Form onFinish={onFinish} layout="vertical" initialValues={portfolioData.social}>
        <Form.Item name="facebook" label="Facebook">
          <input/>
        </Form.Item>
        <Form.Item name="linkedin" label="Linkedin">
          <input/>
        </Form.Item>
        <Form.Item name="instagram" label="Instagram">
          <input/>
        </Form.Item>
        <Form.Item name="git" label="Git">
          <input/>
        </Form.Item>
        <div className="flex justify-end w-full">
          <button className="px-5 py-2 bg-primary text-white" type="submit">SAVE</button>
        </div>
      </Form>
    </div>
  )
}

export default Social;