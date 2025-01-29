import React from "react";
import Image from "next/image";
import colors from "@/app/_utils/colors"; // Ensure correct import

const AppBar: React.FC = () => {
  return (
    <header className="w-full bg-black py-5 border-b border-gray-800 shadow-lg flex justify-center">
      <div className="flex items-center space-x-4">
        {/* Rocket Image */}
        <div className="w-8 h-8 flex items-center justify-center">
          <Image
            src="/rocket.png"
            alt="Rocket"
            width={32}
            height={32}
            priority
          />
        </div>

        {/* Text with Correct Alignment */}
        <h1 className="text-3xl font-extrabold tracking-wide flex items-center">
          <span className="text-lightBlue" style={{ color: colors.lightBlue }}>
            Todo
          </span>
          <span
            className="text-lightPurple ml-1"
            style={{ color: colors.lightPurple }}
          >
            App
          </span>
        </h1>
      </div>
    </header>
  );
};

export default AppBar;
