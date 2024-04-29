import Mutations from "./mutations.js";
import Actions from "./actions.js";
import Getters from "./getters.js";

export default {
  namespaced: true,
  state: {
    editItemId: null,
    returnItemId: null,
    reportItemId: null,
    filteredBy: null,
    sortedBy: null,
    onlyAvailable: false,
    search: "",
    itmes: [],
    // items: [
    //   {
    //     itemId: 1,
    //     type: 0,
    //     reservations: [1, 2, 3],
    //     condition: 0,
    //     currentLoanId: null,
    //     title: "Item 1",
    //     author: "Author 1",
    //     category: "Category 1",
    //     ISSN: "1144-875X",
    //     avgRating: 4.5,
    //   },
    //   {
    //     itemId: 2,
    //     type: 1,
    //     reservations: [],
    //     condition: 1,
    //     currentLoanId: null,
    //     title: "Item 2",
    //     author: "Author 2",
    //     category: "Category 2",
    //     ISBN: "978-3-16-148410-0",
    //     avgRating: 3.5,
    //   },
    //   {
    //     itemId: 3,
    //     type: 2,
    //     reservations: [],
    //     condition: 2,
    //     currentLoanId: null,
    //     title: "Item 3",
    //     avgRating: 5,
    //   },
    //   {
    //     itemId: 4,
    //     type: 1,
    //     reservations: [],
    //     condition: 2,
    //     currentLoanId: 1,
    //     title: "Lord of the Rings The Fellowship of the Ring",
    //     author: "J.R.R. Tolkien",
    //     category: "Fantasy",
    //     ISBN: "978-0395489314",
    //     avgRating: 2,
    //   },
    //   {
    //     itemId: 5,
    //     type: 1,
    //     reservations: [],
    //     condition: 1,
    //     currentLoanId: 2,
    //     title: "Lord of the Rings The Two Towers",
    //     author: "J.R.R. Tolkien",
    //     category: "Fantasy",
    //     ISBN: "978-0063412620",
    //   },
    //   {
    //     itemId: 6,
    //     type: 1,
    //     reservations: [],
    //     condition: 0,
    //     currentLoanId: null,
    //     title: "Lord of the Rings The Return of the King",
    //     author: "J.R.R. Tolkien",
    //     category: "Fantasy",
    //     ISBN: "978-0063412637",
    //   },
    //   {
    //     itemId: 7,
    //     type: 1,
    //     reservations: [],
    //     condition: 1,
    //     currentLoanId: null,
    //     title: "The Hobbit",
    //     author: "J.R.R. Tolkien",
    //     category: "Fantasy",
    //     ISBN: "978-0395873465",
    //   },
    //   {
    //     itemId: 8,
    //     type: 2,
    //     reservations: [],
    //     condition: 2,
    //     currentLoanId: null,
    //     title: "Hero Quest",
    //   },
    //   {
    //     itemId: 9,
    //     type: 2,
    //     reservations: [],
    //     condition: 0,
    //     currentLoanId: 3,
    //     title: "Monopoly",
    //   },
    //   {
    //     itemId: 10,
    //     type: 2,
    //     reservations: [],
    //     condition: 0,
    //     currentLoanId: 4,
    //     title: "Risk",
    //   },
    //   {
    //     itemId: 11,
    //     type: 2,
    //     reservations: [],
    //     condition: 0,
    //     currentLoanId: null,
    //     title: "Catan",
    //   },
    //   {
    //     itemId: 12,
    //     type: 2,
    //     reservations: [],
    //     condition: 1,
    //     currentLoanId: null,
    //     title: "Scrabble",
    //   },
    //   {
    //     itemId: 13,
    //     type: 2,
    //     reservations: [],
    //     condition: 2,
    //     currentLoanId: null,
    //     title: "Clue",
    //   },
    //   {
    //     itemId: 14,
    //     type: 2,
    //     reservations: [],
    //     condition: 2,
    //     currentLoanId: null,
    //     title: "Pandemic",
    //   },
    //   {
    //     itemId: 15,
    //     type: 2,
    //     reservations: [],
    //     condition: 1,
    //     currentLoanId: null,
    //     title: "Ticket to Ride",
    //   },
    // ],
  },
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};
