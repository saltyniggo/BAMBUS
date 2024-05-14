import ItemServices from "../../services/ItemServices";
import store from "../../index.js";
import $router from "@/router";
import item from ".";

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
    await ItemServices.DeleteItem(id).then((response) => {
      if (response.data.success) {
        commit("setItems", response.data.data);
      } else {
        $router.push("/error");
      }
    });
  },
  async createItem({ commit }, item) {
    await ItemServices.AddItem(item).then((response) => {
      if (response.data.success) {
        commit("setItems", response.data.data);
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
  // async addLoanIdToItem({ commit, state }, payload) {
  //   await ItemServices.AddLoan(payload).then((response) => {
  //     if (response.data.success) {
  //       // TODO Does it return the updated item list?
  //       commit("setItems", response.data.data);
  //     } else {
  //       $router.push("/error");
  //     }
  //   });
  // },
  // async removeLoanIdFromItem({ commit }, payload) {
  //   await ItemServices.RemoveLoan(payload).then((response) => {
  //     if (response.data.success) {
  //       // TODO Does it return the updated item list?
  //       commit("setItems", response.data.data);
  //     } else {
  //       $router.push("/error");
  //     }
  //   });
  // },
  // async userReservesItem({ commit, state, rootState }, payload) {
  //   const index = state.items.findIndex((item) => item.itemId === payload);
  //   if (index !== -1) {
  //     const userId = rootState.userStore.user.userId;
  //     if (userId == null) {
  //       alert("Please log in to reserve an item");
  //     } else {
  //       await ItemServices.RemoveLoan({
  //         userId: userId,
  //         itemId: item.itemId,
  //       }).then((response) => {
  //         if (response.data.success) {
  //           // TODO Does it return the updated item list?
  //           commit("setItems", response.data.data);
  //         } else {
  //           $router.push("/error");
  //         }
  //       });
  //     }
  //   }
  // },
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
  // async cancelReservation({ commit }, payload) {
  //   const index = state.items.findIndex((item) => item.itemId === payload);
  //   if (index !== -1) {
  //     await ItemServices.RemoveReservationByUser(payload).then((response) => {
  //       if (response.data.success) {
  //         // TODO Does it return the updated item list?
  //         commit("setItems", response.data.data);
  //       } else {
  //         $router.push("/error");
  //       }
  //     });
  //   }
  // },

  async checkReservationTime({ getters }) {
    console.log("Checking reservation time items");
    let items = getters.getItemsWithoutLoanButReserved;
    console.log(items);

    if (!items) {
      return;
    }
    items.forEach((item) => {
      ItemServices.IsReturnLongerThanWeekAgo(item.itemId).then((response) => {
        console.log("Checking reservation time");
        console.log(response);
        if (response.data.success && response.data.data) {
          console.log("Reservation time is over a week");
          console.log(item.reservations);

          if (item.reservations.length>0) {
            let userId = item.reservations[1];
            //TODO: Send message to user next in line
            console.log("Send message to user next in line:" + userId);
          }
        }
      }
      );
    });
  },

  async cancelReservation({ commit, state, rootState }, payload) {
    console.log("Canceling reservation");
    let item = state.items.find((item) => item.itemId === payload.itemId);

    if (item.reservations[0] !== payload.userId) {
    item.reservations = item.reservations.filter((userId) => userId !== payload.userId);
    console.log("Reservation canceled");
    }
    else {
      item.reservations.shift();
      if (item.reservations.length > 0) {
      //TODO: Send message to user next in line
      console.log("Send message to user next in line" + item.reservations[0]);
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
  acceptDamage({ commit }, payload) {
    commit("acceptDamage", payload);
  },
  rejectDamage({ commit }, payload) {
    commit("rejectDamage", payload);
  },
};
