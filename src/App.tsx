import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './shared/NavigationBar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/dashboard/Dashboard';
import Notfound from './components/pages/Notfound';
import Employee from './components/pages/employee/Employee';
import UpdateEmployee from './components/pages/employee/UpdateEmployee';


function App() {
  return (
    <div >
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/postemployee" element={<Employee/>} />
        <Route path="/employee/:id" element={<UpdateEmployee/>} />
        <Route path="*" element={<Notfound/>} />
      </Routes>
    </div>
  );
}

export default App;
