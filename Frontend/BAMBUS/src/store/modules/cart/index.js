import Mutations from "./mutations.js";
import Actions from "./actions.js";
import Getters from "./getters.js";

export default {
  namespaced: true,
  state: {
    cartRentalItems: [
      {
        id: 1,
        reservations: [],
        condition: 1,
        available: true,
        returnDate: undefined,
        title: "Test Item",
        author: "Test Author",
        category: "Test Category",
        ISBN: "Test ISBN",
      },
      {
        id: 3,
        reservations: [],
        condition: 2,
        available: true,
        returnDate: undefined,
        title: "Test Item",
        author: "Test Author",
        category: "Test Category",
        ISBN: "Test ISBN",
      },
      {
        id: 4,
        reservations: [],
        condition: 3,
        available: true,
        returnDate: undefined,
        title: "Test Item",
        author: "Test Author",
        category: "Test Category",
        ISBN: "Test ISBN",
      },
    ],
    cartReservationItems: [
      {
        id: 2,
        reservations: [],
        condition: 2,
        available: false,
        returnDate: undefined,
        title: "Test Item2",
        author: "Test Author2",
        category: "Test Category2",
        ISBN: "Test ISBN2",
      },
    ],
  },
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};
