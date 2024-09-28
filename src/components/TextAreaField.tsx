import React from "react";

type TextareaFieldProps = {
  label: string;
  value: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
};

const TextareaField = ({
  label,
  value,
  className = "",
  onChange,
  rows = 4, // Default number of rows
}: TextareaFieldProps) => {
  return (
    <div className="">
      <label className="form-label">{label} *</label>
      <textarea
        value={value}
        onChange={onChange}
        rows={rows}
        className={`form-input ${className}`}
        required
      />
    </div>
  );
};

export default TextareaField;
