export default {
  userRentsItem(state, { payload, index }) {
    state.items[index] = payload;
  },
  userReservesItem(state, { userId, index }) {
    state.items[index].reservations.push(userId);
  },

  deleteItem(state, id) {
    state.items = state.items.filter((item) => item.id !== id);
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
};
