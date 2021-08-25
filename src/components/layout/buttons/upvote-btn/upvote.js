import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "./upvote.scss";

const STYLES = ["btn-upvote-icon", "btn-upvote-solid"];

const Upvote = ({ type, buttonStyle }) => {
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
      {count}
    </Button>
  );
};

export default Upvote;
