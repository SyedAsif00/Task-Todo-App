"use client";
import React from "react";
import TaskItem from "./TaskItem";
import { Task } from "@/app/_types/Task";
import { useTaskContext } from "@/app/_context/TaskContext";
interface TaskListProps {
  tasks: Task[];
  loading: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  updatingTaskId: number | null;
  deletingTask: number | null;
}

const TaskList: React.FC<TaskListProps> = (
  {
    // tasks,
    // onToggle,
    // onDelete,
    // loading,
    // updatingTaskId,
    // deletingTask,
  }
) => {
  const {
    loading,
    tasks,
    toggleTask,
    deleteTask,
    updatingTaskId,
    deletingTask,
  } = useTaskContext();
  return (
    <div className="w-full max-w-2xl space-y-4">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
            updatingTaskId={updatingTaskId}
            deletingTask={deletingTask}
          />
        ))
      ) : (
        <p className="text-gray-400 text-center">No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;
