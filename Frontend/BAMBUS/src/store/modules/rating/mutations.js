export default {
  setItemId(state, id) {
    state.itemId = id;
  },
  deleteItemId(state) {
    state.itemId = null;
  },
  deleteRatingById(state, id) {
    state.ratings = state.ratings.filter((rating) => rating.ratingId !== id);
  },
  logout(state) {
    state.itemId = null;
 state.ratings = [];
  },
    addRating(state, rating) {
        state.ratings.push(rating);
    },   
};
