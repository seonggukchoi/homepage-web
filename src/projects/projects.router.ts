import { RouteConfig } from 'vue-router';

const projectsRouter = <RouteConfig>{
  path: '/projects',
  name: 'projects',
  component: () => import(/* webpackChunkName: 'projects' */'./projects.component.vue'),
};

export default projectsRouter;
