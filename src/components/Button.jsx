import React from "react";

const Button = (props) => {
  const { handleStart, disabled } = props;
  return (
    <>
      <button onClick={handleStart}>{disabled ? "Start" : "Restart"}</button>
    </>
  );
};

export default Button;
