export default {
  setEditItem({ commit }, payload) {
    commit("setEditItem", payload);
  },
  clearEditItem({ commit }) {
    commit("clearEditItem");
  },
  // updateEditItemAvailability({ commit }, payload) {
  //   if (payload) {
  //     if (payload === "Ja") payload = true;
  //     else if (payload === "Nein") payload = false;
  //     else payload = null;
  //     commit("updateEditItemAvailability", payload);
  //   }
  // },
  updateEditItemCategory({ commit }, payload) {
    commit("updateEditItemCategory", payload);
  },
  updateEditItemAuthor({ commit }, payload) {
    commit("updateEditItemAuthor", payload);
  },
  updateEditItemTitle({ commit }, payload) {
    commit("updateEditItemTitle", payload);
  },
  updateEditItemISBN({ commit }, payload) {
    commit("updateEditItemISBN", payload);
  },
  updateEditItemISSN({ commit }, payload) {
    commit("updateEditItemISSN", payload);
  },
  saveEditItem({ state, dispatch }) {
    dispatch("itemStore/saveEditItem", state.editItem, { root: true });
  },
};
