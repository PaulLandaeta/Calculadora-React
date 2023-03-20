import React from "react";

function Display({ input, result }) {
  return (
    <div className="display">
      <input type="text" value={input} readOnly />
      <input type="text" value={result} readOnly />
    </div>
  );
}

export default Display;