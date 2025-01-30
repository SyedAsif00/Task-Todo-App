import React from "react";

interface SpinnerProps {
  size?: string;
  color?: string;
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  size = "w-6 h-6",
  color = "border-white",
  className = "",
}) => {
  return (
    <div
      className={`border-4 border-t-transparent animate-spin rounded-full ${size} ${color} ${className}`}
    ></div>
  );
};

export default Spinner;
