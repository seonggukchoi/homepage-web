import Vue from 'vue';
import { CreateElement, VNode } from 'vue/types/umd';

import 'babel-polyfill';

import './plugins/registerServiceWorker';
import router from './plugins/router';
import store from './plugins/store';
import vuetify from './plugins/vuetify';

import AppComponent from './app.component';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (renderer: CreateElement): VNode => renderer(AppComponent),
}).$mount('#app');
