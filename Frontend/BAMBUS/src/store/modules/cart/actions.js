export default {
  rentItem({ commit, dispatch }, { item, dueDate }) {
    if (!dueDate) {
      alert("Please select a return date");
    } else {
      dueDate = new Date(dueDate).toLocaleDateString("de-DE");
      commit("removeRentalItemFromCart", item.itemId);
      dispatch("loanStore/createLoan", { item, dueDate }, { root: true });
    }
  },
  reserveItem({ commit, dispatch, rootState }, itemId) {
    const index = rootState.itemStore.items.findIndex(
      (item) => item.itemId === itemId
    );
    if (index !== -1) {
      dispatch("itemStore/userReservesItem", itemId, { root: true });
      commit("removeReservationItemFromCart", itemId);
    }
  },
  removeRentalItemFromCart({ commit }, itemId) {
    commit("removeRentalItemFromCart", itemId);
  },
  removeReservationItemFromCart({ commit }, itemId) {
    commit("removeReservationItemFromCart", itemId);
  },

  addItemToCart({ commit, state }, payload) {
    const itemIsInCartAlready =
      state.cartRentalItems.find((item) => item.itemId === payload.itemId) ||
      state.cartReservationItems.find((item) => item.itemId === payload.itemId);
    if (itemIsInCartAlready) {
      alert("Item is already in cart");
    } else if (!payload.currentLoanId) {
      commit("addItemToRentalCart", payload);
    } else if (payload.currentLoanId) {
      commit("addItemToReservationCart", payload);
    } else {
      alert("Item is not available for rent or reservation");
    }
  },
};
