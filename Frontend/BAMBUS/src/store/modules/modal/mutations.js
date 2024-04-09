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
  toggleReportModal(state) {
    state.reportModalStatus = !state.reportModalStatus;
    if (state.reportModalStatus === false) {
      state.reportItemId = null;
    }
  },
  closeAllModals(state) {
    state.editItemModalStatus = false;
    state.editItemId = null;
    state.addModalStatus = false;
    state.ratingsItemId = null;
    state.ratingsModalStatus = false;
    state.returnItemModalStatus = false;
    state.returnItemId = null;
    state.reportItemId = null;
    state.reportModalStatus = false;
  },
  setEditItemId(state, id) {
    state.editItemId = id;
  },
  setRatingsItemId(state, id) {
    state.ratingsItemId = id;
  },
  setReturnItemId(state, id) {
    state.returnItemId = id;
  },
  setReportItemId(state, id) {
    state.reportItemId = id;
  },
  toggleReturnModal(state) {
    state.returnItemModalStatus = !state.returnItemModalStatus;
  },

  logout(state) {
    state.editItemModalStatus = false;
    state.editItemId = null;
    state.ratingsModalStatus = false;
    state.ratingsItemId = null;
    state.addModalStatus = false;
  },
};
