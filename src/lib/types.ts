export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  icon: string;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface Differentiator {
  id: string;
  heading: string;
  subheading: string;
  description: string;
  imageAlt: string;
  imagePosition: "left" | "right";
}

export interface Office {
  city: string;
  address: string;
  phone?: string;
  email?: string;
  country: string;
}

export interface ProjectCategory {
  slug: string;
  label: string;
  description: string;
  projects: Project[];
}

export interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  description: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  phone?: string;
  email: string;
  message: string;
}
