export default {
  userRentsItem({ commit, state }, payload) {
    payload.available = false;
    const index = state.items.findIndex(
      (item) => item.itemId === payload.itemId
    );
    if (index !== -1) {
      commit("userRentsItem", { payload, index });
    }
  },
  userReservesItem({ commit, state }, payload) {
    const index = state.items.findIndex(
      (item) => item.itemId === payload.itemId
    );
    if (index !== -1) {
      commit("userReservesItem", { payload, index });
    }
  },
};
