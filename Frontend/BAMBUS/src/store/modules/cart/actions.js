import LoanService from "@/store/services/LoanService";
import ItemServices from "@/store/services/ItemServices";
import item from "../item";


export default {
  async rentItem({ commit, dispatch, rootState }, { item, dueDate }) {
    if (!dueDate) {
      alert("Please select a return date");
    } else {
      dueDate = new Date(dueDate).toISOString();
      const userId = rootState.userStore.user.userId;
      const startDate = new Date().toISOString();

      await LoanService.CreateLoan({ userId: userId, itemId : item.itemId, itemType : item.type, dueDate : dueDate, startDate : startDate }).then((response) => {
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
  async reserveItem({ commit, dispatch, rootState }, itemId) {
    let item = rootState.itemStore.items.find(
      (item) => item.itemId === itemId
    );
    const userId = rootState.userStore.user.userId;
    item.reservations.push(userId);
    console.log(item);
    await ItemServices.UpdateItem(item).then((response) => {
      if (response.data.success) {
        commit("itemStore/setItems", response.data.data, { root: true });
        commit("removeReservationItemFromCart", itemId);
      } else {
        $router.push("/error");
      }
    });
      // dispatch("itemStore/userReservesItem", itemId, { root: true });
  },
  removeRentalItemFromCart({ commit }, itemId) {
    commit("removeRentalItemFromCart", itemId);
  },
  removeReservationItemFromCart({ commit }, itemId) {
    commit("removeReservationItemFromCart", itemId);
  },

  addItemToCart({ commit, state, rootState }, payload) {
    const userId = rootState.userStore.user.userId;
    const itemIsInCartAlready =
      state.cartRentalItems.find((item) => item.itemId === payload.itemId) ||
      state.cartReservationItems.find((item) => item.itemId === payload.itemId);
    const itemIsAlreadyReservedByUser = payload.reservations.includes(userId);
    const itemIsReserved = payload.reservations.length > 0;
    const activeLoansByUser = rootState.loanStore.loans;
    const itemIsAlreadyRented = activeLoansByUser.some(item => item.itemId === payload.itemId);
    if (itemIsInCartAlready) {
      alert("Item is already in cart");
    } else if (itemIsAlreadyReservedByUser) {
      alert("Item is already reserved by you");
    } else if (itemIsAlreadyRented) {
      alert("Item is already rented");
    } else if (payload.currentLoanId && itemIsReserved ) {
      commit("addItemToReservationCart", payload);
    } else if (!payload.currentLoanId && !itemIsReserved) {
      commit("addItemToRentalCart", payload);
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
