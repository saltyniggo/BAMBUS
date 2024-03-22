export default {
    setItemId({ commit }, itemId) {
        commit('setItemId', itemId);
    }, 
    deleteItemId({ commit }) {
        commit('deleteItemId');
    }
};
