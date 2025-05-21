import React from "react";
import KanbanColumn from "./KanbanColumn";

interface Task {
  id: string;
  name: string;
  status: "To Do" | "In Progress" | "Completed";
  assignee?: string;
}

interface KanbanBoardProps {
  tasks: Task[];
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ tasks }) => {
  const todoTasks = tasks.filter((task) => task.status === "To Do");
  const inProgressTasks = tasks.filter((task) => task.status === "In Progress");
  const completedTasks = tasks.filter((task) => task.status === "Completed");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      <KanbanColumn
        title="To Do"
        tasks={todoTasks}
        columnColor="bg-red-100"
        titleColor="text-red-700"
      />
      <KanbanColumn
        title="In Progress"
        tasks={inProgressTasks}
        columnColor="bg-yellow-100"
        titleColor="text-yellow-700"
      />
      <KanbanColumn
        title="Completed"
        tasks={completedTasks}
        columnColor="bg-green-100"
        titleColor="text-green-700"
      />
    </div>
  );
};

export default KanbanBoard;
