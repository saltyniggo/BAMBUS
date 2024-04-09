export default {
  getItems: (state) => state.items,
  getItemById: (state) => (itemId) => {
    return state.items.find((item) => item.itemId === itemId);
  },

  getEditItem: (state) => {
    return state.items.find((item) => item.itemId === state.editItemId);
  },

  getReturnItemId: (state) =>state.returnItemId,

  getReportItemId: (state) => state.reportItemId,

  getItemsRentedByUser: (state) => (userId) => {
    return state.items.filter((item) => item.rentedBy === userId);
  },

  getItemsReservedByUser: (state) => (userId) => {
    return state.items.filter((item) => item.reservations.includes(userId));
  },
  getReportedItem: (state) => {
    return state.items.find((item) => item.itemId === state.reportItemId);
  }
};
