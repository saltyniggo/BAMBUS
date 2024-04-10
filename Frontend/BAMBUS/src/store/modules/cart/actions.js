export default {
  rentItem({ commit, dispatch, rootState }, { item, dueDate }) {
    if (!dueDate) {
      alert("Please select a return date");
    } else {
      dueDate = new Date(dueDate).toISOString().split("T")[0];
      commit("removeRentalItemFromCart", item.itemId);
      const userId = rootState.userStore.user.userId;
      dispatch("loanStore/createLoan", { item, dueDate }, { root: true });
      commit(
        "itemStore/removeReservationFromItem",
        { itemId: item.itemId, userId: userId },
        {
          root: true,
        }
      );
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

  addReservedItemToCart({ commit, state, rootState }, payload) {
    const itemIsInCartAlready = state.cartRentalItems.find(
      (item) => item.itemId === payload.itemId
    );
    if (itemIsInCartAlready) {
      alert("Item is already in cart");
    } else {
      const item = rootState.itemStore.items.find(
        (item) => item.itemId === payload.itemId
      );
      commit("addItemToRentalCart", item);
    }
  },
};
