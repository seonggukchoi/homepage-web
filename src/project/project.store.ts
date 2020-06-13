import { ActionContext } from 'vuex';

import { HttpClient } from '@/libraries/http-client';
import { IProject, IProjectsState } from './project.interface';

const state = <IProjectsState>{
  projects: [],
  project: null,
  isOpenedProjectModal: false,
};

const getters = {
  getProjects(stateContext: IProjectsState): IProject[] {
    console.debug('[Project] Getter: getProjects');

    return stateContext.projects;
  },
  getProject(stateContext: IProjectsState): IProject | null {
    console.debug('[Project] Getter: getProject');

    return stateContext.project;
  },
  getIsOpenedProjectModal(stateContext: IProjectsState): boolean {
    console.debug('[Project] Getter: getIsOpenedProjectModal');

    return stateContext.isOpenedProjectModal;
  },
};

const mutations = {
  setProjects(stateContext: IProjectsState, projects: IProject[]): void {
    console.debug('[Project] Mutation: setProjects', projects);

    stateContext.projects = projects;
  },
  setProject(stateContext: IProjectsState, project: IProject | null): void {
    console.debug('[Project] Mutation: setProject', project);

    stateContext.project = project;
  },
  setIsOpenedProjectModal(stateContext: IProjectsState, isOpenedProjectModal: boolean): void {
    console.debug('[Project] Mutation: setIsOpenedProjectModal', isOpenedProjectModal);

    stateContext.isOpenedProjectModal = isOpenedProjectModal;
  },
};

const actions = {
  async fetchProjects(actionContext: ActionContext<IProjectsState, unknown>): Promise<IProject[]> {
    console.debug('[Project] Action: fetchProjects');

    const httpClient = new HttpClient();

    const projectsResponse = await httpClient.axios.get<IProject[]>('/projects');
    const projects = projectsResponse.data;

    actionContext.commit('setProjects', projects);

    return projects;
  },
  openProjectModal(actionContext: ActionContext<IProjectsState, unknown>, project: IProject): void {
    console.debug('[Project] Action: openProjectModal', project);

    actionContext.commit('setIsOpenedProjectModal', true);
    actionContext.commit('setProject', project);
  },
  closeProjectModal(actionContext: ActionContext<IProjectsState, unknown>): void {
    console.debug('[Project] Action: closeProjectModal');

    actionContext.commit('setIsOpenedProjectModal', false);
    actionContext.commit('setProject', null);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
