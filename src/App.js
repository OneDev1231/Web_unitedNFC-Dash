import React from "react";

import { Route, Routes } from "react-router-dom";
import SignIn from "./page/SignIn";
import SignUp from "./page/SignUp";

import "./css/auth.css";

function App() {
  return (
    <div className="custom-backimg">
      {/* <React.Fragment></React.Fragment> */}
      
      <Routes>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
