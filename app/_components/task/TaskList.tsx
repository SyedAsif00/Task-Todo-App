import React from "react";
import { Task } from "@/app/_types/Task";
import TaskItem from "./TaskItem";
import EmptyState from "@/app/_components/task/EmptyState";

interface TaskListProps {
  tasks: Task[];
  // onToggle: (id: number) => void;
  // onDelete: (id: number) => void;
  // updatingTaskId: number | null;
  // deletingTaskId: number | null;
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
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            // onToggle={onToggle}
            // onDelete={onDelete}
            // updatingTaskId={updatingTaskId}
            // deletingTaskId={deletingTaskId}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
