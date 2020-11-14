import Vue from "vue";
import VueRouter from "vue-router";

import PartiesSearch from "../views/parties/search/PartiesSearch";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "parties",
    component: PartiesSearch,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
