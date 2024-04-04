import React,{useEffect} from 'react';
import Header from '../../components/Header';
import AdminIntro from './AdminIntro';
import {useSelector} from "react-redux";
import { Tabs } from 'antd';
import AdminAbout from './AdminAbout';
import AdminExperience from './AdminExperience';
import AdminEducation from './AdminEducation';
import AdminProjects from './AdminProjects';
import AdminCourse from './AdminCourse';
import Social from './Social';
import Admincontact from './Admincontact';
import AdminImage from './AdminImage';

const onChange = (key) => {

};

const items = [
  {
    key: '1',
    label: 'Intro',
    children: <AdminIntro/>,
  },
  {
    key: '2',
    label: 'About',
    children: <AdminAbout/>,
  },
  {
    key: '3',
    label: 'Education',
    children: <AdminEducation/>,
  },
  {
    key: '4',
    label: 'Experience',
    children: <AdminExperience/>,
  },
  {
    key: '5',
    label: 'Projects',
    children: <AdminProjects/>,
  },
  {
    key: '6',
    label: 'Courses',
    children: <AdminCourse/>,
  },
  {
    key: '7',
    label: 'Social Media',
    children: <Social/>,
  },
  {
    key: '8',
    label: 'Say Hello',
    children: <Admincontact/>,
  },
  {
    key: '9',
    label: 'Profile Image',
    children: <AdminImage/>,
  }
];

const Admin = () => {
  const {portfolioData}=useSelector(state=>state.root);

  useEffect(()=>{
  if(!localStorage.getItem("token"))
  {
  window.location.href="/admin-login";
  }
  },[]);

  const logout=()=>{
    localStorage.removeItem("token");
    window.location.href="/admin-login";
  }
  return (
    <div>
      <div>
      <Header/>
      </div>
      <div className="flex sm:flex-col bg-white justify-between" style={{padding:"90px 15px"}}>
        <h1 className="text-xl text-primary sm:text-center">Admin Dashboard</h1>
        <h1 className="text-2xl cursor-pointer bg-secondary text-white p-1 text-center" onClick={logout}>Logout</h1>
      </div>
      <div>

      { portfolioData &&  <div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} style={{padding:"0px 15px"}}/>;
      </div>}
      </div>
    </div>
  )
}

export default Admin;