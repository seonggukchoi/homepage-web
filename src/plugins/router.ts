import Vue from 'vue';
import Router from 'vue-router';

import App from '@/app.router';
import ProjectRouter from '@/project/project.router';
import Contacts from '@/contacts/contacts.router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    App,
    ProjectRouter,
    Contacts,
  ],
});
