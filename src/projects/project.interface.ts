export type StatusType = 'progress' | 'left' | 'pause';

export interface IProjectsState {
  projects: IProject[];
}

export interface IProject {
  id: number;
  order: number | null;
  name: string;
  description: string | null;
  from: string | null;
  to: string | null;
  status: StatusType;
  roles: IProjectRole[];
  organizations: IOrganization[] | null;
  stacks: IStack[];
  images: string[];
}

export interface IProjectRole {
  id: number;
  name: string;
  contributionPercentage: number;
  from: string | null;
  to: string | null;
}

export interface IOrganization {
  id: number;
  name: string;
  url: string | null;
}

export interface IStack {
  id: number;
  name: string;
}
