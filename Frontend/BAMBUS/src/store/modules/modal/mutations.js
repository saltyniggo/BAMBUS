export default {
    toggleEditModal(state) {
        state.editItemModalStatus = !state.editItemModalStatus;
        if (state.editItemModalStatus === false) {
            state.editItemId = null;
        }
    },
    toggleAddModal(state) {
        state.addModalStatus = !state.addModalStatus;
    },
    toggleRatingsModal(state) {
        state.ratingsModalStatus = !state.ratingsModalStatus;
        if (state.ratingsModalStatus === false) {
            state.ratingsItemId = null;
        }
    },
    closeAllModals(state) {
        state.editItemModalStatus = false;
        state.editItemId = null;
        state.addModalStatus = false;
        state.ratingsItemId = null;
        state.ratingsModalStatus = false;

    },
    setEditItemId(state, id) {
        state.editItemId = id;
    },
    setRatingsItemId(state, id) {
        state.ratingsItemId = id;
    },
};