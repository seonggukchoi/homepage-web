import Vue from 'vue';
import Router from 'vue-router';

import App from '@/app.router';
import Projects from '@/projects/projects.router';
import Contacts from '@/contacts/contacts.router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    App,
    Projects,
    Contacts,
  ],
});
