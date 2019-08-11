declare namespace Projects {
  interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
  }

  interface IProjectsState {
    projects: Project[];
  }
}
