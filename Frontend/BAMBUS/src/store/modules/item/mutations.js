export default {
  addLoanIdToItem(state, { itemId, loanId }) {
    state.items.forEach((item) => {
      if (item.itemId === itemId) {
        item.currentLoanId = loanId;
      }
    });
  },
  userReservesItem(state, { userId, index }) {
    state.items[index].reservations.push(userId);
  },

  deleteItem(state, id) {
    state.items = state.items.filter((item) => item.itemId !== id);
  },
  addItem(state, item) {
    state.items.push(item);
  },
  editItem(state, item) {
    state.items = state.items.map((i) => (i.id === item.id ? item : i));
  },
  setEditItemId(state, id) {
    state.editItemId = id;
  },
  setReturnItemId(state, id) {
    state.returnItemId = id;
  },

  deleteAllModalIds(state) {
    state.editItemId = null;
    state.returnItemId = null;
  },
  saveEditItem(state, { payload, index }) {
    console.log(payload);
    // state.items[index] = payload;
  },
  requestExtension(state, payload) {
    state.items[payload.index].dueDate = payload.newDueDate;
  },
  logout(state) {
    state.editItemId = null;
    state.items = [];
  },
};
