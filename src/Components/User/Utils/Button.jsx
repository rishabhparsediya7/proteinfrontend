import React from "react";

const Button = ({ title, disabled }) => {
  return (
    <button
      disabled={disabled}
      className="w-full p-2 my-1 rounded-md tracking-wider uppercase hover:border-[0.025rem] hover:border-[#646cff]"
    >
      {title}
    </button>
  );
};

export default Button;
