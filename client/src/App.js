import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import HomePage from "./components/HomePage";
// import LogIn from "./components/LogIn";

function App() {
 
  return (
    <BrowserRouter>
    <SideBar/>
        <Routes>
          <Route path="/" element={<HomePage />} ></Route>
          
        </Routes>

    </BrowserRouter>
  );
}

export default App;