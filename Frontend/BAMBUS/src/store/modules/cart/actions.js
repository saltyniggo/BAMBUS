export default {
  addReturnDate({ commit, state }, payload) {
    const index = state.cartRentalItems.findIndex(
      (item) => item.id === payload.id
    );
    if (index !== -1) {
      commit("addReturnDate", { payload, index });
    }
  },
  rentItem({ _, rootState }, payload) {
    const currentUserId = rootState.userStore.currentUserId;
    if (payload.returnDate == undefined) {
      alert("Please select a return date");
    } else {
      alert(
        `${currentUserId} hat das Item ${payload.id} ausgeliehen, bis zum ${payload.returnDate}`
      );
    }
  },
  reserveItem({ commit, rootState }, payload) {
    const currentUserId = rootState.userStore.currentUserId;
    console.log(currentUserId);
    const index = rootState.itemStore.items.findIndex(
      (item) => item.id === payload.id
    );
    console.log(index);
    if (index !== -1) {
      alert(`${currentUserId} hat das Item ${payload.id} reserviert`);
      commit("reserveItem", { payload, index, currentUserId });
    }
  },
};
