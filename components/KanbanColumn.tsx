import React from "react";
import KanbanTaskCard from "./KanbanTaskCard";

interface Task {
  id: string;
  name: string;
  status: "To Do" | "In Progress" | "Completed";
  assignee?: string;
}

interface KanbanColumnProps {
  title: string;
  tasks: Task[];
  columnColor?: string;
  titleColor?: string;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({
  title,
  tasks,
  columnColor = "bg-gray-100",
  titleColor = "text-gray-700",
}) => {
  return (
    <div
      className={`p-4 rounded-lg shadow ${columnColor} h-full min-h-[200px]`}
    >
      <h3 className={`text-lg font-semibold mb-4 ${titleColor}`}>
        {title} ({tasks.length})
      </h3>
      {tasks.length === 0 ? (
        <p className="text-sm text-gray-500">No tasks in this stage.</p>
      ) : (
        <div className="space-y-3">
          {tasks.map((task) => (
            <KanbanTaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default KanbanColumn;
