import Mutations from "./mutations.js";
import Actions from "./actions.js";
import Getters from "./getters.js";

export default {
  namespaced: true,
  state: {
    editItemModalStatus: false,
    editItemId: null,
    ratingsModalStatus: false,
    ratingsItemId: null,
    addModalStatus: false,
    returnItemModalStatus: false,
    returnItemId: null,
    reportModalStatus: false,
    reportItemId: null,
    
  },
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};