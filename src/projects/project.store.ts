import { ActionContext } from 'vuex';
import { Project, ProjectsState } from './project.interface';
import ProjectsData from './project.data';

const state = <ProjectsState>{
  projects: [],
};

const getters = {
  getProjects(stateContext: ProjectsState): Project[] {
    return stateContext.projects;
  },
};

const mutations = {
  setProjects(stateContext: ProjectsState, projects: Project[]): void {
    stateContext.projects = projects;
  },
};

const actions = {
  async fetchProjects(storeContext: ActionContext<ProjectsState, unknown>): Promise<Project[]> {
    // TODO Connect API
    const projects = ProjectsData;

    storeContext.commit('setProjects', projects);

    return projects;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
