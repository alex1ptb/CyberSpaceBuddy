export interface NavLinkItem {
  name: string;
  path: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  details?: string;
  image?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  frequency: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

// Fix: Moved from LoginPage.tsx
export interface Message {
  id: string;
  sender: "Client" | "Cyberspace Buddy Team";
  text: string;
  timestamp: Date;
  isReadByClient?: boolean;
}

// Fix: Moved from LoginPage.tsx
export interface Notification {
  id: string;
  text: string;
  timestamp: Date;
  isRead: boolean;
  link?: string; // e.g., to a specific project or invoice
}

// Fix: Moved from LoginPage.tsx
export interface Task {
  id: string;
  name: string;
  status: "To Do" | "In Progress" | "Completed";
  assignee?: string;
}

// Fix: Moved from LoginPage.tsx
export interface Milestone {
  id: string;
  name: string;
  targetDate: string;
  status: "Pending" | "In Progress" | "Completed" | "Delayed";
}

// Fix: Moved from LoginPage.tsx
export interface Project {
  id: number;
  name: string;
  status: string;
  link: string;
  fullDescription: string;
  projectManager: string;
  startDate: string;
  expectedEndDate: string;
  tasks: Task[];
  milestones: Milestone[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}
