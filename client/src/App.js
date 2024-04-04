import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { useState, useEffect} from "react";
import Home from "./pages/Home";
import Admin from "./pages/Admin/index";
import axios from "axios";
import Loader from "./pages/Home/Loader";
import Login from "./pages/Admin/Login";
import {useSelector,useDispatch} from "react-redux";
import {SetPortfolioData,ShowLoading,HideLoading,ReloadData} from "./redux/rootSlice";

function App() {
  const {loading,portfolioData,reloadData}=useSelector(state=>state.root);
  const dispatch=useDispatch();
  const getPortfolioData=async ()=>{
    try{
      dispatch(ShowLoading());
      const response=await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(SetPortfolioData(response.data));
      dispatch(ReloadData(false));
      dispatch(HideLoading());
    }
    catch(err)
    {
      dispatch(HideLoading());
    }
  }
  useEffect(()=>{
    getPortfolioData();
  },[]);

  useEffect(()=>{
    if(!portfolioData)
    {
      getPortfolioData();
    }
  },[portfolioData]);

  useEffect(()=>{
  if(reloadData)
  {
    getPortfolioData();
  }
  },[reloadData]);

  return (
    <Router>
       {loading?<Loader/>:null}
       <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/admin' element={<Admin/>}/>
           <Route path='/admin-login' element={<Login/>}/>
       </Routes>
    </Router>
  );
}

export default App;
