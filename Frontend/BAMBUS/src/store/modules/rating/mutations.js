export default {
    setItemId(state, id) {
        state.itemId = id;
    },
    deleteItemId(state) {
        state.itemId = null;
    },
    deleteRatingById(state, id) {
        state.ratings = state.ratings.filter(rating => rating.ratingId !== id);
    },    
};