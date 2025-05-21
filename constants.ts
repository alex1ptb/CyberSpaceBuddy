import {
  NavLinkItem,
  FAQ,
  Service,
  PricingPlan,
  Project,
  Message,
  Notification,
} from "./types";
import { HomeIcon } from "./components/icons/HomeIcon";
import { LightBulbIcon } from "./components/icons/LightBulbIcon";
import { PaperAirplaneIcon } from "./components/icons/PaperAirplaneIcon";
import { QuestionMarkCircleIcon } from "./components/icons/QuestionMarkCircleIcon";
import { UserCircleIcon } from "./components/icons/UserCircleIcon";
import { CreditCardIcon } from "./components/icons/CreditCardIcon";
import { BriefcaseIcon } from "./components/icons/BriefcaseIcon";
import { AcademicCapIcon } from "./components/icons/AcademicCapIcon";
import { ShieldCheckIcon } from "./components/icons/ShieldCheckIcon";
import { SparklesIcon } from "./components/icons/SparklesIcon";
import { DocumentTextIcon } from "./components/icons/DocumentTextIcon";
import { ChatBubbleIcon } from "./components/icons/ChatBubbleIcon";
import { MagnifyingGlassIcon } from "./components/icons/MagnifyingGlassIcon";
import { UsersIcon } from "./components/icons/UsersIcon";
import { ClipboardListIcon } from "./components/icons/ClipboardListIcon";
import { CalendarDaysIcon } from "./components/icons/CalendarDaysIcon";
import { LifebuoyIcon } from "./components/icons/LifebuoyIcon";
import { ChatBubbleLeftRightIcon } from "./components/icons/ChatBubbleLeftRightIcon";
import { BellIcon } from "./components/icons/BellIcon";
import { UserGroupIcon } from "./components/icons/UserGroupIcon";
import { CogIcon } from "./components/icons/CogIcon";
import { BuildingOffice2Icon } from "./components/icons/BuildingOffice2Icon"; // New Icon

export const APP_NAME = "Cyberspace Buddy";
export const APP_TAGLINE = "Your Partner for Digital Growth & Automation";
export const GEMINI_TEXT_MODEL = "gemini-2.5-flash-preview-04-17";

export const NAV_LINKS: { [key: string]: NavLinkItem } = {
  HOME: { name: "Home", path: "/", icon: HomeIcon },
  SERVICES: { name: "Our Services", path: "/services", icon: BriefcaseIcon },
  REQUEST_QUOTE: {
    name: "Request Consultation",
    path: "/request-quote",
    icon: LightBulbIcon,
  },
  SERVICE_PACKAGES: {
    name: "Subscription Plans",
    path: "/subscription-plans",
    icon: CreditCardIcon,
  }, // Updated name
  CAREERS: { name: "Careers", path: "/careers", icon: BuildingOffice2Icon }, // New Link
  TEAM_PORTAL: {
    name: "Team Portal",
    path: "/team-admin-portal",
    icon: UserGroupIcon,
  },
  CLIENT_PORTAL: {
    name: "Client Portal",
    path: "/client-portal",
    icon: UserCircleIcon,
  },
  FAQ: { name: "FAQ", path: "/faq", icon: QuestionMarkCircleIcon },
  CONTACT: { name: "Contact Us", path: "/contact", icon: PaperAirplaneIcon },
  PAY_INVOICE: {
    name: "Pay Invoice",
    path: "/pay-invoice",
    icon: DocumentTextIcon,
  },
  SUBMIT_TICKET: {
    name: "Submit Ticket",
    path: "/submit-ticket",
    icon: LifebuoyIcon,
  },
};

export const FAQ_DATA: FAQ[] = [
  {
    question: "How can your automation services help my SMB?",
    answer:
      "Our automation services, including Google Workspace and custom solutions, streamline repetitive tasks, reduce errors, and free up your team. This improves efficiency for tasks like data entry, report generation, email management, and complex workflows, allowing you to focus on core business activities.",
  },
  {
    question: "What is SEO and why is it important for my business?",
    answer:
      "Search Engine Optimization (SEO) is the process of improving your website's visibility on search engines like Google. Effective SEO drives more organic (non-paid) traffic to your site, increasing leads, brand awareness, and ultimately, revenue. It's crucial for long-term online success.",
  },
  {
    question: "How can you help with social media growth?",
    answer:
      "We develop tailored social media strategies to increase your brand's engagement, reach, and follower base. This includes content creation, platform management, targeted advertising, and community interaction to build a loyal online presence and drive customer acquisition.",
  },
  {
    question: "What types of custom apps and web solutions do you build?",
    answer:
      "We develop a wide range of custom solutions, from internal tools and client portals to full-fledged web and mobile applications. These are tailored to your specific business processes, often integrating with Google Cloud Platform (GCP), your existing systems, and providing unique functionalities.",
  },
  {
    question:
      "What is involved in your Digital Strategy & Consultation service?",
    answer:
      "Our consultation starts with understanding your business goals, challenges, and current digital landscape. We then identify opportunities across automation, SEO, social media, and custom development, proposing a holistic strategy to achieve your objectives. Request a consultation to get started!",
  },
  {
    question: "How does AI fit into your services?",
    answer:
      "AI can enhance many of our services, from intelligent automations and predictive analytics to smarter SEO insights and personalized social media content. We offer AI-Enhanced Solutions as a way to leverage cutting-edge technology for advanced capabilities.",
  },
];

export const SERVICES_DATA: Service[] = [
  {
    id: "seo-optimization",
    title: "SEO Optimization Services",
    description:
      "Boost your online visibility and attract more customers with our expert SEO strategies, from keyword research to technical optimization.",
    icon: MagnifyingGlassIcon,
    details:
      "We dive deep into keyword analysis, on-page and off-page SEO, technical site audits, and content strategy to improve your search engine rankings and drive qualified organic traffic.",
    image: "https://picsum.photos/seed/seo/600/400",
  },
  {
    id: "social-media-growth",
    title: "Social Media Growth & Management",
    description:
      "Expand your reach, engage your audience, and build brand loyalty with our comprehensive social media marketing services.",
    icon: UsersIcon,
    details:
      "Our team crafts engaging content, manages your social media profiles, runs targeted ad campaigns, and fosters community interaction to grow your online presence effectively.",
    image: "https://picsum.photos/seed/socialmedia/600/400",
  },
  {
    id: "google-sheets-automation",
    title: "Google Sheets & Excel Automation",
    description:
      "Automate data entry, calculations, reporting, and dashboards in Google Sheets and Excel. From complex formulas to scripts.",
    icon: AcademicCapIcon,
    details:
      "Unlock the full power of your spreadsheets. We create custom scripts, integrate with other services, build dynamic dashboards, and automate repetitive tasks to save you hours.",
    image: "https://picsum.photos/seed/sheetsautomation/600/400",
  },
  {
    id: "workspace-addons",
    title: "Google Workspace Add-on Development",
    description:
      "Custom add-ons for Gmail, Docs, Sheets, and Slides to extend functionality and integrate seamlessly with your workflow.",
    icon: SparklesIcon,
    details:
      "Need a specific tool that Google Workspace doesn’t offer? We build custom add-ons that appear right within your favorite Google apps, tailored to your business requirements.",
    image: "https://picsum.photos/seed/workspaceaddons/600/400",
  },
  {
    id: "custom-automations",
    title: "Advanced Business Automation",
    description:
      "Tailored automation solutions beyond Google Workspace, streamlining complex workflows across your business operations.",
    icon: ShieldCheckIcon,
    details:
      "We analyze your end-to-end processes and implement custom automation solutions using various technologies to improve efficiency, reduce manual effort, and connect disparate systems.",
    image: "https://picsum.photos/seed/customauto/600/400",
  },
  {
    id: "custom-app-dev",
    title: "Custom App & Web Development",
    description:
      "Bespoke web and mobile applications designed to solve unique business challenges and enhance user experiences.",
    icon: LightBulbIcon,
    details:
      "From internal dashboards and client portals to customer-facing applications, we design and develop scalable, secure, and user-friendly web and mobile apps, often leveraging GCP.",
    image: "https://picsum.photos/seed/customapps/600/400",
  },
  {
    id: "ai-enhancements",
    title: "AI-Enhanced Solutions",
    description:
      "Incorporate AI capabilities into your digital solutions for smarter decision-making, personalization, and advanced features.",
    icon: SparklesIcon,
    details:
      "Add a layer of intelligence to your processes. This could involve using AI for sentiment analysis, predictive forecasting, intelligent document processing, or personalized user experiences.",
    image: "https://picsum.photos/seed/aifeatures/600/400",
  },
  {
    id: "digital-strategy-consultation",
    title: "Digital Strategy & Consultation",
    description:
      "Expert guidance to identify digital opportunities across your business and develop a strategic implementation roadmap.",
    icon: LightBulbIcon,
    details:
      "Our consultation service helps you analyze your current digital maturity, identify key areas for improvement (automation, SEO, social, apps), and create a clear plan of action.",
    image: "https://picsum.photos/seed/consultation/600/400",
  },
];

export const SERVICE_PACKAGES_DATA: PricingPlan[] = [
  {
    id: "digital-starter",
    name: "Digital Starter",
    price: "$499",
    frequency: "/month",
    features: [
      "Basic SEO Monitoring (5 Keywords)",
      "Social Media Content Calendar (1 Platform)",
      "Monthly Performance Snapshot Report",
      "Email Support (Standard Response)",
    ],
    ctaText: "Choose Starter Plan",
  },
  {
    id: "growth-pro",
    name: "Growth Pro",
    price: "$999",
    frequency: "/month",
    features: [
      "Advanced SEO Optimization (15 Keywords)",
      "Social Media Management (2 Platforms)",
      "Bi-Weekly Strategy Calls",
      "Detailed Monthly Analytics & Reporting",
      "Priority Email & Chat Support",
    ],
    ctaText: "Choose Pro Plan",
    isPopular: true,
  },
  {
    id: "business-elite",
    name: "Business Elite",
    price: "Custom", // Or specific higher price like '$1999/month' or '$20,000/year'
    frequency: "/year (or custom terms)",
    features: [
      "Full SEO & Content Strategy",
      "Comprehensive Social Media Marketing (3+ Platforms)",
      "Custom Automation Implementation (1-2 key processes)",
      "Dedicated Account Manager & Weekly Calls",
      "Custom App/Feature Development Hours",
      "24/7 Premium Support",
    ],
    ctaText: "Talk to Sales for Elite",
  },
];

export const FOOTER_LINKS = {
  COMPANY: [
    { name: "About Us", path: "/about" },
    { name: "Our Expertise", path: NAV_LINKS.SERVICES.path },
    { name: "Careers", path: NAV_LINKS.CAREERS.path }, // New Link
  ],
  LEGAL: [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  ],
  RESOURCES: [NAV_LINKS.FAQ],
  SUPPORT: [
    NAV_LINKS.CONTACT,
    { name: "Client Support", path: NAV_LINKS.CLIENT_PORTAL.path },
    NAV_LINKS.SUBMIT_TICKET,
  ],
};

export const mockClientData: {
  companyName: string;
  clientEmail: string;
  activeProjects: Project[];
  recentInvoices: {
    id: string;
    amount: string;
    status: string;
    dueDate: string;
    link: string;
  }[];
  messages: Message[];
  notifications: Notification[];
} = {
  companyName: "Example Corp Inc.",
  clientEmail: "client@examplecorp.com",
  activeProjects: [
    {
      id: 1,
      name: "SEO Overhaul for example.com",
      status: "In Progress",
      link: "#",
      fullDescription:
        "A comprehensive SEO strategy implementation including keyword research, on-page optimization, technical SEO audit, content creation, and link building initiatives to significantly improve organic search rankings and drive qualified traffic for example.com.",
      projectManager: "Alice Wonderland",
      startDate: "2024-07-01",
      expectedEndDate: "2024-10-31",
      tasks: [
        {
          id: "task-1",
          name: "Keyword Research & Analysis",
          status: "Completed",
          assignee: "Alice",
        },
        {
          id: "task-2",
          name: "On-Page Optimization (Meta, Headers, Content)",
          status: "In Progress",
          assignee: "Bob",
        },
        {
          id: "task-3",
          name: "Technical SEO Audit & Fixes",
          status: "In Progress",
          assignee: "Alice",
        },
        {
          id: "task-4",
          name: "Content Plan & Brief Creation (5 Articles)",
          status: "To Do",
          assignee: "Charlie",
        },
        {
          id: "task-5",
          name: "Initial Link Building Outreach",
          status: "To Do",
        },
      ],
      milestones: [
        {
          id: "m1-1",
          name: "Project Kick-off & Initial Audit",
          targetDate: "2024-07-15",
          status: "Completed",
        },
        {
          id: "m1-2",
          name: "Keyword Strategy Finalized & Approved",
          targetDate: "2024-07-30",
          status: "Completed",
        },
        {
          id: "m1-3",
          name: "Core On-Page Implementation Complete",
          targetDate: "2024-08-25",
          status: "In Progress",
        },
        {
          id: "m1-4",
          name: "Content Rollout - Phase 1 (2 Articles)",
          targetDate: "2024-09-15",
          status: "Pending",
        },
        {
          id: "m1-5",
          name: "Project Review & Reporting - Month 1",
          targetDate: "2024-09-30",
          status: "Pending",
        },
      ],
    },
    {
      id: 2,
      name: "Custom Sales Dashboard Development",
      status: "Awaiting Feedback",
      link: "#",
      fullDescription:
        "Development of a custom web-based sales dashboard to provide real-time insights into sales performance, key metrics, and trends. Includes integration with existing CRM and sales data sources.",
      projectManager: "Bob The Builder",
      startDate: "2024-08-01",
      expectedEndDate: "2024-11-15",
      tasks: [
        {
          id: "task-6",
          name: "Detailed Requirements Gathering & Sign-off",
          status: "Completed",
        },
        {
          id: "task-7",
          name: "UI/UX Design Mockups & Prototyping",
          status: "Completed",
        },
        {
          id: "task-8",
          name: "Backend API Development (Data Aggregation)",
          status: "In Progress",
          assignee: "David",
        },
        {
          id: "task-9",
          name: "Frontend Dashboard Implementation (Charts, Tables)",
          status: "To Do",
          assignee: "Eve",
        },
        {
          id: "task-10",
          name: "Client UAT & Feedback Collection",
          status: "To Do",
        },
      ],
      milestones: [
        {
          id: "m2-1",
          name: "Design & User Stories Approved",
          targetDate: "2024-08-10",
          status: "Completed",
        },
        {
          id: "m2-2",
          name: "Development Sprint 1 (Backend Core)",
          targetDate: "2024-08-30",
          status: "In Progress",
        },
        {
          id: "m2-3",
          name: "Alpha Version Release for Internal Review",
          targetDate: "2024-09-20",
          status: "Pending",
        },
        {
          id: "m2-4",
          name: "Beta Version for Client UAT",
          targetDate: "2024-10-15",
          status: "Pending",
        },
      ],
    },
  ],
  recentInvoices: [
    {
      id: "INV-001",
      amount: "$1,200.00",
      status: "Paid",
      dueDate: "2024-07-15",
      link: NAV_LINKS.PAY_INVOICE.path,
    },
    {
      id: "INV-002",
      amount: "$850.00",
      status: "Due Soon",
      dueDate: "2024-08-01",
      link: NAV_LINKS.PAY_INVOICE.path,
    },
  ],
  messages: [
    {
      id: "msg1",
      sender: "Cyberspace Buddy Team",
      text: "Welcome to your client portal! How can we help you today?",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    },
    {
      id: "msg2",
      sender: "Client",
      text: "Just checking in on Project X.",
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
    },
    {
      id: "msg3",
      sender: "Cyberspace Buddy Team",
      text: "Project X is on track. We just updated the timeline.",
      timestamp: new Date(Date.now() - 1000 * 60 * 15),
      isReadByClient: false,
    },
  ],
  notifications: [
    {
      id: "notif1",
      text: "Invoice INV-002 is due soon.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
      isRead: false,
      link: NAV_LINKS.PAY_INVOICE.path,
    },
    {
      id: "notif2",
      text: 'Task "Keyword Research" for SEO Overhaul completed.',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      isRead: false,
      link: "#",
    },
    {
      id: "notif3",
      text: "New message from Cyberspace Buddy Team.",
      timestamp: new Date(Date.now() - 1000 * 60 * 15),
      isRead: true,
      link: "#" /* could link to messages section */,
    },
  ],
};

export {
  ClipboardListIcon,
  CalendarDaysIcon,
  LifebuoyIcon,
  BriefcaseIcon,
  UserCircleIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  BellIcon,
  UserGroupIcon,
  CogIcon,
  DocumentTextIcon,
  SparklesIcon,
  BuildingOffice2Icon, // New Export
};
