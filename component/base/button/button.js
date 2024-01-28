import React from "react";

const Button = (props) => {
  const { child, onClick, style } = props;
  return (
    <div>
      <button className="btn" onClick={onClick} style={style}>
        {child}
      </button>
    </div>
  );
};

export default Button;
