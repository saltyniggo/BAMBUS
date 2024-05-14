import Mutations from "./mutations.js";
import Actions from "./actions.js";
import Getters from "./getters.js";

export default {
  namespaced: true,
  state: {
    itemId: null,
    ratings: [
      // {
      //   ratingId: 1,
      //   itemId: 1,
      //   userId: 1,
      //   rating: 4.5,
      //   comment: "Great book! I loved it! I recommend it! Like really! It's awesome! Read it! It's worth it! I promise! I'm not lying! I swear! I'm serious! I'm not kidding! I'm not joking! I'm not fooling",
      //   isRecommended: null,},
      // { ratingId: 2,
      //   itemId: 1,
      //   userId: 2,
      //   rating: 3.5,
      //   comment: "LIked it!",
      //   isRecommended: true,},
      // { ratingId: 3,
      //   itemId: 2,
      //   userId: 1,
      //   rating: 1,
      //   comment: "Not good!",
      //   isRecommended: false,},

    ]
  },
  mutations: Mutations,
  actions: Actions,
  getters: Getters,
};