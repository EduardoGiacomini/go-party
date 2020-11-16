import Vue from "vue";
import VueRouter from "vue-router";

import FakeLogin from "../views/external/login/FakeLogin";
import PartiesSearch from "../views/internal/parties/search/PartiesSearch";
import CreateParty from "../views/internal/parties/detail/CreateParty";

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
    path: "/parties",
    name: "parties",
    component: PartiesSearch,
    meta: {
      requiresAuthentication: true
    }
  },
  {
    path: "/parties/create",
    name: "createParty",
    component: CreateParty,
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
