import ItemServices from "../../services/ItemServices";

export default {
  async loadItems({ commit }) {
    await ItemServices.LoadAllItems().then((response) => {
      if (response.data.success) {
        commit("setItems", response.data.data);
      }
      else {
        $router.push("/error");
      }
    });
  },
 async deleteItem({ commit }, id) {
    await ItemServices.DeleteItem(id).then((response) => {
      if (response.data.success) {
        commit("setItems", response.data.data);
      }
      else {
        $router.push("/error");
      }
    });  
  },
  createItem({ commit }, item) {

    commit("addItem", item);
  },
  setEditItemId({ commit }, id) {
    commit("setEditItemId", id);
  },
  editBook({ commit }, payload) {
    commit("editBook", payload);
  },
  editGame({ commit }, payload) {
    commit("editGame", payload);
  },
  editMagazine({ commit }, payload) {
    commit("editMagazine", payload);
  },
  addItem({ commit }, item) {
    commit("addItemToCart", item);
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
  cancelReservation({ commit }, payload) {
    commit("removeReservationFromItem", payload);
  },
  setSortedBy({ commit }, payload) {
    commit("setSortedBy", payload);
  },
  setFilteredBy({ commit }, payload) {
    commit("setFilteredBy", payload);
  },
  setOnlyAvailable({ commit }, payload) {
    commit("setOnlyAvailable", payload);
  },
  setSearch({ commit }, payload) {
    commit("setSearch", payload);
  },
  acceptDamage({ commit }, payload) {
    console.log(payload);
    commit("acceptDamage", payload);
  },
  rejectDamage({ commit }, payload) {
    console.log(payload);
    commit("rejectDamage", payload);
  },
};
