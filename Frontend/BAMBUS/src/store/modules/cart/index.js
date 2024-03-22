import Mutations from "./mutations.js";
import Actions from "./actions.js";
import Getters from "./getters.js";

export default {
  namespaced: true,
  state: {
    cartRentalItems: [
      {
        itemId: 5,
        itemCategory: 0,
        reservations: [],
        condition: 1,
        available: true,
        returnDate: undefined,
        title: "Lord of the Rings The Two Towers",
        author: "J.R.R. Tolkien",
        category: "Fantasy",
        ISBN: "978-0063412620",
      },
      {
        itemId: 6,
        itemCategory: 0,
        reservations: [],
        condition: 1,
        available: true,
        returnDate: undefined,
        title: "Lord of the Rings The Return of the King",
        author: "J.R.R. Tolkien",
        category: "Fantasy",
        ISBN: "978-0063412637",
      },
      {
        itemId: 7,
        itemCategory: 0,
        reservations: [],
        condition: 1,
        available: true,
        returnDate: undefined,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        category: "Fantasy",
        ISBN: "978-0395873465",
      },
    ],
    cartReservationItems: [
      {
        itemId: 4,
        itemCategory: 0,
        reservations: [],
        condition: 1,
        available: false,
        returnDate: "01/04/2024",
        title: "Lord of the Rings The Fellowship of the Ring",
        author: "J.R.R. Tolkien",
        category: "Fantasy",
        ISBN: "978-0395489314",
        rating: 2,
      },
    ],
  },
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};
