import { RouteConfig } from 'vue-router';

const projectRouter = <RouteConfig>{
  path: '/projects',
  name: 'project-list',
  component: () => import(/* webpackChunkName: 'projects' */'./project-list/project-list.component.vue'),
};

export default projectRouter;
