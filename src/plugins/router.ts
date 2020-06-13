import Vue from 'vue';
import Router from 'vue-router';

import AppRouter from '@/app.router';
import ProjectRouter from '@/project/project.router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    AppRouter,
    ProjectRouter,
  ],
});
