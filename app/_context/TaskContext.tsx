"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { Task } from "@/app/_types/Task";
import TaskService from "@/app/_services/TaskService";

interface TaskContextType {
  tasks: Task[];
  loading: boolean;
  updatingTaskId: number | null;
  deletingTaskId: number | null;
  getTasks: () => Promise<void>;
  updateTask: (id: number, updatedTask: Partial<Task>) => Promise<void>; // ✅ Add updateTask type

  addTask: (task: Task) => Promise<void>;
  toggleTask: (id: number) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [updatingTaskId, setUpdatingTaskId] = useState<number | null>(null);
  const [deletingTaskId, setDeletingTaskId] = useState<number | null>(null);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    try {
      setLoading(true);
      const fetchedTasks = await TaskService.getTasks();
      setTasks(fetchedTasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Add Task (Ensure it is in the provider)
  const addTask = async (task: Task) => {
    try {
      await TaskService.createTask(task);
      await getTasks(); // ✅ Fetch updated tasks from backend
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const toggleTask = async (id: number) => {
    try {
      setUpdatingTaskId(id);
      const taskToUpdate = tasks.find((task) => task.id === id);
      if (!taskToUpdate) return;

      const updatedTask = {
        ...taskToUpdate,
        completed: !taskToUpdate.completed,
      };
      await TaskService.updateTask(id, { completed: updatedTask.completed });

      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, completed: updatedTask.completed } : task
        )
      );
    } catch (error) {
      console.error("Error updating task:", error);
    } finally {
      setUpdatingTaskId(null);
    }
  };

  const deleteTask = async (id: number) => {
    try {
      setDeletingTaskId(id);
      await TaskService.delTasks(id);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    } finally {
      setDeletingTaskId(null);
    }
  };
  const updateTask = async (id: number, updatedTask: Partial<Task>) => {
    try {
      setUpdatingTaskId(id);
      await TaskService.updateTask(id, updatedTask); // ✅ Update in backend

      setTasks((prevTasks) =>
        prevTasks.map(
          (task) => (task.id === id ? { ...task, ...updatedTask } : task) // ✅ Update in local state
        )
      );
    } catch (error) {
      console.error("Error updating task:", error);
    } finally {
      setUpdatingTaskId(null);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        updatingTaskId,
        deletingTaskId,
        getTasks,
        addTask, // ✅
        toggleTask,
        deleteTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};
