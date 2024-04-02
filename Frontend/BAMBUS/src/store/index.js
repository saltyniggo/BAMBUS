import { createStore } from "vuex";

import Mutations from "./mutations.js";
import Actions from "./actions.js";
import Getters from "./getters.js";

import UserStore from "./modules/user/index.js";
import ItemStore from "./modules/item/index.js";
import ModalStore from "./modules/modal/index.js";
import RatingStore from "./modules/rating/index.js";
import CartStore from "./modules/cart/index.js";
import EditStore from "./modules/edit/index.js";
import RouterStore from "./modules/router/index.js";

const store = createStore({
  modules: {
    userStore: UserStore,
    itemStore: ItemStore,
    modalStore: ModalStore,
    ratingStore: RatingStore,
    cartStore: CartStore,
    editStore: EditStore,
    routerStore: RouterStore,
  },
  state: {},
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
});

export default store;
