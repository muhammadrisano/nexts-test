import React from "react";

const Button = (props) => {
  const { child, onClick, style, href, className } = props;
  return (
    <div>
      <button className={`btn ${className}`} onClick={onClick} href={href} style={style}>
        {child}
      </button>
    </div>
  );
};

export default Button;
