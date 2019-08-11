import { RouteConfig } from 'vue-router';

const projectsRouter = {
  path: '/projects',
  name: 'projects',
  component: () => import(/* webpackChunkName: 'projects' */'./projects.component.vue'),
} as RouteConfig;

export default projectsRouter;
