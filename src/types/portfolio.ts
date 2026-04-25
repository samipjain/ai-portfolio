export interface Person {
  name: string;
  role: string;
  bio: string[];
  short: string;
}

export interface Project {
  slug: string;
  title: string;
  kind: "work" | "personal" | "founder";
  tags: string[];
  year: string;
  summary: string;
  description: string;
  role: string;
  stack: string[];
}

export interface PressItem {
  outlet: string;
  title: string;
  year: string;
  url: string;
}

export interface TalkItem {
  venue: string;
  title: string;
  year: string;
  location: string;
  url: string;
}

export interface PortfolioData {
  person: Person;
  projects: Project[];
  press: PressItem[];
  talks: TalkItem[];
}
