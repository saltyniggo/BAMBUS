import router from "../router/index.js";

export default {
  logoutUser({ commit }) {
    commit("userStore/logout", { root: true });
    commit("editStore/logout", { root: true });
    commit("modalStore/logout", { root: true });
    commit("ratingStore/logout", { root: true });
    commit("cartStore/logout", { root: true });
    commit("itemStore/logout", { root: true });
    router.push("/");
  },
};
