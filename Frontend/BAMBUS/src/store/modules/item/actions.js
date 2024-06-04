import ItemServices from "../../services/ItemServices";
import store from "../../index.js";
import $router from "@/router";
import LoanService from "@/store/services/LoanService";
import RatingService from "@/store/services/RatingService";

export default {
  async loadItems({ commit }) {
    await ItemServices.LoadAllItems().then((response) => {
      if (response.data.success) {
        commit("setItems", response.data.data);
      } else {
        $router.push("/error");
      }
    });
  },
  async deleteItem({ commit }, id) {
    let item = store.getters["itemStore/getItemById"](id);
    if (item.currentLoanId != 0) {
      if (
        confirm(
          "Dieser Artikel ist noch ausgeliehen. Wollen Sie ihn trotzdem löschen?"
        ) == false
      ) {
        return;
      } else {
        LoanService.SetReturnDate(item.currentLoanId);
        LoanService.EndExtensionRequest(item.currentLoanId);
      }
    }
    await ItemServices.DeleteItem(id).then((response) => {
      if (response.data.success) {
        commit("setItems", response.data.data);
        RatingService.DeleteRatingByItemId(id);
      } else {
        $router.push("/error");
      }
    });
  },
  async createItem({ commit, dispatch }, item) {
    await ItemServices.AddItem(item).then((response) => {
      if (response.data.success) {
        commit("setItems", response.data.data);
        dispatch(
          "notificationStore/managerAddsItem",
          { title: item.title },
          { root: true }
        );
      } else {
        $router.push("/error");
      }
    });
  },
  async editItem({ commit }, payload) {
    await ItemServices.UpdateItem(payload).then((response) => {
      if (response.data.success) {
        commit("setItems", response.data.data);
      } else {
        $router.push("/error");
      }
    });
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

  async checkReservationTime({ dispatch, getters }) {
    let items = getters.getItemsWithoutLoanButReserved;
    if (!items) {
      return;
    }
    items.forEach((item) => {
      ItemServices.IsReturnLongerThanWeekAgo(item.itemId).then((response) => {
        if (response.data.success && response.data.data) {
          if (item.reservations.length > 0) {
            let userId = item.reservations[1];
            //Test
            dispatch(
              "notificationStore/informAboutAvailableReservation",
              { itemId: item.itemId, userId: userId, title: item.title },
              { root: true }
            );
          }
        }
      });
    });
  },
  async cancelReservation({ commit, dispatch, state, rootState }, payload) {
    let item = state.items.find((item) => item.itemId === payload.itemId);

    if (item.reservations[0] !== payload.userId) {
      item.reservations = item.reservations.filter(
        (userId) => userId !== payload.userId
      );
    } else {
      item.reservations.shift();
      if (item.reservations.length > 0) {
        dispatch(
          "notificationStore/informAboutAvailableReservation",
          {
            itemId: item.itemId,
            userId: item.reservations[0],
            title: item.title,
          },
          { root: true }
        );
      }
    }
    await ItemServices.UpdateItem(item).then((response) => {
      if (response.data.success) {
        commit("setItems", response.data.data);
      } else {
        $router.push("/error");
      }
    });
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
};
