import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="bg-blue-500 text-white rounded p-2">
      {children}
    </button>
  );
};

export default Button;
