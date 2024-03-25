import Mutations from "./mutations.js";
import Actions from "./actions.js";
import Getters from "./getters.js";

export default {
  namespaced: true,
  state: {
    users: [
      {
        userId: 1,
        username: "TestUser",
        password: "password123",
        role: 0,
      },
      {
        userId: 2,
        username: "TestManager",
        password: "password123",
        role: 1,
      },
      {
        userId: 3,
        username: "TestAdmin",
        password: "password123",
        role: 2,
      },
    ],
    currentUser: null,
    userIsAuth: false,
    userRole: null,
  },
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};
