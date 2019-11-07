declare namespace Project {
  type StatusType = 'progress' | 'left' | 'pause';

  interface Project {
    id: number;
    order: number | null;
    name: string;
    organization: string | null;
    description: string | null;
    from: string | null;
    to: string | null;
    roles: ProjectRole[];
    stacks: string[],
    images: string[];
    status: StatusType;
  }

  interface ProjectRole {
    name: string;
    contribution_percentage: number;
    from: string | null;
    to: string | null;
  }

  interface ProjectsState {
    projects: Project[];
  }
}
