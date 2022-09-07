import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import HomePage from "./components/HomePage";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import PaymentPage from "./components/PaymentPage";
import Maintenance from "./components/Maintenance";
import ContactPage from "./components/ContactPage";
import MaintenanceCardsContainer from "./components/MaintenanceCardsContainer";
import MyLease from "./components/MyLease";


function App() {
  const [currentUser, setCurrentUser] = useState(false)
  const updateUser = (user) => setCurrentUser(user)
 
  return (
    <BrowserRouter>
      <SideBar currentUser={currentUser} updateUser={updateUser}/>
        <Routes>
          <Route path="/" element={<HomePage currentUser={currentUser}/>} ></Route>
          <Route path="/login" element={<LogIn updateUser={updateUser}/>} ></Route>
          <Route path='/signup' element={<SignUp updateUser={updateUser}/>}></Route>
          <Route path='/mylease' element={<MyLease/>}> </Route>
          <Route path='/maintenance' element={<Maintenance/>}> </Route>
          <Route path="/paymentsandbalances" element={<PaymentPage />} ></Route>
          <Route path='/contactpage' element={<ContactPage/>}> </Route>
          <Route path='/maintenancecards' element={<MaintenanceCardsContainer/>}></Route>
        </Routes>

    </BrowserRouter>
  );
}

export default App;