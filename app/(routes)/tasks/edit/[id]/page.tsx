"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import TaskForm from "@/app/_components/TaskForm";
import TaskService from "@/app/_services/TaskService";
import { Task } from "@/app/_types/Task";
import colors from "@/app/_utils/colors";

const EditTaskPage: React.FC = () => {
  const router = useRouter();
  const { id } = useParams();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [updating, setUpdating] = useState<boolean>(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const fetchedTasks = await TaskService.getTasks();
        setTasks(fetchedTasks);

        const foundTask = fetchedTasks.find((t) => t.id === Number(id));
        if (foundTask) {
          setTask(foundTask);
        }
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [id]);

  const handleUpdateTask = async (updatedTitle: string, color: string) => {
    if (!id || !task) return;

    try {
      setUpdating(true);
      const updatedTask = { title: updatedTitle, color };
      const success = await TaskService.updateTask(Number(id), updatedTask);

      if (success) {
        setTasks((prevTasks) =>
          prevTasks.map((t) =>
            t.id === Number(id) ? { ...t, ...updatedTask } : t
          )
        );
        router.push("/tasks");
      }
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
