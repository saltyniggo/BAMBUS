import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
    namespaced: true,
    getters: getters,
    mutations: mutations,
    actions: actions,
    state: {
        currentCategory: "all",
    },
};