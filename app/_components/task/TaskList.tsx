"use client";
import React from "react";
import TaskItem from "./TaskItem";
import { Task } from "@/app/_types/Task";

// Define Task Type for better reusability

// Define Props Type
interface TaskListProps {
  tasks: Task[];
  loading: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggle,
  onDelete,
  loading,
}) => {
  return (
    <div className="w-full max-w-2xl space-y-4">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p className="text-gray-400 text-center">No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;
