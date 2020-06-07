export type StatusType = 'progress' | 'left' | 'pause';

export interface IProject {
  id: number;
  order: number | null;
  name: string;
  organization: string | null;
  description: string | null;
  from: string | null;
  to: string | null;
  roles: IProjectRole[];
  stacks: string[];
  images: string[];
  status: StatusType;
}

export interface IProjectRole {
  name: string;
  contribution_percentage: number;
  from: string | null;
  to: string | null;
}

export interface IProjectsState {
  projects: IProject[];
}
