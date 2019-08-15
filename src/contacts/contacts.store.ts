import { ActionContext } from 'vuex';

const state = {};

const getters = {};

const mutations = {};

const actions = {
  async submitEmail(context: ActionContext<unknown, unknown>, emailData: Contact.EmailData) {},
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
