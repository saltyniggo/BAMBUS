export default {
    deleteItem({ commit }, id) {
        commit(mutations.deleteItem, id);
    },
    addItem({ commit }, item) {
        commit(mutations.addItem, item);
    },
    editItem({ commit }, item) {
        commit(mutations.editItem, item);
    }
};
