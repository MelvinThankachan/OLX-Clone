import React from "react";

type InputFieldProps = {
  label: string;
  type?: React.HTMLInputTypeAttribute;
  value: string;
  name: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField = ({
  label,
  type = "text",
  value,
  name,
  className = "",
  onChange,
}: InputFieldProps) => {
  return (
    <div className="">
      <label className="form-label">{label} *</label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        className={`form-input ${className}`}
        required
      />
    </div>
  );
};

export default InputField;
