import React from "react";
import ProjectTimelineItem from "./ProjectTimelineItem";

interface Milestone {
  id: string;
  name: string;
  targetDate: string;
  status: "Pending" | "In Progress" | "Completed" | "Delayed";
}

interface ProjectTimelineProps {
  milestones: Milestone[];
}

const ProjectTimeline: React.FC<ProjectTimelineProps> = ({ milestones }) => {
  if (!milestones || milestones.length === 0) {
    return (
      <p className="text-gray-600">
        No milestones defined for this project yet.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {milestones.map((milestone, index) => (
        <ProjectTimelineItem
          key={milestone.id}
          milestone={milestone}
          isLast={index === milestones.length - 1}
        />
      ))}
    </div>
  );
};

export default ProjectTimeline;
