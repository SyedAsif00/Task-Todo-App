"use client";
import React from "react";
import Image from "next/image";
import Button from "../form/Button";
import { useRouter } from "next/navigation";

// Define Task Type
interface Task {
  id: number;
  text: string;
  completed: boolean;
}

// Define Props Type
interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/tasks/edit/${task.id}`)}
      className={`flex items-center justify-between w-full p-4 rounded-lg border border-gray-700 bg-gray-800 cursor-pointer transition hover:border-gray-500 ${
        task.completed ? "opacity-50" : ""
      }`}
    >
      <Button
        variant="unstyled"
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering edit navigation
          onToggle(task.id);
        }}
        className="mr-4"
      >
        <Image
          src="/Layer 1.png"
          alt="Layer Icon"
          width={20}
          height={20}
          className={`transition ${
            task.completed ? "opacity-50" : "opacity-100 hover:opacity-80"
          }`}
        />
      </Button>

      {/* Task Text */}
      <span
        className={`flex-1 text-white transition ${
          task.completed ? "line-through text-gray-500" : "hover:text-gray-300"
        }`}
      >
        {task.text}
      </span>

      {/* Delete Icon */}
      <Button
        variant="unstyled"
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering edit navigation
          onDelete(task.id);
        }}
        className="ml-4"
      >
        <Image
          src="/Vector.png"
          alt="Delete Icon"
          width={20}
          height={20}
          className="opacity-70 hover:opacity-100 transition"
        />
      </Button>
    </div>
  );
};

export default TaskItem;
