import React from "react";

const Input = (props) => {
  const {
    type = "text",
    placeholder = "Enter PlaceHolder",
    name,
    value,
    className = "form-control",
    onChange,
  } = props;
  return (
    <div className="col-md-6">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        className={className}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
