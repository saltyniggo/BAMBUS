export default {
  setItemId({ commit }, itemId) {
    commit("setItemId", itemId);
  },
  deleteItemId({ commit }) {
    commit("deleteItemId");
  },
  deleteRatingById({ commit }, ratingId) {
    commit("deleteRatingById", ratingId);
  },
  addRating({ commit }, rating) {
    commit("addRating", rating);
  },
  updateRating({ commit }, rating) {
    commit('updateRating', rating);
  },
};
