import type {
  Highlight,
  ServiceSummary,
  Quote,
  Testimonial,
} from "@/entities/profile/model/types";

export const summary =
  "Results-driven Software Engineer with 9+ years of experience designing, building, and scaling web applications across diverse industries. Proven track record of delivering high-performance RESTful APIs and microservices using Node.js, React, Next.js, and AWS cloud infrastructure. Skilled at translating complex business requirements into clean, maintainable code following Feature Sliced Design and Clean Architecture principles. Passionate about test-driven development and mentoring junior engineers to elevate team capability.";

export const aboutMe: string[] = [
  "Since beginning my journey as a software developer over 9 years ago, I've worked for established companies, taken on freelance projects for startups, and collaborated with talented people to create web applications and websites for both business and consumer use.",
  "I'm currently a Senior Software Engineer with a strong foundation in backend development and database design. I build scalable RESTful APIs and microservices, create responsive web applications with modern frameworks, and follow clean architecture principles including Feature Sliced Design.",
  "I also have extensive experience with AWS cloud infrastructure, Docker containerization, and CI/CD pipelines. I'm passionate about writing clean, maintainable code and mentoring junior developers.",
];

export const highlights: Highlight[] = [
  { value: 9, suffix: "+", label: "Years of Experience" },
  { value: 13, suffix: "+", label: "Projects Completed" },
  { value: 4, suffix: "", label: "Companies Worked" },
  { value: 19, suffix: "+", label: "Technologies" },
];

export const services: ServiceSummary[] = [
  {
    title: "Full Stack Applications",
    description:
      "End-to-end web applications with React/Next.js frontends and Node.js/NestJS backends, from CMS platforms to real-time systems.",
  },
  {
    title: "APIs & Microservices",
    description:
      "Scalable RESTful APIs, microservices architecture, and third-party integrations with clean, layered code structure.",
  },
  {
    title: "Cloud & DevOps",
    description:
      "AWS infrastructure (Lambda, API Gateway, S3, DynamoDB), Docker containerization, and CI/CD pipeline setup.",
  },
  {
    title: "Architecture & Mentoring",
    description:
      "Clean Architecture and Feature Sliced Design adoption, code reviews, and mentoring junior engineers to elevate team output.",
  },
];

export const motivationalQuotes: Quote[] = [
  {
    author: "Will Smith",
    role: "The Pursuit of Happiness",
    text: "Don't ever let someone tell you that you can't do something. Not even me. You got a dream, you gotta protect it. When people can't do something themselves, they're gonna tell you that you can't do it. You want something, go get it. Period.",
    image: "/images/favorite-quotes/will-smith.jpeg",
  },
  {
    author: "Lance Armstrong",
    role: "Professional Cyclist",
    text: "Pain is temporary. It may last a minute, or an hour, or a day, or a year, but eventually it will subside and something else will take its place. If I quit, however, it lasts forever.",
    image: "/images/favorite-quotes/lance-armstrong.jpeg",
  },
  {
    author: "Bruce Lee",
    role: "Actor & Martial Artist",
    text: "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.",
    image: "/images/favorite-quotes/bruce-lee.jpeg",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sylvester Stallone",
    role: "American Actor",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
    image: "/images/testimonials/sylvester-stallone.jpeg",
  },
  {
    name: "Arnold Schwarzenegger",
    role: "American Actor",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
    image: "/images/testimonials/arnold-schwarzenegger.jpg",
  },
  {
    name: "Jean-Claude Van Damme",
    role: "Belgian Actor",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
    image: "/images/testimonials/van-damme.jpeg",
  },
  {
    name: "Jackie Chan",
    role: "Actor",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
    image: "/images/testimonials/jackie-chan.jpeg",
  },
];
