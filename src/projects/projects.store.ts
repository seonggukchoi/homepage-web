import { ActionContext } from 'vuex';

const state = {
  projects: [],
} as Projects.IProjectsState;

const getters = {
  getProjects(stateContext: Projects.IProjectsState) {
    return stateContext.projects;
  },
};

const mutations = {
  setProjects(stateContext: Projects.IProjectsState, projects: Projects.Project[]) {
    stateContext.projects = projects;
  },
};

const actions = {
  async fetchProjects(storeContext: ActionContext<unknown, unknown>) {
    return new Promise((resolve, reject) => {
      const projects = [
        { id: 1, title: 'Seongg.uk', description: 'Personal Projects', image: '' },
        { id: 2, title: 'ONDA Plus', description: 'ONDA Projects', image: '' },
        { id: 3, title: 'ONDA Hotel Extranet', description: 'ONDA Projects', image: '' },
        { id: 4, title: 'ONDA Wave', description: 'ONDA Projects', image: '' },
        { id: 5, title: 'Seongg.uk', description: 'Personal Projects', image: '' },
        { id: 6, title: 'ONDA Plus', description: 'ONDA Projects', image: '' },
        { id: 7, title: 'ONDA Hotel Extranet', description: 'ONDA Projects', image: '' },
        { id: 8, title: 'ONDA Wave', description: 'ONDA Projects', image: '' },
        { id: 9, title: 'Seongg.uk', description: 'Personal Projects', image: '' },
        { id: 10, title: 'ONDA Plus', description: 'ONDA Projects', image: '' },
        { id: 11, title: 'ONDA Hotel Extranet', description: 'ONDA Projects', image: '' },
        { id: 12, title: 'ONDA Wave', description: 'ONDA Projects', image: '' },
      ];

      storeContext.commit('setProjects', projects);

      setTimeout(() => resolve(projects), 2000);
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
