import Vue from 'vue';
import Vuex from 'vuex';

import TopBar from '@/top-bar/top-bar.store';
import Project from '@/project/project.store';
import Contacts from '@/contacts/contacts.store';

Vue.use(Vuex);

const state = {};
const getters = {};
const mutations = {};
const actions = {};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    TopBar,
    Project,
    Contacts,
  },
});
