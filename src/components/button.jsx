import React, { Children } from "react";

const Button = ({value, onClick, cls, children}) => {
  return (
    <button type="button" className={cls} onClick={onClick}>
      {children}
      {value}
    </button>
  );
};

export default Button;
