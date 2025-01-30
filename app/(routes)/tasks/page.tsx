"use client";
import React, { useEffect, useState } from "react";
import TaskList from "@/app/_components/task/TaskList";
import Button from "@/app/_components/form/Button";
import { useRouter } from "next/navigation";

import Spinner from "@/app/_components/Spinner"; //
import { useTaskContext } from "@/app/_context/TaskContext";
import TasksHeader from "@/app/_components/task/TaskHeader";
const TasksPage: React.FC = () => {
  const router = useRouter();
  const {
    loading,
    tasks,
    toggleTask,
    deleteTask,
    updatingTaskId,
    deletingTask,
  } = useTaskContext();

  return (
    <div className="flex flex-col items-center p-6 min-h-screen">
      {loading ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <Spinner size="w-10 h-10" color="border-blue-500" />
          <p className="text-white mt-4 text-lg font-semibold">
            Loading tasks...
          </p>
        </div>
      ) : (
        <>
          <div className="mb-6 w-full max-w-2xl">
            <Button
              onClick={() => router.push("/tasks/add")}
              className="w-full bg-blue-600 hover:bg-opacity-90"
            >
              Create Task
            </Button>
          </div>

          <TasksHeader />

          <TaskList
            tasks={tasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
            loading={loading}
            deletingTask={deletingTask}
            updatingTaskId={updatingTaskId}
          />
        </>
      )}
    </div>
  );
};

export default TasksPage;
