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
      const userId = rootState.userStore.currentUser;
      if (userId == null) {
        alert("Please log in to reserve an item");
      } else {
        commit("userReservesItem", { userId, index });
      }
    }
  },
  saveEditItem({ commit, state }, payload) {
    console.log(payload);
    console.log("das sollte hier nur einmal ausgeführt werden");
    const index = state.items.findIndex(
      (item) => item.itemId === payload.itemId
    );
    commit("saveEditItem", { payload, index });
  },
};
