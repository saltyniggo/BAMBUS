import RatingService from "../../services/RatingService";

export default {
  setItemId({ commit }, itemId) {
    commit("setItemId", itemId);
  },
  deleteItemId({ commit }) {
    commit("deleteItemId");
  },
  async deleteRatingById({ commit }, ratingId) {
    try {
      await RatingService.DeleteRating(ratingId).then((response) => {
        if (response.data.success) {
          commit(setRatings, response.data.data);
        }
        else {
          alert("Error when deleting rating from DB");
        }
      });
    }
    catch (error) {
      console.warn("Error when deleting rating from DB:");
      console.error("Error:", error);
      throw error;
    }
  },
  async addRating({ commit }, rating) {
    try {
      await RatingService.AddRating(rating).then((response) => {
        if (response.data.success) {
          commit("setRatings", response.data.data);
        }
        else {
          alert("Error when adding rating to DB");
        }
      });
    } catch (error) {
      console.warn("Error when adding rating to DB:");
      console.error("Error:", error);
      throw error;
    }
  },
  async updateRating({ commit }, rating) {
    try {
      await RatingService.UpdateRating(rating).then((response) => {
        if (response.data.success) {
          commit("setRatings", response.data.data);
        }
        else {
          alert("Error when updating rating in DB");
        }
      });
    }
    catch (error) {
      console.warn("Error when updating rating in DB:");
      console.error("Error:", error);
      throw error;
    }
  },
  async loadAllRatings({ commit }) {
    try {
      await RatingService.GetAllRatings().then((response) => {
        if (response.data.success) {
          commit("setRatings", response.data.data);
        }
        else {
          alert("Error when loading all ratings from DB");
        }
      });
    } catch (error) {
      console.warn("Error when getting all ratings from DB:");
      console.error("Error:", error);
      throw error;
    }
  },
};
