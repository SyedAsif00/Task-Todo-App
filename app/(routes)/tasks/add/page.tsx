"use client";
import React from "react";
import { useRouter } from "next/navigation";
import TaskForm from "@/app/_components/TaskForm";
import Image from "next/image";
import Button from "@/app/_components/form/Button";

const AddTaskPage: React.FC = () => {
  const router = useRouter();

  const handleAddTask = (task: string, color: string) => {
    console.log("New Task Added:", { task, color });
    router.push("/tasks");
  };

  return (
    <div className="flex flex-col items-center px-6 py-12 text-white">
      <TaskForm
        title="Add Task"
        buttonText="Add Task"
        onSubmit={(task, color) => console.log("New Task Added:", task, color)}
      />
    </div>
  );
};

export default AddTaskPage;
