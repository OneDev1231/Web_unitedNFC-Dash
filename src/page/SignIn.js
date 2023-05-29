import React from "react";
import AuthCard from "../components/AuthCard";

function SignIn() {
  return (
    <>
      <div className="custom-componenet">
        <div className="custom-cardbox">
          <AuthCard />
        </div>
      </div>
      <div className="custom-title">Sign in or create a new account</div>
    </>
  );
}

export default SignIn;
