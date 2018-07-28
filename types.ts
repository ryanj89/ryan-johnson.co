export interface ResumeData {
  personal: PersonalInfo;
  resume: ResumeInfo;
  portfolio: PortfolioInfo;
  testimonials: TestimonialInfo[];
}

export interface PersonalInfo {
  name: string;
  occupation: string;
  description: string;
  degree: string;
  school: string;
  profilePic: string;
  bio: string;
  contactMessage: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  websiteUrl: string;
  resumeDownloadUrl: string;
  socialNetworks: Array<{ name: string; url: string; icon: string }>;
}

export interface ResumeInfo {
  education: Array<{ school: string; degree: string; graduated: string; description: string }>;
  work: Array<{ company: string; title: string; years: string; description: string }>;
  skillsTagline: string;
  skills: Array<{ name: string; icon: string; description: string }>;
}

export interface PortfolioInfo {
  projects: Project[];
}

export interface TestimonialInfo {
  text: string;
  user: string;
}

interface Project {
  title: string;
  category: string;
  image: string;
  url: string;
}
