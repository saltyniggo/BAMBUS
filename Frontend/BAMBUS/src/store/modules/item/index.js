import Mutations from "./mutations.js";
import Actions from "./actions.js";
import Getters from "./getters.js";

export default {
  namespaced: true,
  state: {
    editItemId: null,
    ratingsItemId: null,
    items: [
      {
        itemId: 1,
        itemCategory: 0,
        reservations: [],
        condition: 1,
        available: true,
        title: "Item 1",
        author: "Author 1",
        category: "Category 1",
        ISSN: "1144-875X",
        rating: 4.5,
      },
      {
        itemId: 2,
        itemCategory: 1,
        reservations: [],
        condition: 1,
        available: true,
        title: "Item 2",
        author: "Author 2",
        category: "Category 2",
        ISBN: "978-3-16-148410-0",
        rating: 3.5,
      },
      {
        itemId: 3,
        itemCategory: 2,
        reservations: [],
        condition: 1,
        available: true,
        name: "Item 3",
        rating: 5,
      },
      {
        itemId: 4,
        itemCategory: 0,
        reservations: [],
        condition: 1,
        available: true,
        title: "Lord of the Rings The Fellowship of the Ring",
        author: "J.R.R. Tolkien",
        category: "Fantasy",
        ISBN: "978-0395489314",
        rating: 2,
      },
      {
        itemId: 5,
        itemCategory: 0,
        reservations: [],
        condition: 1,
        available: true,
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
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        category: "Fantasy",
        ISBN: "978-0395873465",
      },
      {
        itemId: 8,
        itemCategory: 2,
        reservations: [],
        condition: 2,
        available: true,
        name: "Hero Quest",
      },
      {
        itemId: 9,
        itemCategory: 2,
        reservations: [],
        condition: 1,
        available: true,
        name: "Monopoly",
      },
      {
        itemId: 10,
        itemCategory: 2,
        reservations: [],
        condition: 1,
        available: true,
        name: "Risk",
      },
      {
        itemId: 11,
        itemCategory: 2,
        reservations: [],
        condition: 1,
        available: true,
        name: "Catan",
      },
      {
        itemId: 12,
        itemCategory: 2,
        reservations: [],
        condition: 1,
        available: true,
        name: "Scrabble",
      },
      {
        itemId: 13,
        itemCategory: 2,
        reservations: [],
        condition: 1,
        available: true,
        name: "Clue",
      },
      {
        itemId: 14,
        itemCategory: 2,
        reservations: [],
        condition: 1,
        available: true,
        name: "Battleship",
      },
      {
        itemId: 15,
        itemCategory: 2,
        reservations: [],
        condition: 1,
        available: true,
        name: "Chess",
      },
      {
        itemId: 16,
        itemCategory: 2,
        reservations: [],
        condition: 1,
        available: true,
        name: "Checkers",
      },
      {
        itemId: 17,
        itemCategory: 2,
        reservations: [],
        condition: 1,
        available: true,
        name: "Go",
      },
      {
        itemId: 18,
        itemCategory: 2,
        reservations: [],
        condition: 1,
        available: true,
        name: "Backgammon",
      },
      {
        itemId: 19,
        itemCategory: 2,
        reservations: [],
        condition: 1,
        available: true,
        name: "Poker",
      },
      {
        itemId: 20,
        itemCategory: 2,
        reservations: [],
        condition: 1,
        available: true,
        name: "Uno",
      },
      {
        itemId: 21,
        itemCategory: 2,
        reservations: [],
        condition: 1,
        available: true,
        name: "Skip-Bo",
      },
      {
        itemId: 22,
        itemCategory: 2,
        reservations: [],
        condition: 1,
        available: true,
        name: "Phase 10",
      },
      {
        itemId: 23,
        itemCategory: 2,
        reservations: [],
        condition: 1,
        available: true,
        name: "Rummy",
      },
    ],
  },
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};


