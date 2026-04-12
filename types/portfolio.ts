export interface Contact {
  email: string;
  phone: string;
  address: string;
  birthday: string;
}

export interface Profile {
  name: string;
  role: string;
  intro: string[];
  contact: Contact;
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  network: string[];
  architecture: string[];
  tools: string[];
  database: string[];
  security: string[];
  etc: string[];
}

export interface Experience {
  company: string;
  duration: string;
  role: string;
  description: string;
}

export interface Project {
  name: string;
  period: string;
  team: string;
  techStack: string[];
  description: string;
  contributions: string[];
  achievements: string[];
  images: string[];
}

export interface Education {
  name: string;
  period: string;
}

export interface Activity {
  name: string;
  period: string;
  organization: string;
}

export interface PortfolioData {
  profile: Profile;
  skills: Skills;
  coreCompetencies: string[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  activities: Activity[];
}
