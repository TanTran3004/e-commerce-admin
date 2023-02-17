import React from "react";
import { CustomInputProps } from "../interfaces/type";

const CustomInput: React.FC<CustomInputProps> = (props: CustomInputProps) => {
  const { type, label, i_id, i_className } = props;
  return (
    <div className="form-floating mb-3">
      <input
        type={type}
        className={`form-control ${i_className}`}
        id={i_id}
        placeholder={label}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default CustomInput;
