import React from "react";
import { useField, ErrorMessage } from "formik";

const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-3">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`text-field form-control ${
          meta.touched && meta.error && "is-invalid"
        }`}
        autoComplete="off"
        {...field}
        {...props}
      />
      <ErrorMessage name={field.name} component="div" className="error" />
    </div>
  );
};

export default InputField;
