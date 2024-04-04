import React,{useState} from 'react';
import {NavLink} from "react-router-dom";
const Header = () => {
  return (
    <div className=""> 
    <div className="p-5 flex justify-between fixed w-full sm:fixed sm:w-full md:w-full bg-primary headerbox">
      <h1 className="text-secondary text-4xl font-semibold">R</h1>
      <h1 className="text-white text-4xl font-semibold">K</h1>
      <h1 className="text-tertiary text-4xl font-semibold">P</h1>
    </div>
    </div>
  )
}

export default Header;