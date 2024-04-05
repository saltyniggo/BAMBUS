export default {
    getEditModalStatus: (state) => state.editItemModalStatus,
    getEditItemId: (state) => state.editItemId,
    
    getAddModalStatus: (state) => state.addModalStatus,

    getRatingsModalStatus: (state) => state.ratingsModalStatus,
    getRatingsItemId: (state) => state.ratingsItemId,

    getReturnModalStatus: (state) => state.returnItemModalStatus,
    getReturnItemId: (state) => state.returnItemId,
};