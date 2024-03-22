export default {
  addReturnDate({ commit, state }, payload) {
    const index = state.cartRentalItems.findIndex(
      (item) => item.itemId === payload.itemId
    );
    if (index !== -1) {
      commit("addReturnDate", { payload, index });
    }
  },
  rentItem({ commit, dispatch }, payload) {
    if (payload.returnDate == undefined) {
      alert("Please select a return date");
    } else {
      console.log(payload);
      commit("removeRentalItemFromCart", payload.itemId);
      dispatch("itemStore/userRentsItem", payload, { root: true });
      // alert(
      //   `${currentUserId} hat das Item ${payload.itemId} ausgeliehen, bis zum ${payload.returnDate}`
      // );
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
};
