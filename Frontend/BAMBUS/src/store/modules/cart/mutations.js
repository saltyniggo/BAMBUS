export default {
  addReturnDate(state, { payload, index }) {
    state.cartRentalItems[index].returnDate = payload.returnDate;
  },

  removeRentalItemFromCart(state, itemId) {
    state.cartRentalItems = state.cartRentalItems.filter(
      (item) => item.itemId !== itemId
    );
  },

  removeReservationItemFromCart(state, itemId) {
    state.cartReservationItems = state.cartReservationItems.filter(
      (item) => item.itemId !== itemId
    );
  },

  addItemToRentalCart(state, payload) {
    state.cartRentalItems.push(payload);
  },

  addItemToReservationCart(state, payload) {
    state.cartReservationItems.push(payload);
  },
};
