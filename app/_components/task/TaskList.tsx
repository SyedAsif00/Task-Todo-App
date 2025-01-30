import React from "react";
import { Task } from "@/app/_types/Task";
import TaskItem from "./TaskItem";
import EmptyState from "@/app/_components/task/EmptyState";

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div className="w-full max-w-2xl">
      {tasks.length === 0 ? (
        <EmptyState
          title="You don't have any tasks registered yet."
          description="Create tasks and organize your to-do items."
          icon="/empty-icon.png"
        />
      ) : (
        tasks.map((task) => <TaskItem key={task.id} task={task} />)
      )}
    </div>
  );
};

export default TaskList;
