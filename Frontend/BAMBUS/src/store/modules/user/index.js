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
        notifications: [],
      },
      {
        userId: 2,
        username: "TestManager",
        password: "password123",
        role: 1,
        email: "user@example.com",
        firstName: "Max",
        lastName: "Managermann",
        notifications: [],
      },
      {
        userId: 3,
        username: "TestAdmin",
        password: "password123",
        role: 2,
        email: "user@example.com",
        firstName: "Max",
        lastName: "Adminmann",
        notifications: [],
      },
      {
        userId: 4,
        username: "TestUser2",
        password: "password123",
        role: 0,
        email: "user@example.com",
        firstName: "Max",
        lastName: "Usermann2",
      }
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
      notifications: [],
    },
  },
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};
