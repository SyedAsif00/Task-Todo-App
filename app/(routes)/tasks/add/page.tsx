"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import TaskForm from "@/app/_components/TaskForm";
import TaskService from "@/app/_services/TaskService";
import { Task } from "@/app/_types/Task";
const AddTaskPage: React.FC = () => {
  const [creatingTask, setCreatingTask] = useState(false);
  const router = useRouter();

  const handleAddTask = async (task: string, color: string) => {
    try {
      setCreatingTask(true);
      const newTask = {
        title: task,
        color: color,
        completed: false,
      };
      await TaskService.createTask(newTask);
    } catch (error) {
      console.log(error);
    } finally {
      setCreatingTask(false);
    }
  };

  return (
    <div className="flex flex-col items-center px-6 py-12 text-white">
      <TaskForm
        title="Add Task"
        buttonText={creatingTask ? "Adding..." : "Add Task"}
        onSubmit={handleAddTask}
      />
    </div>
  );
};

export default AddTaskPage;
