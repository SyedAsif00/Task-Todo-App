import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, icon, error, ...rest }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-1">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {icon && <span className="absolute left-3 text-gray-400">{icon}</span>}
        <input
          className={`w-full bg-gray-800 border ${
            error ? "border-red-500" : "border-gray-600"
          } text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
            icon ? "pl-10" : ""
          }`}
          {...rest}
        />
      </div>
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Input;
