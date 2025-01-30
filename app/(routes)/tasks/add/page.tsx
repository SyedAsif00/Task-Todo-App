"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import TaskForm from "@/app/_components/TaskForm";
import { useTaskContext } from "@/app/_context/TaskContext";

const AddTaskPage: React.FC = () => {
  const [creatingTask, setCreatingTask] = useState(false);
  const router = useRouter();
  const { addTask } = useTaskContext(); // ✅ This will now work

  const handleAddTask = async (task: string, color: string) => {
    try {
      setCreatingTask(true);
      const newTask = { title: task, color, completed: false };
      await addTask(newTask); // ✅ Now properly calls context function
      router.push("/tasks"); // ✅ Redirect after adding
    } catch (error) {
      console.error("Error adding task:", error);
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
