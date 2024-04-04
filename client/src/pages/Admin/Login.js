import React,{useState} from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";
import { ShowLoading,HideLoading } from '../../redux/rootSlice';
import { useDispatch } from 'react-redux';
import {message} from "antd";
const Login = () => {
  const [user,setUser]=useState({
    uname:"",
    password:""
  });
  const dispatch=useDispatch();
  const login=async()=>{
    try{
     dispatch(ShowLoading())
     const response=await axios.post("/api/portfolio/admin-login",user);
     dispatch(HideLoading())
     if(response.data.success)
     {
      message.success(response.data.message);
      localStorage.setItem('token',JSON.stringify(response.data));
      window.location.href='/admin';
     }
     else
     {
      message.error(response.data.message);
     }
    }
    catch(error){
      message.error(error.message);
      dispatch(HideLoading());
    }
  }
  return (
    <div className="flex justify-center items-center h-screen bg-primary">
      <div className="w-96 flex gap-5 p-5 shadow border border-gray-500 flex-col bg-white">
        <h1 className='text-center text-2xl'>Admin Login</h1>
        <input type="text" value={user.uname} onChange={(e)=>{setUser({...user,uname:e.target.value})}} placeholder="Enter username"/>
        <input type="password" value={user.password} onChange={(e)=>{setUser({...user,password:e.target.value})}} placeholder="Enter password"/>

        <button className="bg-secondary text-white p-3" onClick={login}>Login</button>
        <h1 className="border-1 p-2">Go to pome page <NavLink to="/">Click here</NavLink></h1>
      </div>
    </div>
  )
}

export default Login;