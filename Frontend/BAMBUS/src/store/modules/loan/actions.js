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
    dispatch("endActiveExtensionRequest", loanId);
    dispatch("itemStore/removeLoanIdFromItem", itemId, { root: true });
  },
  endActiveExtensionRequest({ commit, dispatch, rootState }, loanId) {
    const notificationId = rootState.userStore.users[1].notifications.find(
      (notification) => notification.payload.loanId === loanId
    ).notificationId;
    const userId = rootState.userStore.users[1].userId;
    dispatch(
      "userStore/deleteNotification",
      { userId, notificationId },
      { root: true }
    );
    commit("setExtensionRequestInactive", loanId);
  },
  extensionRequestResponse({ commit, dispatch }, payload) {
    if (payload.response === "accept") {
      commit("setExtensionRequestInactive", payload.loanId);
      commit("extendLoan", {
        loanId: payload.loanId,
        newDueDate: payload.newDueDate,
      });
    } else if (payload.response === "decline") {
      commit("setExtensionRequestInactive", payload.loanId);
    }
    dispatch(
      "notificationStore/managerRespondsToExtensionRequest",
      {
        newDueDate: payload.newDueDate,
        loanId: payload.loanId,
        response: payload.response,
      },
      {
        root: true,
      }
    );
  },
};
