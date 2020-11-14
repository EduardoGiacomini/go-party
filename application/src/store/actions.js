import axios from "../plugins/axios";
import {actions, mutations} from "../constants";

export default {
  async [actions.FAKE_LOGIN]({commit}, {email, name}) {
    const {data} = await axios.post("/auth/login", {email, name});
    commit(mutations.SET_USER, data);
    return data;
  },

  async [actions.FIND_PARTIES]({state}) {
    const userId = state.user.id
    const {data} = await axios.get(`users/${userId}/parties`);
    return data;
  }
};
