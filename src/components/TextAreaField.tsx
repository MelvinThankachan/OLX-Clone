import React from "react";

type TextareaFieldProps = {
  label: string;
  value: string;
  className?: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
};

const TextareaField = ({
  label,
  value,
  className = "",
  onChange,
  name,
  rows = 4,
}: TextareaFieldProps) => {
  return (
    <div className="">
      <label className="form-label">{label} *</label>
      <textarea
        value={value}
        onChange={onChange}
        rows={rows}
        name={name}
        className={`form-input ${className}`}
        required
      />
    </div>
  );
};

export default TextareaField;
