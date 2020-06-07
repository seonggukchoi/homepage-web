import { ActionContext } from 'vuex';

import { HttpClient } from '@/libraries/http-client';
import { IProject, IProjectsState } from './project.interface';

const state = <IProjectsState>{
  projects: [],
};

const getters = {
  getProjects(stateContext: IProjectsState): IProject[] {
    return stateContext.projects;
  },
};

const mutations = {
  setProjects(stateContext: IProjectsState, projects: IProject[]): void {
    stateContext.projects = projects;
  },
};

const actions = {
  async fetchProjects(storeContext: ActionContext<IProjectsState, unknown>): Promise<IProject[]> {
    const httpClient = new HttpClient();

    const projectsResponse = await httpClient.axios.get<IProject[]>('/projects');
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
