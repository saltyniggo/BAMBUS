import { createStore } from "vuex";

import Mutations from "./mutations.js";
import Actions from "./actions.js";
import Getters from "./getters.js";

import UserStore from "./modules/user/index.js";
import ItemStore from "./modules/item/index.js";

const store = createStore({
  modules: {
    user: UserStore,
    item: ItemStore,
  },
  state: {},
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
});

export default store;
