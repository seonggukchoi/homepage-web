import { ActionContext } from 'vuex';

const data = {
  projects: [
    {
      id: 1,
      title: 'Seongg.uk',
      description: 'Personal Projects',
      image: '',
    },
    {
      id: 2,
      title: 'ONDA Plus',
      description: 'ONDA Projects',
      image: '',
    },
    {
      id: 3,
      title: 'ONDA Hotel Extranet',
      description: 'ONDA Projects',
      image: '',
    },
    {
      id: 4,
      title: 'ONDA Wave',
      description: 'ONDA Projects',
      image: '',
    },
  ],
};

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
