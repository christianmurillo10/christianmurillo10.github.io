import type { WorkExperience, Education } from "@/entities/work-experience/model/types";

export const workHistories: WorkExperience[] = [
  {
    company: "Prosource Global BPO Inc. (Bevz)",
    position: "Software Engineer",
    employmentDate: "February 13, 2023 – April 23, 2026",
    descriptions: [
      "Architected and developed an enterprise admin tool from the ground up.",
      "Integrated multiple third-party delivery service APIs (end-to-end).",
      "Designed and implemented new features across backend microservices and frontend modules, consistently meeting sprint deadlines.",
      "Refactored legacy REST API endpoints into a layered architecture, improving code maintainability and scalability.",
      "Collaborated with a cross-functional team of 8+ engineers, product managers, and designers across US and PH time zones.",
    ],
  },
  {
    company: "Mosed Corporation",
    position: "Full Stack Developer",
    employmentDate: "June 1, 2020 – February 10, 2023",
    descriptions: [
      "Served as interim team lead for a development team, coordinating sprint planning, code reviews, and deployments.",
      "Maintained and enhanced backend RESTful API microservices and a CMS platform.",
      "Maintaining existing AWS infrastructure.",
      "Collaborated closely with other team members to plan, design, and develop robust solutions.",
      "Plan, design and develop database for system enhancement.",
    ],
  },
  {
    company: "W-Tech Solutions (New Oriental Club 88 Corporation)",
    position: "Full Stack Developer",
    employmentDate: "October 1, 2018 – May 29, 2020",
    descriptions: [
      "Monitoring online casino game and chat system.",
      "Maintaining and modified existing back-office web application.",
      "Implemented advanced features on chat system.",
      "Developed a RESTFUL API for frontend game application.",
      "Plan, design and develop database for system enhancement.",
    ],
  },
  {
    company: "Tranzend Solutions and Trading Corporation",
    position: "Software Developer",
    employmentDate: "January 2, 2017 – July 20, 2018",
    descriptions: [
      "Provide mentoring services to newly developers as needed.",
      "Collaborated closely with other team members to plan, design, and develop robust solutions.",
      "Plan, design and develop database for software requirements.",
      "Design, develop and implemented API for SMS software system.",
      "Research, design and implement a friendly user and advanced Google Maps Monitoring and Tracking System.",
    ],
  },
];

export const educations: Education[] = [
  {
    school: "Lyceum of the Philippines University Manila",
    course: "Bachelor of Science in Information Technology",
    batch: "2014 – 2016",
  },
  {
    school: "AMA Computer University",
    course: "Bachelor of Science in Information Technology",
    batch: "2013 – 2014",
  },
  {
    school: "Far Eastern University - EAC",
    course: "Bachelor of Science in Information Technology Specialization of Animation and Game Developer",
    batch: "2012 – 2013",
  },
];
