import React from "react";
import colors from "@/app/_utils/colors"; // Import colors

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "unstyled"; // Added "unstyled"
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "py-2 px-4 rounded-lg text-white font-semibold flex items-center justify-center";

  const variantStyles =
    variant === "primary"
      ? `bg-[${colors.btnColor}] hover:opacity-80`
      : variant === "secondary"
      ? "bg-gray-700 hover:bg-gray-800"
      : "bg-transparent hover:opacity-80"; // "unstyled" should have no background

  return (
    <button
      {...props}
      className={`${baseStyles} ${variantStyles} ${className}`}
      style={variant === "primary" ? { backgroundColor: colors.btnColor } : {}}
    >
      {children}
    </button>
  );
};

export default Button;
