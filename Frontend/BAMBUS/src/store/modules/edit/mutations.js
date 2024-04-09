export default {
  setEditItem(state, payload) {
    state.editItem = payload;
  },
  clearEditItem(state) {
    state.editItem = {
      id: undefined,
      title: undefined,
      author: undefined,
      ISBN: undefined,
      ISSN: undefined,
      category: undefined,
    };
  },
  updateEditItemTitle(state, payload) {
    state.editItem.title = payload;
  },
  updateEditItemAuthor(state, payload) {
    state.editItem.author = payload;
  },
  updateEditItemISBN(state, payload) {
    state.editItem.ISBN = payload;
  },
  updateEditItemISSN(state, payload) {
    state.editItem.ISSN = payload;
  },
  updateEditItemCategory(state, payload) {
    state.editItem.category = payload;
  },
  // updateEditItemAvailability(state, payload) {
  //   state.editItem.available = payload;
  // },
  logout(state) {
    state.editItem = {
      id: undefined,
      title: undefined,
      author: undefined,
      category: undefined,
      ISBN: undefined,
      ISSN: undefined,
    };
  },
};
