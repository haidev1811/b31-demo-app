import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      userIsTicket: false,
      lastFetch: null,
      tickets: [],
    };
  },
  mutations,
  actions,
  getters,
};
