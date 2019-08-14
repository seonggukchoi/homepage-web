import { ActionContext } from 'vuex';
import ProjectsData from './projects.data';

const data = {
  projects: ProjectsData,
};

const state = <Project.ProjectsState>{
  projects: [],
};

const getters = {
  getProjects(stateContext: Project.ProjectsState) {
    return stateContext.projects;
  },
};

const mutations = {
  setProjects(stateContext: Project.ProjectsState, projects: Project.Project[]) {
    stateContext.projects = projects;
  },
};

const actions = {
  async fetchProjects(storeContext: ActionContext<unknown, unknown>) {
    return new Promise((resolve, reject) => {
      const projects = data.projects;

      storeContext.commit('setProjects', projects);

      resolve(projects);
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
