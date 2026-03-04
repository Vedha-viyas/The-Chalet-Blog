// Global type definitions

export type PageType = 'landing' | 'about' | 'portfolio' | 'contact';

export interface NavItem {
  id: string;
  label: string;
  page: PageType;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveLink?: string;
  githubLink?: string;
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  proficiency: number;
}
