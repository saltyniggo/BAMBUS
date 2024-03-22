export default {
  addReturnDate(state, { payload, index }) {
    state.cartRentalItems[index].returnDate = payload.returnDate;
  },
  reserveItem(state, { payload, currentUserId }) {
    state.cartRentalItems.push({
      id: payload.id,
      userId: currentUserId,
    });
  },
};
