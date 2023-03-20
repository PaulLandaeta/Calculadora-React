import React from "react";
import Button from "./Button";

function Keypad({ handleButtonClick }) {
  const buttonLabels = [
    "C",
    "←",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "±",
    "0",
    ".",
    "=",
  ];

  return (
    <div className="keypad">
      {buttonLabels.map((label) => (
        <Button
          key={label}
          label={label}
          onClick={handleButtonClick}
          type={
            label === "0" ? "large" : label === "=" ? "equal" : undefined
          }
        />
      ))}
    </div>
  );
}

export default Keypad;