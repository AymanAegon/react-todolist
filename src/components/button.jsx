import React from "react";

const Button = ({value, onClick, cls}) => {
  return (
    <button type="button" className={cls} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
