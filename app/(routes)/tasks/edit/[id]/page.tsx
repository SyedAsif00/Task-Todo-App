"use client";
import React from "react";
import { useRouter, useParams } from "next/navigation";
import TaskForm from "@/app/_components/TaskForm";

const EditTaskPage: React.FC = () => {
  const router = useRouter();
  const { id } = useParams();

  const handleUpdateTask = (updatedTask: string, color: string) => {
    console.log("Updated Task:", { id, text: updatedTask, color });
    router.push("/tasks");
  };

  return (
    <div className="flex flex-col items-center px-6 py-12 text-white">
      <TaskForm
        title="Edit Task"
        buttonText="Update Task"
        onSubmit={handleUpdateTask}
      />
    </div>
  );
};

export default EditTaskPage;
