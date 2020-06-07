import { ActionContext } from 'vuex';

import { HttpClient } from '@/libraries/http-client';
import { Project, ProjectsState } from './project.interface';

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
    const httpClient = new HttpClient();

    const projectsResponse = await httpClient.axios.get('/projects');
    const projects = projectsResponse.data;

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
