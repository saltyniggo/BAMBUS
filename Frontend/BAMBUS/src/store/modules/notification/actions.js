import MessageService from "@/store/services/MessageService.js";
import router from "../../../router/index.js";
import LoanService from "@/store/services/LoanService.js";

export default {
  async checkDueDates({ commit, rootState }) {
    const today = new Date();
    const user = rootState.userStore.user;
    const activeLoans = rootState.loanStore.loans.filter(
      (loan) => loan.userId === user.userId && loan.returnDate === null
    );
    activeLoans.forEach(async (loan) => {
      const item = rootState.itemStore.items.find(
        (item) => item.itemId === loan.itemId
      );
      const daysUntilReturn = Math.floor(
        (today - new Date(loan.dueDate)) / (1000 * 60 * 60 * 24)
      );
      let text;
      if (daysUntilReturn > 1) {
        text = `${item.title} ist seit ${daysUntilReturn} Tagen überfällig`;
      } else if (daysUntilReturn === 1) {
        text = `${item.title} ist seit einem Tag überfällig`;
      } else if (daysUntilReturn <= 5) {
        text = `${item.title} ist in ${-daysUntilReturn} Tagen fällig`;
      }
      if (daysUntilReturn > -5 && loan.returnDate === null) {
        const notification = user.notifications.find(
          (notification) =>
            notification.type === 1 &&
            parseInt(notification.payload) === loan.loanId
        );
        if (notification) {
          if ((today - new Date(notification.date)) / 1000 / 60 / 60 / 24 > 1) {
            MessageService.DeleteMessage(notification.messageId).then(
              (response) => {
                if (!response.data.success) {
                  router.push("/error");
                  return;
                } else {
                  MessageService.CreateMessage({
                    senderId: 0,
                    receiverId: user.userId,
                    text: text,
                    date: today.toLocaleDateString("de-DE"),
                    type: 1,
                    payload: loan.loanId.toString(),
                  }).then((response) => {
                    if (response.data.success) {
                      commit("userStore/setNotifications", response.data.data, {
                        root: true,
                      });
                    } else if (!response.data.success) {
                      router.push("/error");
                    }
                  });
                }
              }
            );
          }
        } else {
          MessageService.CreateMessage({
            senderId: 0,
            receiverId: user.userId,
            text: text,
            date: today.toLocaleDateString("de-DE"),
            type: 1,
            payload: loan.loanId.toString(),
          }).then((response) => {
            if (response.data.success) {
              commit("userStore/setNotifications", response.data.data, {
                root: true,
              });
            } else if (!response.data.success) {
              router.push("/error");
            }
          });
        }
      }
    });
  },

  async checkAllDueDates({ commit, rootState }) {
    const today = new Date();
    const user = rootState.userStore.user;
    const loans = await LoanService.GetAllLoans();
    const activeLoans = loans.data.data.filter(
      (loan) => loan.returnDate === null
    );
    activeLoans.forEach(async (loan) => {
      const item = rootState.itemStore.items.find(
        (item) => item.itemId === loan.itemId
      );
      const daysOverdue = Math.floor(
        (today - new Date(loan.dueDate)) / (1000 * 60 * 60 * 24)
      );
      const username = rootState.userStore.users.find(
        (user) => user.userId === loan.userId
      ).username;
      let text;
      if (daysOverdue > 1) {
        text = `${username} hat ${item.title} seit ${daysOverdue} Tagen überfällig`;
      } else if (daysOverdue === 1) {
        text = `${username} hat ${item.title} seit einem Tag überfällig`;
      } else if (daysOverdue === 0) {
        text = `${username} hat ${item.title} heute überfällig`;
      }
      if (daysOverdue > 0 && loan.returnDate === null) {
        const notification = user.notifications.find(
          (notification) =>
            notification.type === 6 &&
            parseInt(notification.payload) === loan.loanId
        );
        if (notification) {
          if ((today - new Date(notification.date)) / 1000 / 60 / 60 / 24 > 1) {
            MessageService.DeleteMessage(notification.messageId).then(
              (response) => {
                if (!response.data.success) {
                  router.push("/error");
                  return;
                } else {
                  MessageService.CreateMessage({
                    senderId: 0,
                    receiverId: user.userId,
                    text: text,
                    date: today.toLocaleDateString("de-DE"),
                    type: 6,
                    payload: loan.loanId.toString(),
                  }).then((response) => {
                    if (response.data.success) {
                      commit("userStore/setNotifications", response.data.data, {
                        root: true,
                      });
                    } else if (!response.data.success) {
                      router.push("/error");
                    }
                  });
                }
              }
            );
          }
        } else {
          MessageService.CreateMessage({
            senderId: 0,
            receiverId: user.userId,
            text: text,
            date: today.toLocaleDateString("de-DE"),
            type: 6,
            payload: loan.loanId.toString(),
          }).then((response) => {
            if (response.data.success) {
              commit("userStore/setNotifications", response.data.data, {
                root: true,
              });
            } else if (!response.data.success) {
              router.push("/error");
            }
          });
        }
      }
    });
  },

  // TODO
  // checkReservedItems({ rootState }) {
  //   const user = rootState.userStore.user;
  //   rootState.itemStore.items.forEach((item) => {
  //     if (
  //       item.reservations !== null &&
  //       item.reservations[0] === user.userId &&
  //       !item.currentLoanId
  //     ) {
  //       const messageResponse = MessageService.CreateMessage({
  //         senderId: 0,
  //         receiverId: user.userId,
  //         text: `Der von Ihnen reservierte Artikel ${item.title} ist jetzt verfügbar`,
  //         date: today.toLocaleDateString("de-DE"),
  //         type: 2,
  //         payload: null,
  //       });
  //       if (!messageResponse.data.success) {
  //         router.push("/error");
  //       }
  //     }
  //   });
  // },

  //Repalces the above function:
  async informAboutAvailableReservation({ commit }, payload) {
    console.log("informAboutAvailableReservation");
    await MessageService.CreateMessage({
      senderId: 0,
      receiverId: payload.userId,
      text: `Der von Ihnen reservierte Artikel ${payload.title} ist jetzt verfügbar`,
      date: new Date().toLocaleDateString("de-DE"),
      type: 1,
      payload: payload.itemId.toString(),
    }).then((response) => {
      if (response.data.success) {
        console.log("Message sent");
        console.log(response.data.data);
        commit("userStore/setNotifications", response.data.data, {
          root: true,
        });
      } else if (!response.data.success) {
        console.log(response.data.message);
        router.push("/error");
      }
    });
  },

  // TODO
  async userRequestsLoanExtension({ rootState }, payload) {
    if (payload.newDueDate === null || payload.newDueDate === "") {
      alert("Bitte geben Sie ein neues Rückgabedatum an.");
      return;
    }
    const user = rootState.userStore.user;
    const dateGerman = new Date(payload.newDueDate).toLocaleDateString("de-DE");
    const messageResponse = await MessageService.CreateMessage({
      senderId: user.userId,
      receiverId: 2,
      text: `${user.username} hat eine Verlängerung der Ausleihe von ${payload.itemTitle} bis zum ${dateGerman} angefragt`,
      date: new Date().toLocaleDateString("de-DE"),
      type: 5,
      payload: JSON.stringify({
        loanId: payload.loanId,
        userId: user.userId,
        newDueDate: payload.newDueDate,
      }),
    });
    if (!messageResponse.data.success) {
      router.push("/error");
      return;
    } else {
      const loan = rootState.loanStore.loans.find(
        (loan) => loan.loanId === payload.loanId
      );
      LoanService.ActivateExtensionRequest(loan.loanId).then((response) => {
        if (!response.data.success) {
          router.push("/error");
          return;
        }
      });
    }
  },

  async userRegistersAccount({}, payload) {
    console.log("userRegistersAccount");
    console.log(payload);
    var message = {
      senderId: payload.userId,
      receiverId: 4,
      date: new Date().toLocaleDateString("de-DE"),
      text: `${payload.username} hat sich registriert`,
      type: 6,
      payload: null,
    };

      await MessageService.CreateMessage(message).then((response) => {
        if (!response.data.success) {
          console.log("Message to Manager about new user registration failed");
          return;
        }
      }
    );
  },

  async userRequestsPasswordReset({ dispatch }, payload) {
    var message = {
      senderId: 0,
      receiverId: 0,
      date: new Date().toLocaleDateString("de-DE"),
      text: `${payload} hat eine Zurücksetzung des Passworts angefragt`,
      type: 7,
      payload: payload,
    };
    await MessageService.UserRequestsPasswordReset(message).then((response) => {
      if (response.data.success) {
        alert("Passwort zurücksetzen angefordert.");
        router.push({ name: "login" });
      } else {
        alert(response.data.message);
      }
    });
  },

  async userReportsDamage({ rootState }, payload) {
    const username = rootState.userStore.user.username;
    const message = {
      senderId: payload.userId,
      receiverId: 0,
      text: `${username} hat einen Schaden an ${payload.title} (${payload.itemId}) gemeldet. Die Schadensbeschreibung lautet: '${payload.damageDescription}'`,
      date: new Date().toLocaleDateString("de-DE"),
      type: 8,
      payload: null,
    };
    await MessageService.CreateMessage(message).then((response) => {
      if (!response.data.success) {
        router.push("/error");
        return;
      }
    });
  },

  async managerAddsItem({ dispatch }, payload) {
    const message = {
      senderId: 0,
      receiverId: 0,
      date: new Date().toLocaleDateString("de-DE"),
      text: `Der Artikel ${payload.title} wurde zum Katalog hinzugefügt`,
      type: 9,
      payload: payload.title,
    };
    await MessageService.CreateMessage(message).then((response) => {
      if (response.data.success) {
        alert("Artikel hinzugefügt");
        router.push({ name: "catalog" });
      } else {
        alert(response.data.message);
      }
    });
  },

  // TODO
  managerRespondsToExtensionRequest({ dispatch, rootState }, payload) {
    const userId = rootState.loanStore.loans.find(
      (loan) => loan.loanId === payload.loanId
    ).userId;
    const dateGerman = new Date(payload.newDueDate).toLocaleDateString("de-DE");
    const notification = {
      notificationId: null,
      type: 10,
      title: null,
      message: null,
      senderId: 2,
      receiverId: userId,
      date: new Date().toLocaleDateString("de-DE"),
      payload: payload,
    };
    const loan = rootState.loanStore.loans.find(
      (loan) => loan.loanId === payload.loanId
    );
    const itemTitle = rootState.itemStore.items.find(
      (item) => item.itemId === loan.itemId
    ).title;
    if (payload.response === "accept") {
      notification.message = `Der Manager hat die Verlängerung der Ausleihe von ${itemTitle} bis zum ${dateGerman} bestätigt`;
    } else if (payload.response === "decline") {
      notification.message = `Der Manager hat die Verlängerung der Ausleihe von ${itemTitle} abgelehnt`;
    }
    dispatch("userStore/addNotification", notification, { root: true });
  },
};
