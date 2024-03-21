import Mutations from "./mutations.js";
import Actions from "./actions.js";
import Getters from "./getters.js";

export default {
  namespaced: true,
  state: {
    ratings: [
      {
        ratingId: 1,
        itemId: 1,
        userId: 1,
        rating: 4.5,
        comment: "Great book!",
        isRecoomended: true,},
      { ratingId: 2,
        itemId: 1,
        userId: 2,
        rating: 3.5,
        comment: "LIked it!",
        isRecoomended: true,},
      { ratingId: 3,
        itemId: 2,
        userId: 1,
        rating: 1,
        comment: "Not good!",
        isRecoomended: false,},

    ]
  },
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};