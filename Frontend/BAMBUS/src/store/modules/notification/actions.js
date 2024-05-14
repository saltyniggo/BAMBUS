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
  checkReservedItems({ rootState }) {
    const user = rootState.userStore.user;
    rootState.itemStore.items.forEach((item) => {
      if (
        item.reservations !== null &&
        item.reservations[0] === user.userId &&
        !item.currentLoanId
      ) {
        const messageResponse = MessageService.CreateMessage({
          senderId: 0,
          receiverId: user.userId,
          text: `Der von Ihnen reservierte Artikel ${item.title} ist jetzt verfügbar`,
          date: today.toLocaleDateString("de-DE"),
          type: 2,
          payload: null,
        });
        if (!messageResponse.data.success) {
          router.push("/error");
        }
      }
    });
  },

  // TODO
  userRequestsLoanExtension({ rootState }, payload) {
    if (payload.newDueDate === null || payload.newDueDate === "") {
      alert("Bitte geben Sie ein neues Rückgabedatum an.");
      return;
    }
    const user = rootState.userStore.user;
    const dateGerman = new Date(payload.newDueDate).toLocaleDateString("de-DE");
    const messageResponse = MessageService.CreateMessage({
      senderId: user.userId,
      receiverId: 2,
      text: `${user.username} hat eine Verlängerung der Ausleihe von ${payload.itemTitle} bis zum ${dateGerman} angefragt`,
      date: new Date().toLocaleDateString("de-DE"),
      type: 5,
      payload: {
        loanId: payload.loanId,
        userId: user.userId,
        newDueDate: payload.newDueDate,
      },
    });
    if (!messageResponse.data.success) {
      router.push("/error");
      return;
    } else {
      const item = rootState.itemStore.items.find(
        (item) => item.itemId === payload.itemId
      );
      const itemResponse = ItemService.UpdateItem({
        itemId: item.itemId,
        title: item.title,
        condition: item.condition,
        type: item.type,
        isbn: item.isbn || null,
        issn: item.issn || null,
        category: item.category || null,
        author: item.author || null,
        reservations: item.reservations || null,
        currentLoanId: item.currentLoanId || null,
        avgRating: item.avgRating || null,
        extensionRequestActive: true,
      });
      if (!itemResponse.data.success) {
        router.push("/error");
        return;
      }
    }
  },

  // TODO
  userRegistersAccount({ dispatch }, payload) {
    const notification = {
      notificationId: null,
      type: 7,
      title: null,
      message: `${payload.username} hat sich registriert`,
      senderId: 0,
      receiverId: 3,
      date: new Date().toLocaleDateString("de-DE"),
      payload: payload,
    };

    dispatch("userStore/addNotification", notification, { root: true });
  },

  // TODO
  async userRequestsPasswordReset({ dispatch }, payload) {
    var message = {
      senderId: 0,
      receiverId: 0,
      date: new Date(),
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

  // TODO
  async userReportsDamage({ rootState }, payload) {
    const username = rootState.userStore.users.find(
      (user) => user.userId === payload.userId
    ).username;
    const message = {
      senderId: payload.userId,
      receiverId: 2,
      text: `${username} hat einen Schaden an ${payload.title} (${payload.itemId}) gemeldet. Die Schadensbeschreibung lautet: '${payload.damageDescription}'`,
      date: new Date().toLocaleDateString("de-DE"),
      type: 9,
      payload: payload,
    };
    await MessageService.CreateMessage(message).then((response) => {
      if (!response.data.success) {
        router.push("/error");
        return;
      }
    });
  },

  // TODO
  managerAddsItem({ dispatch }, payload) {
    const notification = {
      notificationId: null,
      type: 10,
      title: null,
      message: `Ein Manager hat den Artikel ${payload.title} hinzugefügt.`,
      senderId: 0,
      receiverId: "users",
      date: new Date().toLocaleDateString("de-DE"),
      payload: payload,
    };
    dispatch("userStore/addNotification", notification, { root: true });
  },

  // TODO
  managerRespondsToExtensionRequest({ dispatch, rootState }, payload) {
    const userId = rootState.loanStore.loans.find(
      (loan) => loan.loanId === payload.loanId
    ).userId;
    const dateGerman = new Date(payload.newDueDate).toLocaleDateString("de-DE");
    const notification = {
      notificationId: null,
      type: 11,
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
