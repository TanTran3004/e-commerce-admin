import React from "react";
import { FieldInputProps } from "formik";

interface InputProps {
  type: string;
  label: string;
  i_id: string;
  i_name: string;
  i_value: string;
  i_className: string;
  onChange: FieldInputProps<any>["onChange"];
  onBlur: FieldInputProps<any>["onBlur"];
  error?: string | boolean | undefined;
  touched?: boolean | undefined;
}

const CustomInput: React.FC<InputProps> = ({
  type,
  label,
  i_id,
  i_name,
  i_className,
  i_value,
  onChange,
  onBlur,
  error,
  touched,
}) => {
  return (
    <div className="form-floating mb-3">
      <input
        type={type}
        className={`form-control ${i_className}  ${
          error && touched ? "is-invalid" : ""
        }`}
        id={i_id}
        placeholder={label}
        name={i_name}
        value={i_value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <label htmlFor={i_id}>{label}</label>
      {error && touched && (
        <div className="invalid-feedback" style={{ display: "block" }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default CustomInput;
