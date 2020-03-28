import { ActionContext } from 'vuex';
import ProjectsData from './project.data';

const state = <Project.ProjectsState>{
  projects: [],
};

const getters = {
  getProjects(stateContext: Project.ProjectsState): Project.Project[] {
    return stateContext.projects;
  },
};

const mutations = {
  setProjects(stateContext: Project.ProjectsState, projects: Project.Project[]): void {
    stateContext.projects = projects;
  },
};

const actions = {
  async fetchProjects(storeContext: ActionContext<Project.ProjectsState, unknown>): Promise<Project.Project[]> {
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
