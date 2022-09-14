import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import HomePage from "./components/HomePage";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import PaymentPage from "./components/PaymentPage";
import Maintenance from "./components/Maintenance";
import ContactPage from "./components/ContactPage";
import MyLease from "./components/MyLease";
import StripeContainer from "./components/StripeContainer";



function App() {
  const [currentUser, setCurrentUser] = useState(false)
  const updateUser = (user) => setCurrentUser(user)
  const [user, setUser] = useState(null);

  console.log(user)
  console.log(currentUser)
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function onLogout() {
    setCurrentUser(!currentUser)
  }
 
  return (
    <div>
        <Routes>
          <Route path="/" element={<><SideBar currentUser={currentUser} onLogout={onLogout} /><HomePage class="overflow-hidden" currentUser={currentUser}/></>} />
          <Route path="/login" element={<LogIn updateUser={updateUser}/>} />
          <Route path='/signup' element={<SignUp updateUser={updateUser}/>}/>
          <Route path='/stripecontainer' element={<StripeContainer/>}/>
          <Route path='/mylease' element={<><SideBar currentUser={currentUser}/><MyLease currentUser={currentUser}/></>}/>
          <Route path='/maintenance' element={<><SideBar currentUser={currentUser}/><Maintenance currentUser={currentUser}/></>}/>
          <Route path="/paymentsandbalances" element={<><SideBar currentUser={currentUser}/><PaymentPage currentUser={currentUser} /></>} />
          <Route path='/contactpage' element={<><SideBar currentUser={currentUser}/><ContactPage/></>}/>
        </Routes>

    </div>
  );
}

export default App;