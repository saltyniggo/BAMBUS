import LoanService from "@/store/services/LoanService";

export default {
  rentItem({ commit, dispatch, rootState }, { item, dueDate }) {
    if (!dueDate) {
      alert("Please select a return date");
    } else {
      dueDate = new Date(dueDate).toISOString();
      const userId = rootState.userStore.user.userId;
      const startDate = new Date().toISOString();

      LoanService.CreateLoan({ userId: userId, itemId : item.itemId, itemType : item.type, dueDate : dueDate, startDate : startDate }).then((response) => {
        if (response.data.success) {
          commit("removeRentalItemFromCart", item.itemId);
          dispatch("itemStore/loadItems", null, {root: true});
          LoanService.GetAllLoansFromUser(userId).then((response) => {
            if (!response.data.success) {
              alert("Error getting updated loans");
            }
            else {
              commit("loanStore/setLoans", response.data.data, { root: true });
            }
          });
        }
        else {
          alert("Error creating loan");
        }
      });
      
      // dispatch("loanStore/createLoan", { item, dueDate }, { root: true });
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
