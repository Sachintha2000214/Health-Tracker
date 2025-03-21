import React from "react";
import {Routes,Route} from 'react-router-dom'
import Home from "./components/Home";
import Login from "./pages/Login"
import Register from "./pages/Register"
import Welcome from "./pages/Welcome";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";

import BloodPressure from "./pages/BloodPressure";
import BloodSugar from "./pages/BloodSugar";
import FBC from "./pages/FBC";
import LipidProfile from "./pages/LipidProfile";
import Others from "./pages/Others";
import HealthTracker from "./pages/HealthTracker"
import DoctorDashboard from "./pages/DoctorDashboard";
import PrescribedDrugs from "./pages/PrescribedDrugsPage";

const App = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/userlogin' element={<UserLogin/>}/>
      <Route path='/userregister' element={<UserRegister/>}/>

      <Route path='/healthtracker' element={<HealthTracker/>}/>
      <Route path='/bloodsugar' element={<BloodSugar/>}/>
      <Route path='/bloodpressure' element={<BloodPressure/>}/>
      <Route path='/fbc' element={<FBC/>}/>
      <Route path='/lipidprofile' element={<LipidProfile/>}/>
      <Route path='/others' element={<Others/>}/>
      <Route path='/docdashboard' element={<DoctorDashboard/>}/>
      <Route path='/pdrug' element={<PrescribedDrugs/>}/>

    </Routes>
  );
};

export default App;
