import React from "react";
import Button from "./Button";

const TyperRacer = (props) => {
  const {
    newWord,
    inputValue,
    setInputValue,
    disabled,
    time,
    animation,
    handleInput,
    handleStart,
  } = props;

  return (
    <div className="typeRacer">
      <div className="wordOutput">
        <p>{newWord}</p>
      </div>
      <div
        style={{ animation: animation !== null ? animation : "" }}
        className="time"
      >
        <p>{time}</p>
      </div>
      <div className="wordValues">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => handleInput(e)}
          disabled={disabled && disabled}
          placeholder={disabled ? "" : "Start typing..."}
        />
        <Button handleStart={handleStart} disabled={disabled} />
      </div>
    </div>
  );
};
export default TyperRacer;
