import Mutations from "./mutations.js";
import Actions from "./actions.js";
import Getters from "./getters.js";

export default {
  namespaced: true,
  state: {
    editItem: {
      id: undefined,
      title: undefined,
      author: undefined,
      availability: undefined,
      category: undefined,
      ISBN: undefined,
      ISSN: undefined,
    },
  },
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};
