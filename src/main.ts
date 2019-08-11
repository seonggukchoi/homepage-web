import Vue from 'vue';
import App from './app.component';

import 'babel-polyfill';
import router from './plugins/router';
import store from './plugins/store';
import vuetify from './plugins/vuetify';
import './plugins/registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
