export default {
  createLoan({ commit, dispatch, rootState }, payload) {
    const loanId = Math.floor(Math.random() * (69420 - 1 + 1)) + 1;
    const userId = rootState.userStore.user.userId;
    const currentDay = new Date().toISOString().split("T")[0];
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
    const returnDate = new Date().toISOString().split("T")[0];
    const loanId = rootState.itemStore.items.find(
      (item) => item.itemId === itemId
    ).currentLoanId;
    commit("returnItem", { loanId: loanId, returnDate: returnDate });
    dispatch("itemStore/removeLoanIdFromItem", itemId, { root: true });
  },
  extensionRequestResponse({ commit }, payload) {
    if (payload.response === "accept") {
      commit("setExtensionRequestInactive", payload.loanId);
      commit("extendLoan", {
        loanId: payload.loanId,
        newDueDate: payload.newDueDate,
      });
    } else if (payload.response === "decline") {
      commit("setExtensionRequestInactive", payload.loanId);
    }
  },
};
