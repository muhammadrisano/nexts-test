import React from "react";
import style from "./input.module.css";
const Input = (props) => {
  const { id, className, name, value, onChange, label } = props;
  return (
    <div className={style.inputWrapper}>
      <label htmlFor={id} className="form-label" style={{ color: "#9EA0A5" }}>
        {label}
      </label>
      <input id={id} className={className} name={name} value={value} onChange={onChange} {...props} style={{ borderRadius: "4px", border: "1px solid #E2E5ED" }} />
    </div>
  );
};

export default Input;
