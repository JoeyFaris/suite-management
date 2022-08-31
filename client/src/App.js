import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import HomePage from "./components/HomePage";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";


function App() {
  const [currentUser, setCurrentUser] = useState(false)
  const updateUser = (user) => setCurrentUser(user)
 
  return (
    <BrowserRouter>
      <SideBar currentUser={currentUser} updateUser={updateUser}/>
        <Routes>

          <Route path="/login" element={<LogIn updateUser={updateUser}/>} ></Route>
          <Route path='/signup' element={<SignUp updateUser={updateUser}/>}></Route>
          <Route path="/" element={<HomePage currentUser={currentUser}/>} ></Route>
        </Routes>

    </BrowserRouter>
  );
}

export default App;