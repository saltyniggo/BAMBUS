export default {
  setItemId(state, id) {
    state.itemId = id;
  },
  setRatings(state, ratings) {
    state.ratings = ratings;
  },
  deleteItemId(state) {
    state.itemId = null;
  },
  logout(state) {
    state.itemId = null;
    state.ratings = [];
  },
};
