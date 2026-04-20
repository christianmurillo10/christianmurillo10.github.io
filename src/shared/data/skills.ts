import type { Skill, TechStack } from "@/entities/profile/model/types";

export const primarySkills: Skill[] = [
  { name: "Node.js" },
  { name: "TypeScript/JavaScript" },
  { name: "Express.js/Nest.js" },
  { name: "React.js/Next.js" },
  { name: "Vue.js/Nuxt.js" },
  { name: "PostgreSQL/MySQL/DynamoDB" },
  { name: "AWS Serverless" },
];

export const otherKnowledge: string[] = [
  "Prisma, Sequelize, Drizzle",
  "Kafka, Redis",
  "Docker, AWS (Lambda, API Gateway, CloudFormation, SQS, SF, EC2, S3, Route 53, DDB)",
  "Vitest, Swagger, OpenAPI",
  "Tailwind CSS, Antd, Material UI, Vuetify, Bootstrap",
  "GitHub, GitLab, Bitbucket",
  "Clickup, JIRA, Confluence",
  "Trello, Postman, VS Code",
];

export const techStacks: TechStack[] = [
  { name: "HTML", src: "/images/technologies/html.png" },
  { name: "CSS", src: "/images/technologies/css.png" },
  { name: "JavaScript", src: "/images/technologies/javascript.png" },
  { name: "TypeScript", src: "/images/technologies/typescript.png" },
  { name: "Node.js", src: "/images/technologies/nodejs.png" },
  { name: "Express.js", src: "/images/technologies/expressjs.png" },
  { name: "React.js", src: "/images/technologies/reactjs.png" },
  { name: "Vue.js", src: "/images/technologies/vuejs.png" },
  { name: "Next.js", src: "/images/technologies/nextjs.png" },
  { name: "Nuxt.js", src: "/images/technologies/nuxtjs.png" },
  { name: "PHP", src: "/images/technologies/php.png" },
  { name: "MySQL", src: "/images/technologies/mysql.png" },
  { name: "PostgreSQL", src: "/images/technologies/postgesql.png" },
  { name: "Docker", src: "/images/technologies/docker.png" },
  { name: "GitHub", src: "/images/technologies/github.png" },
  { name: "GitLab", src: "/images/technologies/gitlab.png" },
  { name: "Bitbucket", src: "/images/technologies/bitbucket.png" },
  { name: "AWS", src: "/images/technologies/aws.png" },
  { name: "Digital Ocean", src: "/images/technologies/digital-ocean.png" },
];
