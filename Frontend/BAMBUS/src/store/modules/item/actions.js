export default {
  deleteItem({ commit }, id) {
    commit("deleteItem", id);
  },
  addItem({ commit }, item) {
    commit("addItemToCart", item);
  },
  editItem({ commit }, item) {
    commit("editItem", item);
  },
  setEditItemId({ commit }, id) {
    commit("setEditItemId", id);
  },
  setReturnItemId({ commit }, id) {
    commit("setReturnItemId", id);
  },
  deleteAllModalIds({ commit }) {
    commit("deleteAllModalIds");
  },
  userRentsItem({ commit, state, rootState }, payload) {
    const userId = rootState.userStore.user.userId;
    const index = state.items.findIndex(
      (item) => item.itemId === payload.itemId
    );
    if (index !== -1) {
      commit("userRentsItem", {
        returnDate: payload.returnDate,
        userId: userId,
        index: index,
      });
    }
  },
  userReservesItem({ commit, state, rootState }, payload) {
    const index = state.items.findIndex((item) => item.itemId === payload);
    if (index !== -1) {
      const userId = rootState.userStore.user.userId;
      if (userId == null) {
        alert("Please log in to reserve an item");
      } else {
        commit("userReservesItem", { userId, index });
      }
    }
  },
  saveEditItem({ commit, state }, payload) {
    console.log(payload);
    console.log("das sollte hier nur einmal ausgeführt werden");
    const index = state.items.findIndex(
      (item) => item.itemId === payload.itemId
    );
    commit("saveEditItem", { payload, index });
  },
  requestExtension({ commit, rootState }, payload) {
    if (!payload.newReturnDate) {
      alert("Bitte wählen Sie ein neues Rückgabedatum");
      return;
    }
    if (payload.newReturnDate <= payload.item.returnDate) {
      alert(
        "Das neue Rückgabedatum muss nach dem aktuellen Rückgabedatum liegen"
      );
      return;
    }
    const maxFutureDate = new Date(payload.item.returnDate);
    maxFutureDate.setDate(maxFutureDate.getDate() + 31);
    const formattedDate = maxFutureDate.toISOString().split("T")[0];
    if (payload.newReturnDate > formattedDate) {
      alert(
        "Das neue Rückgabedatum darf nicht mehr als 31 Tage in der Zukunft liegen"
      );
      console.log(formattedDate);
      return;
    }
    const userId = rootState.userStore.user.userId;
    alert(
      `Benutzer ${userId} beantragt eine Verlängerung für Artikel ${payload.item.itemId} bis zum ${payload.newReturnDate}`
    );
    const index = rootState.itemStore.items.findIndex(
      (item) => item.itemId === payload.item.itemId
    );
    commit("requestExtension", { index, newReturnDate: payload.newReturnDate });
  },

  changeItemAvailability({ commit }, id) {
    commit("changeItemAvailability", { id });
  },
};
