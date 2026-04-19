export type ProjectCategory = "company" | "freelance" | "personal";

export interface Project {
  name: string;
  description: string;
  images: string[];
  techStacks: string[];
  category: ProjectCategory;
  details?: string[];
}

export interface PortfolioTab {
  name: string;
  value: "all" | ProjectCategory;
}
