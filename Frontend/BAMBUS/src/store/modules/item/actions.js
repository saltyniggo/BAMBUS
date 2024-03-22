export default {
    deleteItem({ commit }, id) {
        commit("deleteItem", id);
    },
    addItem({ commit }, item) {
        commit("addItem", item);
    },
    editItem({ commit }, item) {
        commit("editItem", item);
    },
    setEditItemId({ commit }, id) {
        commit("setEditItemId", id);
    },

    deleteAllModalIds({ commit }) {
        commit("deleteAllModalIds");
    }
};
