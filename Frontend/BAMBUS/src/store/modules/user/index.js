import Mutations from "./mutations.js";
import Actions from "./actions.js";
import Getters from "./getters.js";

export default {
  namespaced: true,
  state: {
    role: 0,
 
  },
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};
