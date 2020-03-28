export type StatusType = 'progress' | 'left' | 'pause';

export interface Project {
  id: number;
  order: number | null;
  name: string;
  organization: string | null;
  description: string | null;
  from: string | null;
  to: string | null;
  roles: ProjectRole[];
  stacks: string[];
  images: string[];
  status: StatusType;
}

export interface ProjectRole {
  name: string;
  contribution_percentage: number;
  from: string | null;
  to: string | null;
}

export interface ProjectsState {
  projects: Project[];
}
