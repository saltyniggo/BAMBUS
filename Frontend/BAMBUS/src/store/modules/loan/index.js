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
        startDate: "15.3.2024",
        dueDate: "4.1.2024",
        returnDate: null,
      },
      {
        loanId: 2,
        userId: 1,
        itemId: 5,
        startDate: "15.3.2024",
        dueDate: "4.1.2024",
        returnDate: null,
      },
      {
        loanId: 3,
        userId: 1,
        itemId: 9,
        startDate: "15.3.2024",
        dueDate: "4.1.2024",
        returnDate: null,
      },
      {
        loanId: 4,
        userId: 1,
        itemId: 10,
        startDate: "15.3.2024",
        dueDate: "4.1.2024",
        returnDate: null,
      },
    ],
  },
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};
