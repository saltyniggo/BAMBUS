import LoanService from "@/store/services/LoanService";

export default {
  returnItem({ commit, dispatch, rootState }, itemId) {
    const returnDate = new Date().toISOString().split("T")[0];
    const loanId = rootState.itemStore.items.find(
      (item) => item.itemId === itemId
    ).currentLoanId;
    LoanService.SetReturnDate(loanId).then((response) => {
      if (response.data.success) {
        commit("setReturnDate", { loanId: loanId, returnDate: returnDate });
      } else {
        $router.push("/error");
      }
    });
  },

  extensionRequestResponse({ dispatch }, payload) {
    console.log(payload);
    LoanService.EndExtensionRequest(payload).then((response) => {
      if (!response.data.success) {
        $router.push("/error");
      } else {
        dispatch("updateLoans");
      }
    });
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

  async setReturnDate({ commit }, loanId) {
    await LoanService.SetReturnDate(loanId).then((response) => {
      if (response.data.success) {
        commit("setReturnDate", response.data.data);
      } else {
        $router.push("/error");
      }
    });
  },

  async updateLoans({ commit }) {
    const loanResponse = await LoanService.GetAllLoans();
    if (!loanResponse.data.success) {
      throw new Error(loanResponse.data.message);
    }
    commit("setLoans", loanResponse.data.data);
  },
};
