export default {
  addLoanIdToItem(state, { itemId, loanId }) {
    state.items.forEach((item) => {
      if (item.itemId === itemId) {
        item.currentLoanId = loanId;
      }
    });
  },
  removeLoanIdFromItem(state, itemId) {
    state.items.forEach((item) => {
      if (item.itemId === itemId) {
        item.currentLoanId = null;
      }
    });
  },
  userReservesItem(state, { userId, index }) {
    state.items[index].reservations.push(userId);
  },

  removeReservationFromItem(state, { itemId, userId }) {
    const item = state.items.find((item) => item.itemId === itemId);
    item.reservations = item.reservations.filter((id) => id !== userId);
  },

  deleteItem(state, id) {
    state.items = state.items.filter((item) => item.itemId !== id);
  },
  addItem(state, item) {
    state.items.push(item);
  },
  setEditItemId(state, id) {
    state.editItemId = id;
  },
  editBook(state, payload) {
    const index = state.items.findIndex(
      (item) => item.itemId === payload.itemId
    );
    state.items[index].title = payload.title;
    state.items[index].author = payload.author;
    state.items[index].ISBN = payload.ISBN;
    state.items[index].type = 1;
    state.items[index].available = payload.available;
    state.items[index].category = payload.category;
    delete state.items[index].issn;
  },

  editGame(state, payload) {
    const index = state.items.findIndex(
      (item) => item.itemId === payload.itemId
    );
    state.items[index].title = payload.title;
    state.items[index].category = payload.category;
    state.items[index].type = 2;
    state.items[index].available = payload.available;
    delete state.items[index].issn;
    delete state.items[index].isbn;
    delete state.items[index].author;
  },
  editMagazine(state, payload) {
    const index = state.items.findIndex(
      (item) => item.itemId === payload.itemId
    );
    state.items[index].title = payload.title;
    state.items[index].ISSN = payload.ISSN;
    state.items[index].author = payload.author;
    state.items[index].category = payload.category;
    state.items[index].type = 0;
    state.items[index].available = payload.available;
    delete state.items[index].isbn;
  },

  setReturnItemId(state, id) {
    state.returnItemId = id;
  },
  setReportItemId(state, id) {
    state.reportItemId = id;
  },
  deleteAllModalIds(state) {
    state.editItemId = null;
    state.returnItemId = null;
    state.reportItemId = null;
  },
  requestExtension(state, payload) {
    state.items[payload.index].dueDate = payload.newDueDate;
  },
  logout(state) {
    state.editItemId = null;
    state.items = [];
  },

  reportItem(state) {
    state.items.find(
      (item) => item.itemId == state.reportItemId
    ).isDamaged = true;
  },
  setFilteredBy(state, filterBy) {
    if (filterBy === "books") {
      state.filteredBy = 1;
    } else if (filterBy === "games") {
      state.filteredBy = 2;
    } else if (filterBy === "magazines") {
      state.filteredBy = 0;
    } else {
      state.filteredBy = filterBy;
    }
  },
  setSortedBy(state, sortBy) {
    state.sortedBy = sortBy;
  },
  setOnlyAvailable(state, onlyAvailable) {
    state.onlyAvailable = onlyAvailable;
  },
  setSearch(state, search) {
    state.search = search;
  },
};
