import { RouteConfig } from 'vue-router';

const contactsRouter = {
  path: '/contacts',
  name: 'contacts',
  component: () => import(/* webpackChunkName: 'contacts' */'./contacts.component.vue'),
} as RouteConfig;

export default contactsRouter;
