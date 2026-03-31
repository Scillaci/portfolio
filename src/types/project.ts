export interface Collaborator {
  title: string;
  name: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  featured?: boolean;
  client?: string;
  year?: string;
  poster?: string;
  thumbs?: string[];
  videos?: string[];
  overview?: string[];
  role?: string[];
  collaborators?: Collaborator[];
}