export default {
  adddueDate({ commit, state }, payload) {
    const index = state.cartRentalItems.findIndex(
      (item) => item.itemId === payload.itemId
    );
    if (index !== -1) {
      commit("adddueDate", { payload, index });
    }
  },
  rentItem({ commit, dispatch }, payload) {
    if (!payload.dueDate) {
      alert("Please select a return date");
    } else {
      commit("removeRentalItemFromCart", payload.itemId);
      dispatch("itemStore/userRentsItem", payload, { root: true });
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
    } else if (payload.available === true) {
      commit("addItemToRentalCart", payload);
    } else if (payload.available === false) {
      commit("addItemToReservationCart", payload);
    } else {
      alert("Item is not available for rent or reservation");
    }
  },
};
