import type { Project, PortfolioTab } from "@/entities/project/model/types";

export const portfolioTabs: PortfolioTab[] = [
  { name: "All", value: "all" },
  { name: "Company", value: "company" },
  { name: "Freelance", value: "freelance" },
  { name: "Personal", value: "personal" },
];

export const projects: Project[] = [
  {
    name: "Own. (Social Media App)",
    description: "Administrative web application to configure, monitor, and track user credits.",
    images: [
      "/images/portfolio/freelance/own/own-admin-login.png",
      "/images/portfolio/freelance/own/own-admin-dashboard.png",
    ],
    techStacks: ["React.js", "Nest.js", "TypeScript", "WebSocket (Ably)"],
    category: "freelance",
    details: [
      "Designed and built an administrative web application to configure, monitor, and track user credits.",
      "Developed new feature for gifting, wallet and livestream management",
      "Integrated third party websocket platform for real-time ranks updates.",
    ],
  },
  {
    name: "Muse Systems - AI Relationship Engine for Med Spas",
    description: "AI-assisted appointment scheduling platform with Google Calendar integration.",
    images: [
      "/images/portfolio/freelance/muse/muse-login.png",
      "/images/portfolio/freelance/muse/muse-admin-dashboard.png",
      "/images/portfolio/freelance/muse/muse-appointment.png",
    ],
    techStacks: ["React.js", "Node.js", "AWS Serverless (Lambda, API Gateway)", "TypeScript", "Google Calendar API"],
    category: "freelance",
    details: [
      "Responsible for end-to-end frontend and backend development.",
      "Integrated Google Calendar and third party API to automate schedule synchronization, improving scheduling accuracy and reducing manual input.",
    ],
  },
  {
    name: "Spot The Ball (Australia)",
    description: "Competition website in Australia.",
    images: ["/images/portfolio/company/mosed/spottheball.png"],
    techStacks: ["React.js", "Node.js", "JavaScript", "TypeScript", "Express.js", "PostgreSQL"],
    category: "company",
  },
  {
    name: "Prize Jar",
    description: "Competition website in UK.",
    images: ["/images/portfolio/company/mosed/prizejar.png"],
    techStacks: ["Next.js", "Node.js", "JavaScript", "TypeScript", "Express.js", "PostgreSQL"],
    category: "company",
  },
  {
    name: "Prize Stars",
    description: "Competition website in UK.",
    images: ["/images/portfolio/company/mosed/prizestars.png"],
    techStacks: ["Next.js", "Node.js", "JavaScript", "TypeScript", "Express.js", "PostgreSQL"],
    category: "company",
  },
  {
    name: "Talk Sport Win",
    description: "Competition website in UK.",
    images: ["/images/portfolio/company/mosed/talksportwin.png"],
    techStacks: ["Next.js", "Node.js", "JavaScript", "TypeScript", "Express.js", "PostgreSQL"],
    category: "company",
  },
  {
    name: "Consolidated Packaging Enterprises (Inventory System)",
    description: "Inventory System for food packaging materials.",
    images: ["/images/portfolio/company/tranzend/cpe.jpeg"],
    techStacks: ["HTML", "CSS", "jQuery", "JavaScript", "Bootstrap", "PHP", "Yii 1 Framework", "MySQL"],
    category: "company",
  },
  {
    name: "G.P Angeles Law Firm (Accounting System)",
    description: "Accounting System for law firm.",
    images: ["/images/portfolio/company/tranzend/gpa.jpeg"],
    techStacks: ["HTML", "CSS", "jQuery", "JavaScript", "Bootstrap", "PHP", "Yii 1 Framework", "MySQL"],
    category: "company",
  },
  {
    name: "Safety Crew Software",
    description: "Health and Safety Management System.",
    images: ["/images/portfolio/freelance/scsd/login.png", "/images/portfolio/freelance/scsd/dashboard.png"],
    techStacks: ["HTML", "CSS", "jQuery", "JavaScript", "Bootstrap", "PHP", "Yii 1 Framework", "MySQL"],
    category: "freelance",
    details: [
      "Designed and delivered a scalable Health and Safety Management System, improving incident tracking, compliance, and operational visibility.",
      "Built centralized dashboards to monitor safety metrics and improve visibility across operations.",
    ],
  },
  {
    name: "Patient Monitoring",
    description: "Smart Watch Application with Alarm and SMS Notification for COVID-19 Patient with Geo-Mapping.",
    images: [
      "/images/portfolio/freelance/patient-monitoring/login.png",
      "/images/portfolio/freelance/patient-monitoring/dashboard.png",
      "/images/portfolio/freelance/patient-monitoring/geomapping.png",
      "/images/portfolio/freelance/patient-monitoring/reports.png",
      "/images/portfolio/freelance/patient-monitoring/patients.png",
      "/images/portfolio/freelance/patient-monitoring/schedules.png",
    ],
    techStacks: ["Vue.js", "Node.js", "JavaScript", "TypeScript", "Express.js", "PostgreSQL"],
    category: "freelance",
    details: [
      "Integrated SMS notification system to ensure timely communication during emergencies.",
      "Built geo-mapping functionality to track patient location and support rapid response and monitoring.",
    ],
  },
  {
    name: "ELS Philippines Inc.",
    description: "Automated Washing Machine System.",
    images: [],
    techStacks: ["PHP", "JavaScript", "MySQL"],
    category: "freelance",
    details: [
      "Contributed to the development of an automated washing machine system, focusing on CRUD operations and backend data handling.",
      "Worked closely with the development team to debug issues and improve application performance.",
    ],
  },
  {
    name: "KALINGAPP",
    description: "Geo-Mapped Incident Monitoring System (Web & Android).",
    images: [],
    techStacks: ["Vue.js", "Node.js", "Express.js", "PostgreSQL", "Google Maps API"],
    category: "freelance",
    details: [
      "Developed backend APIs and web application modules for a geo-mapped incident monitoring system, enabling real-time reporting and tracking.",
    ],
  },
  {
    name: "EACOMTECH INC.",
    description: "Content Management System (CMS) for Dynamic Website.",
    images: ["/images/portfolio/freelance/eacomtech.jpeg"],
    techStacks: ["HTML", "CSS", "jQuery", "JavaScript", "Bootstrap", "PHP", "Yii 1 Framework", "MySQL"],
    category: "freelance",
    details: [
      "Served as a core Full-Stack Developer in building a CMS-driven website with dynamic content management.",
      "Implemented admin dashboard features for managing website pages, media, and structured content.",
    ],
  },
];
