import Mutations from "./mutations.js";
import Actions from "./actions.js";
import Getters from "./getters.js";

export default {
  namespaced: true,
  state: {
    editItemId: null,
    items: [
      {
        itemId: 1,
        itemCategory: 0,
        reservations: [],
        condition: 1,
        available: true,
        returnDate: undefined,
        title: "Item 1",
        author: "Author 1",
        category: "Category 1",
        ISSN: "1144-875X",
        rating: 4.5,
        rentedBy: undefined,
      },
      {
        itemId: 2,
        itemCategory: 1,
        reservations: [],
        condition: 1,
        available: true,
        returnDate: undefined,
        title: "Item 2",
        author: "Author 2",
        category: "Category 2",
        ISBN: "978-3-16-148410-0",
        rating: 3.5,
        rentedBy: undefined,
      },
      {
        itemId: 3,
        itemCategory: 2,
        reservations: [],
        condition: 1,
        available: true,
        returnDate: undefined,
        title: "Item 3",
        rating: 5,
        rentedBy: undefined,
      },
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
        rentedBy: 1,
      },
      {
        itemId: 5,
        itemCategory: 0,
        reservations: [],
        condition: 1,
        available: false,
        returnDate: "01/04/2024",
        title: "Lord of the Rings The Two Towers",
        author: "J.R.R. Tolkien",
        category: "Fantasy",
        ISBN: "978-0063412620",
        rentedBy: 1,
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
        rentedBy: undefined,
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
        rentedBy: undefined,
      },
      {
        itemId: 8,
        itemCategory: 2,
        reservations: [],
        condition: 2,
        available: true,
        returnDate: undefined,
        title: "Hero Quest",
        rentedBy: undefined,
      },
      {
        itemId: 9,
        itemCategory: 2,
        reservations: [],
        condition: 1,
        available: false,
        returnDate: "01/04/2024",
        title: "Monopoly",
        rentedBy: 1,
      },
      {
        itemId: 10,
        itemCategory: 2,
        reservations: [],
        condition: 1,
        available: false,
        returnDate: "01/04/2024",
        title: "Risk",
        rentedBy: 1,
      },
      {
        itemId: 11,
        itemCategory: 2,
        reservations: [],
        condition: 1,
        available: true,
        returnDate: undefined,
        title: "Catan",
        rentedBy: undefined,
      },
      {
        itemId: 12,
        itemCategory: 2,
        reservations: [],
        condition: 1,
        available: true,
        returnDate: undefined,
        title: "Scrabble",
        rentedBy: undefined,
      },
      {
        itemId: 13,
        itemCategory: 2,
        reservations: [],
        condition: 1,
        available: true,
        returnDate: undefined,
        title: "Clue",
        rentedBy: undefined,
      },
      {
        itemId: 14,
        itemCategory: 2,
        reservations: [],
        condition: 1,
        available: true,
        returnDate: undefined,
        title: "Pandemic",
        rentedBy: undefined,
      },
      {
        itemId: 15,
        itemCategory: 2,
        reservations: [],
        condition: 1,
        available: true,
        returnDate: undefined,
        title: "Ticket to Ride",
        rentedBy: undefined,
      },
    ],
  },
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};
