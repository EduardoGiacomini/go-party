import Vue from "vue";
import {mutations} from "../constants";

export default {
  async [mutations.SET_USER](state, user) {
    Vue.set(state, 'user', user);
  },

  [mutations.SET_ALERT](state, {message, color, icon}) {
    Vue.set(state, 'alert', {message, color, icon});
  }
};
