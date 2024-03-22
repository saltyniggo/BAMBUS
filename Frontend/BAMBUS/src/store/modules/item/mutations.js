export default {
  userRentsItem(state, { payload, index }) {
    state.items[index] = payload;
  },
  userReservesItem(state, { payload, index }) {
    state.items[index].reservations.push(payload);
  },
};
