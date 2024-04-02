export default {
  userRentsItem(state, payload) {
    state.items[payload.index].available = false;
    state.items[payload.index].rentedBy = payload.userId;
    state.items[payload.index].returnDate = payload.returnDate;
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

  deleteAllModalIds(state) {
    state.editItemId = null;
    state.ratingsItemId = null;
  },
  saveEditItem(state, { payload, index }) {
    console.log(payload);
    // state.items[index] = payload;
  },
  requestExtension(state, payload) {
    state.items[payload.index].returnDate = payload.newReturnDate;
  },
};
