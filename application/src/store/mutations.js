import Vue from "vue";
import {mutations} from "../constants";

export default {
  async [mutations.SET_USER](state, user) {
    Vue.set(state, 'user', user);
  }
};
