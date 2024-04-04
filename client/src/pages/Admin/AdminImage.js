import React,{useState} from 'react';
import axios from "axios";
import {useSelector,useDispatch} from "react-redux";
import { Form} from 'antd';
import {ShowLoading,HideLoading} from "../../redux/rootSlice";
import {message} from "antd";
import "../../../src/App.css";

const AdminImage = () => {
  const {portfolioData}=useSelector(state=>state.root);
  // const [file,setFile]=useState();
  const dispatch=useDispatch();
  const onFinish=async (values)=>{
    values.preventDefault();
    // const formdata=new FormData();
    // formdata.append('file',file)
    console.log(values.target.elements.mypic.files[0]);
    let result=values.target.elements.mypic.value;
    try{
      dispatch(ShowLoading());
      const response=await axios.post('/api/portfolio/upload-image',{
       result,
       _id:portfolioData.image._id});
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
         <form enctype="multipart/form-data" onSubmit={(e)=>{onFinish(e)}}>
            <div style={{marginTop:"20px"}}>
              <label for="profilepic">Upload Image</label>
              <input type="file" name="mypic" id="profilepic" style={{outline:"0px none",border:"0px",marginTop:"20px"}}/>
            </div>
            <div style={{marginTop:"50px",margin:"auto"}}>
              <button style={{background:"green",color:"white",padding:"5px 10px"}} >Upload</button>
            </div>
         </form>
    </div>
  )
}

export default AdminImage;