export default {
  getItems: (state) => state.items,
  getItemById: (state) => (itemId) => {
    return state.items.find((item) => item.itemId === itemId);
  },

  getEditItem: (state) => {
    return state.items.find((item) => item.itemId === state.editItemId);
  },

  getReturnItemId: (state) => state.returnItemId,

  getItemsRentedByUser: (state, _, __, rootGetters) => (userId) => {
    const loans = rootGetters["loanStore/getActiveLoansFromUserId"](userId);
    const itemLoanObjects = loans.map((loan) => {
      const item = state.items.find((item) => item.itemId === loan.itemId);
      return {
        item: item,
        loan: loan,
      };
    });
    console.log(itemLoanObjects);
    return itemLoanObjects;
  },

  getItemsReservedByUser: (state) => (userId) => {
    return state.items.filter((item) => item.reservations.includes(userId));
  },
};
