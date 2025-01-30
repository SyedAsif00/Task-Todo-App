"use client";
import React from "react";
import colors from "@/app/_utils/colors";

export interface ColorPickerProps {
  selectedColor: string;
  onSelectColor: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  selectedColor,
  onSelectColor,
}) => {
  return (
    <div className="flex space-x-4">
      {Object.entries(colors)
        .slice(4)
        .map(([key, color]) => (
          <button
            key={key}
            className={`w-12 h-12 rounded-full border-4 ${
              selectedColor === color ? "border-white" : "border-transparent"
            } transition transform hover:scale-110`}
            style={{ backgroundColor: color }}
            onClick={(e) => {
              e.preventDefault();
              onSelectColor(color);
            }}
            aria-label={`Select ${key} color`}
          />
        ))}
    </div>
  );
};

export default ColorPicker;
