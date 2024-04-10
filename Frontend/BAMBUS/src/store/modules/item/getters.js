export default {
  getItems: (state) => state.items,
  getItemById: (state) => (itemId) => {
    return state.items.find((item) => item.itemId === itemId);
  },

  getEditItem: (state) => {
    return state.items.find((item) => item.itemId === state.editItemId);
  },

  getReturnItemId: (state) => state.returnItemId,

  getReportItemId: (state) => state.reportItemId,

  getItemsRentedByUser: (state, _, __, rootGetters) => (userId) => {
    const loans = rootGetters["loanStore/getActiveLoansFromUserId"](userId);
    const items = loans.map((loan) =>
      state.items.find((item) => item.currentLoanId === loan.loanId)
    );
    return items.filter((item) => item !== undefined);
  },

  getItemsReservedByUser: (state) => (userId) => {
    return state.items.filter((item) => item.reservations.includes(userId));
  },
  getReportedItem: (state) => {
    return state.items.find((item) => item.itemId === state.reportItemId);
  },
  isReservedItemAvailableForRenting: (state) => (itemId, userId) => {
    const item = state.items.find((item) => item.itemId === itemId);
    return item.reservations[0] === userId && item.currentLoanId === null;
  },
};
