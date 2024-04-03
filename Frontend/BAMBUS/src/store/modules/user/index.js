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
        numberLoans: 0,
        numberExtensions: 0,
        numberMissedReturns: 0,
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
        firstName: "Anna",
        lastName: "Usermann2",
        numberLoans: 1,
        numberExtensions: 2,
        numberMissedReturns: 3,
      },
      {
        userId: 5,
        username: "TestUser3",
        password: "password123",
        role: 0,
        email: "user@example.com",
        firstName: "Hans",
        lastName: "Usermann3",
        numberLoans: 3,
        numberExtensions: 1,
        numberMissedReturns: 2,

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
