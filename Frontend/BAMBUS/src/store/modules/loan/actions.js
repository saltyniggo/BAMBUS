export default {
  createLoan({ commit, dispatch, rootState }, payload) {
    const loanId = Math.floor(Math.random() * (69420 - 1 + 1)) + 1;
    const userId = rootState.userStore.user.userId;
    const currentDay = new Date().toLocaleDateString("de-DE");
    const loan = {
      loanId: loanId,
      userId: userId,
      itemId: payload.item.itemId,
      startDate: currentDay,
      dueDate: payload.dueDate,
      returnDate: null,
    };

    commit("createLoan", loan);
    dispatch(
      "itemStore/addLoanIdToItem",
      { itemId: payload.item.itemId, loanId: loanId },
      { root: true }
    );
  },
  returnItem({ commit, dispatch, rootState }, itemId) {
    const returnDate = new Date().toLocaleDateString("de-DE");
    const loanId = rootState.itemStore.items.find(
      (item) => item.itemId === itemId
    ).currentLoanId;
    commit("returnItem", { loanId: loanId, returnDate: returnDate });
    dispatch("itemStore/removeLoanIdFromItem", itemId, { root: true });
  },
};
