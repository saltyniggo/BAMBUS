export default {
    toggleEditModal({ commit }) {
        commit("toggleEditModal");
    },
    toggleAddModal({ commit }) {
        commit("toggleAddModal");
    },
    toggleRatingsModal({ commit }) {
        commit("toggleRatingsModal");
    },
    closeAllModals({ commit }) {
        commit("closeAllModals");
    },
    setEditItemId({ commit }, id) {
        commit("setEditItemId", id);
    },
    setRatingsItemId({ commit }, id) {
        commit("setRatingsItemId", id);
    },
    setReturnItemId({ commit }, id) {
        commit("setReturnItemId", id);
    },
    toggleReturnModal({ commit }) {
        commit("toggleReturnModal");
    },
    toggleReportModal({ commit }) {
        commit("toggleReportModal");
    },
};
