export default {
  setItems(state, items) {
    items.forEach((item) => {
      item.reservations = item.reservations ? item.reservations : [];
      item.category = item.category ? item.category : "";
      item.author = item.author ? item.author : "";
      item.avgRating = item.avgRating ? item.avgRating : 0;
      item.currentLoanId = item.currentLoanId ? item.currentLoanId : 0;
    });
    state.items = items;
  },


  // removeReservationFromItem(state, { itemId, userId }) {
  //   const item = state.items.find((item) => item.itemId === itemId);
  //   item.reservations = item.reservations.filter((id) => id !== userId);
  // },
  setEditItemId(state, id) {
    state.editItemId = id;
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
    // state.items = [];
  },

  // reportItem(state) {
  //   state.items.find((item) => item.itemId == state.reportItemId).condition = 1;
  // },



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
  // acceptDamage(state, itemId) {
  //   state.items.find((item) => item.itemId === itemId).condition = 2;
  // },
  // rejectDamage(state, itemId) {
  //   state.items.find((item) => item.itemId === itemId).condition = 0;
  // },
};
