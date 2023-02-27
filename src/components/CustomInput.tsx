import React from "react";
import { FieldInputProps, FormikErrors } from "formik";

type validInputTypes =
  | "text"
  | "password"
  | "number"
  | "email"
  | "tel"
  | "search"
  | "url"
  | "date"
  | "time"
  | "datetime-local"
  | "month"
  | "week"
  | "range"
  | "color"
  | "checkbox"
  | "radio";
interface InputProps {
  type: validInputTypes;
  label: string;
  i_id: string;
  i_name: string;
  i_value: string | number;
  i_className: string;
  onChange: FieldInputProps<any>["onChange"];
  onBlur: FieldInputProps<any>["onBlur"];
  error?: string[] | string | boolean | any | undefined;
  touched?: boolean | any | undefined;
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
  const errorString = Array.isArray(error) ? error.join(", ") : error;
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
          {errorString}
        </div>
      )}
    </div>
  );
};

export default CustomInput;
