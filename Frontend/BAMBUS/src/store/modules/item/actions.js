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
  userReservesItem({ commit, state, rootState }, payload) {
    const index = state.items.findIndex((item) => item.itemId === payload);
    if (index !== -1) {
      const userId = rootState.userStore.currentUserId;
      commit("userReservesItem", { userId, index });
    }
  },
};
