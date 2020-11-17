import axios from "../plugins/axios";
import {actions, mutations} from "../constants";

export default {
  async [actions.CREATE_PARTY]({state}, party) {
    const userId = state.user.id;
    const {data} = await axios.post(`users/${userId}/parties`, party);
    return data;
  },

  async [actions.FAKE_LOGIN]({commit}, {email, name}) {
    const {data} = await axios.post("/auth/login", {email, name});
    commit(mutations.SET_USER, data);
    return data;
  },

  async [actions.FIND_PARTIES]({state}) {
    const userId = state.user.id;
    const {data} = await axios.get(`users/${userId}/parties`);
    return data;
  },

  async [actions.FIND_PARTY_BY_ID]({state}, partyId) {
    const userId = state.user.id;
    const {data} = await axios.get(`/users/${userId}/parties/${partyId}`);
    return data;
  },

  async [actions.UPDATE_PARTY]({state}, {partyId, party}) {
    const userId = state.user.id;
    const {data} = await axios.put(`/users/${userId}/parties/${partyId}`, party);
    return data;
  },

  async [actions.REMOVE_PARTY]({state}, partyId) {
    const userId = state.user.id;
    await axios.delete(`/users/${userId}/parties/${partyId}`);
  }
};
