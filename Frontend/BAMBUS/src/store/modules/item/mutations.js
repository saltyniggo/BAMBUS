export default {
  userRentsItem(state, { payload, index }) {
    state.items[index] = payload;
  },
  userReservesItem(state, { userId, index }) {
    state.items[index].reservations.push(userId);
  },
};
