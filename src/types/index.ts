export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone?: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  summary: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  status: string;
  year?: string;
}

export interface FocusArea {
  title: string;
  desc: string;
  icon: string;
}

export interface SkillGroup {
  label: string;
  tags: string[];
}

export interface Project {
  tag: string;
  featured?: boolean;
  title: string;
  desc: string;
  tools: string[];
  github: string;
  live?: string;
}

export interface NavItem {
  id: string;
  label: string;
}
