import React from 'react';
import axios from "axios";
import {useSelector,useDispatch} from "react-redux";
import { Form} from 'antd';
import {ShowLoading,HideLoading} from "../../redux/rootSlice";
import {message} from "antd";

const AdminAbout = () => {
  const {portfolioData}=useSelector(state=>state.root);
  const dispatch=useDispatch();
  const onFinish=async (values)=>{
  let {lottieURL,description1,description2,skills}=values;
  let str=values.skills;
  let arr=str.toString();
  let result=arr.split(",");
  let result1={lottieURL:lottieURL,description1:description1,description2:description2,skills:result};
  console.log(result1);
  try{
   dispatch(ShowLoading());
   const response=await axios.post('/api/portfolio/update-about',{
     ...result1,
    _id:portfolioData.about._id});
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
    <Form onFinish={onFinish} layout="vertical" initialValues={portfolioData.about}>
      <Form.Item name="lottieURL" label="Lottie URL">
        <input/>
      </Form.Item>
      <Form.Item name="description1" label="Description1">
        <input/>
      </Form.Item>
      <Form.Item name="description2" label="Description2">
        <input/>
      </Form.Item>
      <Form.Item name="skills" label="Skills">
        <input/>
      </Form.Item>
      <div className="flex justify-end w-full">
        <button className="px-5 py-2 bg-primary text-white" type="submit">SAVE</button>
      </div>
    </Form>
    </div>
  )
}

export default AdminAbout;