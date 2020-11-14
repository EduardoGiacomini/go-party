import Vue from 'vue';
import VueRouter from 'vue-router';

import CreateUser from '@/views/user/CreateUser.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'CreateUser',
    component: CreateUser,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
