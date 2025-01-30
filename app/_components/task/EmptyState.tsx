import React from "react";
import Image from "next/image";
import colors from "@/app/_utils/colors";

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8">
      {icon && (
        <Image
          src="/emptyFile.png"
          alt="Empty State Icon"
          width={60}
          height={60}
        />
      )}
      <div className="">
        <h2
          style={{ color: colors.lightGrayText }}
          className="text-white text-lg font-semibold mt-4 py-2"
        >
          {title}
        </h2>
        <p
          style={{ color: colors.lightGrayText }}
          className="text-gray-400 text-sm"
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default EmptyState;
