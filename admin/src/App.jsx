import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar.jsx";



const App = () => {
  const [token, setToken]=useState()
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
    
      
      <div>
        <Routes>
        <Route>
          
        </Route>
      </Routes>
      </div>
    </div>
  );
};

export default App;
