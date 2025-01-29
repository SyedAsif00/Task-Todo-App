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

  // State for tasks (temporary, will be replaced with backend integration)
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    handleGetTasks();
  }, []);

  // Toggle Task Completion
  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete Task
  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
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
