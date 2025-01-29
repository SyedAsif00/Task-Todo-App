"use client";
import React from "react";
import { useRouter, useParams } from "next/navigation";
import TaskForm from "@/app/_components/TaskForm";
import Image from "next/image";
import Button from "@/app/_components/form/Button";
// Simulate fetching task from backend
const fetchTask = (id: string) => ({
  id,
  text: "Sample Task " + id,
  color: "#4EA8DE",
});

const EditTaskPage: React.FC = () => {
  const router = useRouter();
  const { id } = useParams();
  const task = fetchTask(id as string); // Get task data

  const handleUpdateTask = (updatedTask: string, color: string) => {
    console.log("Updated Task:", { id, text: updatedTask, color });
    router.push("/tasks");
  };

  return (
    <div className="flex flex-col items-center px-6 py-12 text-white">
      <TaskForm
        title="Edit Task"
        buttonText="Update Task"
        initialTask={task.text}
        initialColor={task.color}
        onSubmit={handleUpdateTask}
      />
    </div>
  );
};

export default EditTaskPage;
