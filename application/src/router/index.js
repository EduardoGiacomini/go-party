import Vue from "vue";
import VueRouter from "vue-router";

import FakeLogin from "../views/external/login/FakeLogin";
import PartiesSearch from "../views/internal/parties/search/PartiesSearch";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: FakeLogin,
    meta: {
      requiresAuthentication: false
    }
  },
  {
    path: "/dashboard",
    name: "parties",
    component: PartiesSearch,
    meta: {
      requiresAuthentication: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
