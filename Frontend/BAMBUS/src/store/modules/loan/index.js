import Mutations from "./mutations.js";
import Actions from "./actions.js";
import Getters from "./getters.js";

export default {
  namespaced: true,
  state: {
    loans: [
      {
        loanId: 1,
        userId: 1,
        itemId: 4,
        startDate: "2024-03-15",
        dueDate: "2024-04-01",
        returnDate: null,
      },
      {
        loanId: 2,
        userId: 1,
        itemId: 5,
        startDate: "2024-03-01",
        dueDate: "2021-03-16",
        returnDate: null,
      },
      {
        loanId: 3,
        userId: 1,
        itemId: 9,
        startDate: "2024-03-12",
        dueDate: "2021-04-01",
        returnDate: null,
      },
      {
        loanId: 4,
        userId: 1,
        itemId: 10,
        startDate: "2024-03-10",
        dueDate: "2021-04-01",
        returnDate: null,
      },
    ],
  },
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};
