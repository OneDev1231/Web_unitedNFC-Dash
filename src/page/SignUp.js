import React from "react";
import AuthCard from "../components/AuthCard";
import Frame from "../components/Frame";
import SignButton from "../components/SignButton";

function SignUp() {
  return (
    <div className="custom-backcolor1">
      <AuthCard left="5%" top="35%" />
      <div
        style={{
          position: "absolute",
          left: "590px",
          top: "196px",
          width: "509px",
          height: "725px",
          borderLeft: "1px solid #000000",
        }}
      >
        <Frame
          text="Let's get started with entering your info"
          marginTop="15px"
          marginLeft="43px"
        />
        <Frame
          text="We sent a verification code to your email. Please enter this so we can complete your sign up"
          marginTop="127px"
          marginLeft="43px"
        />
        <Frame
          text="Choose your UI preference. Not sure which one to choos? We can change it later."
          marginTop="100px"
          marginLeft="43px"
        />
      </div>
      <div
        style={{
          position: "absolute",
          left: "1099px",
          top: "196px",
          width: "509px",
          height: "725px",
          borderLeft: "1px solid #000000",
        }}
      >
        <div
          style={{
            width: "332px",
            height: "179px",
            marginLeft: "31px",
            marginTop: "25px",
            display: "flex",
            flexDirection: "column",
            gap: "17px",
          }}
        >
          <input
            type="text"
            name="username"
            className="custom-input-style"
            placeholder="name"
          ></input>
          <input
            type="text"
            name="useremail"
            className="custom-input-style"
            placeholder="email address"
          ></input>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "12px",
            }}
          >
            <input
              type="text"
              name="userpass"
              className="custom-input-style1"
              placeholder="password"
            ></input>
            <input
              type="text"
              name="confpass"
              className="custom-input-style1"
              placeholder="confirm password"
            ></input>
          </div>
          <SignButton color={"#292323"}>Sign up and verify</SignButton>
        </div>
        <div
          style={{
            width: "332px",
            height: "38px",
            marginTop: "14px",
            marginLeft: "31px",
            fontFamily: "InterLight",
            fontWeight: "300",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#1E1E1E",
          }}
        >
          Great, sign up is almost complete. Enter the verification code below.
        </div>
        <div
          style={{
            width: "327px",
            height: "78px",
            marginTop: "150px",
            marginLeft: "31px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "9px",
            }}
          >
            {[1, 2, 3, 4, 5].map((id) => (
              <input className="custom-input-verif" key={id} />
            ))}
          </div>
          <SignButton color={"#292323"}>Complete verification</SignButton>
        </div>
        <div
          style={{
            width: "327px",
            height: "19px",
            marginTop: "9px",
            marginLeft: "31px",
            fontFamily: "InterLight",
            fontWeight: "300",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#1E1E1E",
          }}
        >
          Awesome, you're ready to go.
        </div>
        <div
          style={{
            width: "112px",
            height: "50px",
            marginLeft: "31px",
            marginTop: "147px",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: "27px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              backgroundColor: "black",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              width: "34px",
              height: "34px",
              border: "4px solid #276FFB",
              borderRadius: "50%",
              backgroundColor: "white",
            }}
          ></div>
        </div>
        <button type="button" className="custom-next-btn1">
          Let's ride!
        </button>
      </div>
    </div>
  );
}

export default SignUp;
