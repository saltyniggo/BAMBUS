import LoanService from "@/store/services/LoanService";
import ItemServices from "@/store/services/ItemServices";

export default {
  async rentItem({ commit, dispatch, rootState }, { item, dueDate }) {
    if (!dueDate) {
      alert("Bitte gib ein Rückgabedatum an");
    } else {
      dueDate = new Date(dueDate).toISOString();
      const userId = rootState.userStore.user.userId;
      const startDate = new Date().toISOString();

      await LoanService.CreateLoan({
        userId: userId,
        itemId: item.itemId,
        itemType: item.type,
        dueDate: dueDate,
        startDate: startDate,
      }).then((response) => {
        if (response.data.success) {
          commit("removeRentalItemFromCart", item.itemId);
          dispatch("itemStore/loadItems", null, { root: true });
          LoanService.GetAllLoansFromUser(userId).then((response) => {
            if (!response.data.success) {
              alert("Error beim Updaten der Loans");
            } else {
              commit("loanStore/setLoans", response.data.data, { root: true });
            }
          });
        } else {
          alert("Error beim Erstellen des Loans");
        }
      });

      // dispatch("loanStore/createLoan", { item, dueDate }, { root: true });
      // commit(
      //   "itemStore/removeReservationFromItem",
      //   { itemId: item.itemId, userId: userId },
      //   {
      //     root: true,
      //   }
      // );
    }
  },
  async reserveItem({ commit, dispatch, rootState }, itemId) {
    let item = rootState.itemStore.items.find((item) => item.itemId === itemId);
    const userId = rootState.userStore.user.userId;
    item.reservations.push(userId);
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
    const itemIsReserved = payload.reservations.length > 0 && payload.reservations[0] != [0];
    const activeLoansByUser = rootState.loanStore.loans.filter(loan => loan.returnDate === null);
    const itemIsAlreadyRented = activeLoansByUser.some(item => item.itemId === payload.itemId);

    if (itemIsInCartAlready) {
      alert("Der Gegenstand ist bereits im Warenkorb");
    } else if (itemIsAlreadyReservedByUser) {
      alert("Du hast diesen Gegenstand bereits reserviert");
    } else if (itemIsAlreadyRented) {
      alert("Du leiht diesen Gegenstand bereits aus");
    } else if (payload.currentLoanId == 0 && !itemIsReserved) {
      commit("addItemToRentalCart", payload);
    } else if (itemIsReserved || payload.currentLoanId != null) {
      commit("addItemToReservationCart", payload);
    } else {
      alert(
        "Der Gegenstand kann zurzeit weder ausgeliehen noch reserviert werden " +
          itemIsReserved +
          " " +
          payload.currentLoanId
      );
    }
  },

  addReservedItemToCart({ commit, state, rootState }, payload) {
    const itemIsInCartAlready = state.cartRentalItems.find(
      (item) => item.itemId === payload.itemId
    );
    if (itemIsInCartAlready) {
      alert("Das Item ist bereits im Warenkorb");
    } else {
      const item = rootState.itemStore.items.find(
        (item) => item.itemId === payload.itemId
      );
      commit("addItemToRentalCart", item);
    }
  },
};
