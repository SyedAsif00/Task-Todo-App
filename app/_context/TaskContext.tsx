"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { Task } from "@/app/_types/Task";
import TaskService from "@/app/_services/TaskService";
interface UpdateTaskInput {
  title?: string;
  color?: string;
  completed?: boolean;
}
interface AddTaskInput {
  title: string;
  color?: string;
  completed: boolean;
}
interface TaskContextType {
  tasks: Task[];
  loading: boolean;
  taskCount: number;
  completedCount: number;
  updatingTaskId: number | null;
  deletingTaskId: number | null;
  getTasks: () => Promise<void>;
  updateTask: (id: number, updatedTask: UpdateTaskInput) => Promise<void>;
  addTask: (task: AddTaskInput) => Promise<void>;
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
  const taskCount = tasks.filter((task) => task.completed === false).length;
  const completedCount = tasks.filter((task) => task.completed).length;

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

  const addTask = async (task: AddTaskInput) => {
    try {
      await TaskService.createTask(task);
      await getTasks();
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
  const updateTask = async (id: number, updatedTask: UpdateTaskInput) => {
    try {
      setUpdatingTaskId(id);
      await TaskService.updateTask(id, updatedTask);

      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, ...updatedTask } : task
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
        taskCount,
        completedCount,
        loading,
        updatingTaskId,
        deletingTaskId,
        getTasks,
        addTask,
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
