import React, { useState } from "react";
import {evaluate}  from "mathjs";
import Display from "./../components/Display";
import Keypad from "./../components/Keypad";

function Calculadora() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function handleButtonClick(label) {
    switch (label) {
      case "C":
        setInput("");
        setResult("");
        break;
      case "←":
        setInput((prevInput) => prevInput.slice(0, -1));
        break;
      case "=":
        try {
          setResult(evaluate(input).toString());
        } catch {
          setResult("Error");
        }
        break;
      default:
        setInput((prevInput) => prevInput + label);
        break;
    }
  }

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <Keypad handleButtonClick={handleButtonClick} />
    </div>
  );
}
export default Calculadora;
