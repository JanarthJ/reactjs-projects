import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Dashboard from './dashboard/dashboard';
import StaffList from './stafflist/stafflist';
import Main from './main/main';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  exact path="/" element={<Main/>}/>
          <Route  exact path="/dashboard" element={<Dashboard/>}/>
          <Route exact  path="/stafflist" element={<StaffList/>}/>
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
