import React from "react";
import AuthCard from "../components/AuthCard";

function SignIn() {
  return (
    <>
      <div className="custom-componenet">
        <div className="custom-title">Sign in or create a new account</div>
          <AuthCard left="32px" top ="10px"/>
      </div>
    </>
  );
}

export default SignIn;
