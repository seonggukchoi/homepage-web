import Vue from 'vue';
import Vuex from 'vuex';

import TopBar from '@/top-bar/top-bar.store';
import Projects from '@/projects/projects.store';
import Contacts from '@/contacts/contacts.store';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    TopBar,
    Projects,
    Contacts,
  },
});
