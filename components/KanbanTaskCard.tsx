import React from "react";

interface Task {
  id: string;
  name: string;
  status: "To Do" | "In Progress" | "Completed";
  assignee?: string;
}

interface KanbanTaskCardProps {
  task: Task;
}

const KanbanTaskCard: React.FC<KanbanTaskCardProps> = ({ task }) => {
  return (
    <div className="bg-white p-3 rounded-md shadow hover:shadow-lg transition-shadow border border-gray-200">
      <h4 className="text-sm font-medium text-gray-800">{task.name}</h4>
      {task.assignee && (
        <p className="text-xs text-gray-500 mt-1">
          Assigned to: {task.assignee}
        </p>
      )}
      {/* Add more task details here if needed, e.g., due date, priority */}
    </div>
  );
};

export default KanbanTaskCard;
