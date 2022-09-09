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
  console.log(currentUser)
 
  return (
    <div>
      {/* <SideBar currentUser={currentUser} updateUser={updateUser}/> */}
        <Routes>
          <Route path="/" element={<HomePage currentUser={currentUser}/>} />
          <Route path="/login" element={<LogIn updateUser={updateUser}/>} />
          <Route path='/signup' element={<SignUp updateUser={updateUser}/>}/>
          <Route path='/mylease' element={<MyLease/>}/>
          <Route path='/maintenance' element={<Maintenance/>}/>
          <Route path="/paymentsandbalances" element={<PaymentPage />} />
          <Route path='/contactpage' element={<ContactPage/>}/>
          <Route path='/maintenancecards' element={<MaintenanceCardsContainer/>}/>
        </Routes>

    </div>
  );
}

export default App;