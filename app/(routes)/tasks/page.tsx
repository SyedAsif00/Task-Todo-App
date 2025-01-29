"use client";
import React, { useEffect, useState } from "react";
import TaskList from "@/app/_components/task/TaskList";
import Button from "@/app/_components/form/Button";
import { useRouter } from "next/navigation";
import colors from "@/app/_utils/colors";
import { Task } from "@/app/_types/Task";
import TaskService from "@/app/_services/TaskService";

const TasksPage: React.FC = () => {
  const router = useRouter();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [deletingTask, setDeletingTask] = useState(false);
  useEffect(() => {
    handleGetTasks();
  }, []);

  // Toggle Task Completion
  const toggleTask = async (id: number) => {
    // setTasks((prev) =>
    //   prev.map((task) =>
    //     task.id === id ? { ...task, completed: !task.completed } : task
    //   )
    // );
    try {
      const taskToUpdate = tasks.find((e) => e.id === id);
      if (!taskToUpdate) return;
      setDeletingTask(true);
      await TaskService.updateTask(id, { completed: !taskToUpdate?.completed });

      taskToUpdate.completed = !taskToUpdate?.completed;
      setTasks([...tasks]);
    } catch (error) {
      console.log(error);
    } finally {
      setDeletingTask(false);
    }
  };

  // Delete Task
  const deleteTask = async (id: number) => {
    try {
      setDeletingTask(true);
      await TaskService.delTasks(id);
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    } finally {
      setDeletingTask(false);
    }
  };

  const handleGetTasks = async () => {
    try {
      setLoading(true);
      const tasks = await TaskService.getTasks();
      setTasks(tasks);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      {/* Create Task Button */}
      <div className="mb-6 w-full max-w-2xl">
        <Button
          onClick={() => router.push("/tasks/add")}
          className="w-full bg-[colors.btnColor] hover:bg-opacity-90"
        >
          Create Task
        </Button>
      </div>

      {/* Task List */}
      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        loading={loading}
      />
    </div>
  );
};

export default TasksPage;
