"use client";
import React from "react";

interface FormLabelProps {
  label: string;
  color?: string; // Optional custom color
  className?: string; // Optional additional styles
}

const FormLabel: React.FC<FormLabelProps> = ({
  label,
  color = "#4EA8DE",
  className,
}) => {
  return (
    <label
      className={`block text-lg font-semibold mb-2 ${className}`}
      style={{ color }}
    >
      {label}
    </label>
  );
};

export default FormLabel;
