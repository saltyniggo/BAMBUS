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
        email: "user@example.com",
        firstName: "Max",
        lastName: "Usermann",
      },
      {
        userId: 2,
        username: "TestManager",
        password: "password123",
        role: 1,
        email: "user@example.com",
        firstName: "Max",
        lastName: "Managermann",
      },
      {
        userId: 3,
        username: "TestAdmin",
        password: "password123",
        role: 2,
        email: "user@example.com",
        firstName: "Max",
        lastName: "Adminmann",
      },
    ],
    userIsAuth: false,
    user: {
      userId: null,
      username: null,
      password: null,
      role: null,
      email: null,
      firstName: null,
      lastName: null,
    },
  },
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};
