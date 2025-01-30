"use client";
import React, { useEffect, useState } from "react";
import TaskList from "@/app/_components/task/TaskList";
import Button from "@/app/_components/form/Button";
import { useRouter } from "next/navigation";
import colors from "@/app/_utils/colors";
import { Task } from "@/app/_types/Task";
import TaskService from "@/app/_services/TaskService";
import Spinner from "@/app/_components/Spinner"; //
import { useTaskContext } from "@/app/_context/TaskContext";
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

  // const [tasks, setTasks] = useState<Task[]>([]);
  // const [loading, setLoading] = useState(false);
  // const [deletingTask, setDeletingTask] = useState<number | null>(null);
  // const [updatingTaskId, setUpdatingTaskId] = useState<number | null>(null);
  // useEffect(() => {
  //   handleGetTasks();
  // }, []);

  // const toggleTask = async (id: number) => {
  //   try {
  //     const taskToUpdate = tasks.find((e) => e.id === id);
  //     if (!taskToUpdate) return;
  //     setUpdatingTaskId(id);
  //     await TaskService.updateTask(id, { completed: !taskToUpdate?.completed });

  //     taskToUpdate.completed = !taskToUpdate?.completed;
  //     setTasks([...tasks]);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setUpdatingTaskId(null); // ✅ Reset after update
  //   }
  // };

  // const deleteTask = async (id: number) => {
  //   try {
  //     setDeletingTask(id);
  //     await TaskService.delTasks(id);
  //     setTasks((prev) => prev.filter((task) => task.id !== id));
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setDeletingTask(null);
  //   }
  // };

  // const handleGetTasks = async () => {
  //   try {
  //     setLoading(true);
  //     const tasks = await TaskService.getTasks();
  //     setTasks(tasks);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

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
