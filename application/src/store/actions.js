import axios from "../plugins/axios";
import actions from "../constants/actions";

export default {
  async [actions.FIND_PARTIES]({state}) {
    const userId = state.user.id
    const {data} = await axios.get(`users/${userId}/parties`);
    return data;
  }
};
