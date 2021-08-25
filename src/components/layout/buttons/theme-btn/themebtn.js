import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "./themebtn.scss";

const STYLES = ["btn-upvote-solid"];

const Themebtn = ({ children, type, buttonStyle }) => {
  const [count, setCount] = useState(0);
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  return (
    <Button
      onClick={() => setCount(count + 1)}
      className={`btn ${checkButtonStyle}`}
      disableRipple="true"
      type={type}
    >
      {children}
    </Button>
  );
};

export default Themebtn;
