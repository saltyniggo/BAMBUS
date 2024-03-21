export default {
    deleteItem({ commit }, id) {
        commit(mutations.deleteItem, id);
    },
    addItem({ commit }, item) {
        commit(mutations.addItem, item);
    },
    editItem({ commit }, item) {
        commit(mutations.editItem, item);
    },
    setEditItemId({ commit }, id) {
        commit(mutations.setEditItemId, id);
    },
    setRatingsItemId({ commit }, id) {
        commit(mutations.setRatingsItemId, id);
    },
    deleteAllModalIds({ commit }) {
        commit(mutations.deleteAllModalIds);
    }
};
