export default {
  deleteItem({ commit }, id) {
    commit("deleteItem", id);
  },
  addItem({ commit }, item) {
    commit("addItemToCart", item);
  },

  createItem({ commit }, item) {
    commit("addItem", item);
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

  setReportItemId({ commit }, id) {
    commit("setReportItemId", id);
  },
  deleteAllModalIds({ commit }) {
    commit("deleteAllModalIds");
  },
  addLoanIdToItem({ commit }, payload) {
    commit("addLoanIdToItem", payload);
  },
  removeLoanIdFromItem({ commit }, payload) {
    commit("removeLoanIdFromItem", payload);
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
    const index = state.items.findIndex(
      (item) => item.itemId === payload.itemId
    );
    commit("saveEditItem", { payload, index });
  },
  requestExtension({ commit, rootState }, payload) {
    if (!payload.newDueDate) {
      alert("Bitte wählen Sie ein neues Rückgabedatum");
      return;
    }
    if (payload.newDueDate <= payload.item.dueDate) {
      alert(
        "Das neue Rückgabedatum muss nach dem aktuellen Rückgabedatum liegen"
      );
      return;
    }
    const maxFutureDate = new Date(payload.item.dueDate);
    maxFutureDate.setDate(maxFutureDate.getDate() + 31);
    const formattedDate = maxFutureDate.toISOString().split("T")[0];
    if (payload.newDueDate > formattedDate) {
      alert(
        "Das neue Rückgabedatum darf nicht mehr als 31 Tage in der Zukunft liegen"
      );
      console.log(formattedDate);
      return;
    }
    const userId = rootState.userStore.user.userId;
    alert(
      `Benutzer ${userId} beantragt eine Verlängerung für Artikel ${payload.item.itemId} bis zum ${payload.newDueDate}`
    );
    const index = rootState.itemStore.items.findIndex(
      (item) => item.itemId === payload.item.itemId
    );
    commit("requestExtension", { index, newDueDate: payload.newdueDate });
  },

  reportItem({ commit }) {
    commit("reportItem");
  },
};
