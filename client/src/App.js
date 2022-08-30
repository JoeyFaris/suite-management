import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import HomePage from "./components/HomePage";
import LogIn from "./components/LogIn";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BrowserRouter>
    <SideBar/>
        <Routes>
          <Route path='/login' element={<LogIn/>}></Route>
          <Route path="/" element={<HomePage />} ></Route>
          
        </Routes>

    </BrowserRouter>
  );
}

export default App;