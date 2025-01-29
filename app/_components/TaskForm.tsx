"use client";
import React, { useState } from "react";
import Input from "@/app/_components/form/Input";
import Button from "@/app/_components/form/Button";
import { useRouter } from "next/navigation";
import colors from "@/app/_utils/colors";
import Image from "next/image";
import ColorPicker from "@/app/_components/ColorPicker";
import FormLabel from "@/app/_components/form/FormLabel";

// ✅ Add `title` and `buttonText` to the interface
interface TaskFormProps {
  title: string;
  buttonText: string;
  initialTask?: string;
  initialColor?: string;
  onSubmit: (task: string, color: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({
  title,
  buttonText,
  initialTask = "",
  initialColor = colors.blue,
  onSubmit,
}) => {
  const router = useRouter();
  const [task, setTask] = useState<string>(initialTask);
  const [selectedColor, setSelectedColor] = useState<string>(initialColor);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!task.trim()) return;
    onSubmit(task, selectedColor);
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 text-white">
      {/* Back Button */}
      <div className="w-full max-w-2xl flex justify-start">
        <Button
          variant="unstyled"
          onClick={() => router.push("/tasks")}
          className="p-2 hover:opacity-80 transition"
        >
          <Image src="/arrow-left.png" alt="Back" width={32} height={32} />
        </Button>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-6 w-full max-w-2xl p-6 rounded-lg shadow-md bg-transparent"
      >
        {/* Task Title */}
        <div>
          <FormLabel label={title} color={colors.lightBlue} />
          <Input
            type="text"
            placeholder="Ex. Brush your teeth"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Color Selection */}
        <div>
          <FormLabel label="Color" color={colors.lightBlue} />
          <ColorPicker
            selectedColor={selectedColor}
            onSelectColor={setSelectedColor}
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full flex items-center justify-center space-x-2 text-white bg-btnColor hover:bg-opacity-90 py-3 px-4 text-lg font-semibold rounded-lg"
        >
          {buttonText}
          <Image
            src="/plus.png"
            alt="Plus"
            width={18}
            height={18}
            className="opacity-80"
          />
        </Button>
      </form>
    </div>
  );
};

export default TaskForm;
