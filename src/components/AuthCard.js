import React from "react";
import SignButton from "./SignButton";

function AuthCard(props) {
  return (
    <div className="custom-card" style={{ left: props.left, top: props.top}}>
      <div className="custom-signin-group">
        <input
          type="text"
          name="useremail"
          className="custom-input-style"
          placeholder="email address"
        ></input>
        <input
          type="text"
          name="userpassword"
          className="custom-input-style"
          placeholder="password"
        ></input>
        <SignButton color={"#292323"}>Sign In</SignButton>
      </div>
      <div className="custom-line" />
      <div className="custom-signup-group">
        <SignButton color={"#292323"} href="/sign-up">
          Create a new account
        </SignButton>
        <SignButton color={"#1B4EB2"}>Sign up with Google</SignButton>
        <SignButton color={"#292323"}>Sign up with Apple</SignButton>
      </div>
    </div>
  );
}

export default AuthCard;
