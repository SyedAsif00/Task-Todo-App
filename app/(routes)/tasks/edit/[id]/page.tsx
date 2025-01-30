"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import TaskForm from "@/app/_components/TaskForm";
import { useTaskContext } from "@/app/_context/TaskContext";
import colors from "@/app/_utils/colors";
import { Task } from "@/app/_types/Task";

const EditTaskPage: React.FC = () => {
  const router = useRouter();
  const { id } = useParams();
  const { tasks, updateTask } = useTaskContext(); // ✅ Use updateTask from context
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [updating, setUpdating] = useState<boolean>(false);

  useEffect(() => {
    if (tasks.length > 0) {
      const foundTask = tasks.find((t) => t.id === Number(id));
      if (foundTask) {
        setTask(foundTask);
      }
      setLoading(false);
    }
  }, [id, tasks]);

  const handleUpdateTask = async (updatedTitle: string, color: string) => {
    if (!id || !task) return;

    try {
      setUpdating(true);
      await updateTask(Number(id), { title: updatedTitle, color }); // ✅ Use updateTask()
      router.push("/tasks"); // ✅ Redirect after updating
    } catch (error) {
      console.error("Error updating task:", error);
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="flex flex-col items-center px-6 py-12 text-white">
      {loading ? (
        <p>Loading task...</p>
      ) : task ? (
        <TaskForm
          title="Edit Task"
          buttonText={updating ? "Updating..." : "Update Task"}
          initialTask={task.title}
          initialColor={task.color ?? colors.blue}
          onSubmit={handleUpdateTask}
        />
      ) : (
        <p className="text-red-500">Task not found</p>
      )}
    </div>
  );
};

export default EditTaskPage;
