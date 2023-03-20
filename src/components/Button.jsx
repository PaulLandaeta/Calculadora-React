import React from "react";

function Button({ label, onClick, type = "primary" }) {
  return (
    <button className={`button ${type}`} onClick={() => onClick(label)}>
      {label}
    </button>
  );
}

export default Button;
