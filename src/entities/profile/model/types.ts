export interface Profile {
  imagePath: string;
  name: string;
  jobTitle: string;
  residence: string;
  city: string;
  birthday: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  url: string;
}

export interface ContactInfo {
  name: string;
  value: string;
}

export interface Language {
  name: string;
  value: number;
}

export interface Skill {
  name: string;
}

export interface TechStack {
  name: string;
  src: string;
}

export interface Highlight {
  value: number;
  suffix: string;
  label: string;
}

export interface ServiceSummary {
  title: string;
  description: string;
}

export interface Quote {
  author: string;
  role: string;
  text: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: string;
}
