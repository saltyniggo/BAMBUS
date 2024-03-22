export default {
    deleteItem({ commit }, id) {
        commit("deleteItem", id);
    },
    addItem({ commit }, item) {
        commit("addItem", item);
    },
    editItem({ commit }, item) {
        commit("editItem", item);
    },
    setEditItemId({ commit }, id) {
        commit("setEditItemId", id);
    },

    deleteAllModalIds({ commit }) {
        commit("deleteAllModalIds");
    },

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
