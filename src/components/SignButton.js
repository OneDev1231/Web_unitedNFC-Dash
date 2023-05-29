import React from "react";
import { Link } from "react-router-dom";

function SignButton(props) {
  const { color, children, href } = props;
  return (
    <>
      <Link
        type="button"
        style={{
          position: "relative",
          width: "327px",
          height: "32px",
          fontFamily: "InterTiny",
          fontWeight: "300",
          fontSize: "13px",
          lineHeight: "16px",
          border: "0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: color,
          color: "#FFFFFF",
          textDecoration: "none",
        }}
        to={href}
      >
        {children}
      </Link>
    </>
  );
}

export default SignButton;
