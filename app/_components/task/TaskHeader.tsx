"use client";
import React from "react";
import { useTaskContext } from "@/app/_context/TaskContext";

const TasksHeader: React.FC = () => {
  const { taskCount, completedCount } = useTaskContext();

  return (
    <div className="flex flex-col w-full max-w-2xl">
      <div className="flex justify-between px-6 py-2 text-white">
        <span className="text-blue-400 font-medium">
          Tasks <span className="text-gray-400">({taskCount})</span>
        </span>
        <span className="text-purple-400 font-medium">
          Completed <span className="text-gray-400">({completedCount})</span>
        </span>
      </div>

      <div className="w-full border-b border-gray-700 mt-2" />
    </div>
  );
};

export default TasksHeader;
