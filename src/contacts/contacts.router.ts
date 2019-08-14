import { RouteConfig } from 'vue-router';

const contactsRouter = <RouteConfig>{
  path: '/contacts',
  name: 'contacts',
  component: () => import(/* webpackChunkName: 'contacts' */'./contacts.component.vue'),
};

export default contactsRouter;
