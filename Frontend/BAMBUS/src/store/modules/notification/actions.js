import MessageService from "@/store/services/MessageService.js";
import router from "../../../router/index.js";

export default {
  checkDueDates({ dispatch, rootState }) {
    const today = new Date();
    const user = rootState.userStore.user;
    if (rootState.loanStore.loans != null || rootState.loanStore.loans != undefined) {
    const loans = rootState.loanStore.loans.filter(
      (loan) => loan.userId === user.userId
    );
    loans.forEach((loan) => {
      const daysUntilReturn = Math.floor(
        (today - new Date(loan.dueDate)) / (1000 * 60 * 60 * 24)
      );
      if (daysUntilReturn > -5 && loan.returnDate === null) {
        const itemTitle = rootState.itemStore.items.find(
          (item) => item.itemId === loan.itemId
        ).title;
        const notification = {
          notificationId: null,
          type: 1,
          title: null,
          message: null,
          senderId: 0,
          receiverId: user.userId,
          date: new Date().toLocaleDateString("de-DE"),
          payload: null,
        };
        if (daysUntilReturn > 1) {
          notification.message = `${itemTitle} ist seit ${daysUntilReturn} Tagen überfällig`;
        } else if (daysUntilReturn === 1) {
          notification.message = `${itemTitle} ist seit einem Tag überfällig`;
        } else if (daysUntilReturn <= 5) {
          notification.message = `${itemTitle} ist in ${-daysUntilReturn} Tagen fällig`;
        }
        dispatch("userStore/addNotification", notification, {
          root: true,
        });
      }
    });
  }
  else {
    return;
  }
  },

  checkAllDueDates({ dispatch, rootState }) {
    const today = new Date();
    const loans = rootState.loanStore.loans;
    if (loans === null || loans === undefined) {
      return;
    }
    loans.forEach((loan) => {
      if (loan.returnDate) {
        return;
      }
      const daysOverdue = Math.floor(
        (today - new Date(loan.dueDate)) / (1000 * 60 * 60 * 24)
      );
      const itemTitle = rootState.itemStore.items.find(
        (item) => item.itemId === loan.itemId
      ).title;
      const username = rootState.userStore.users.find(
        (user) => user.userId === loan.userId
      ).username;
      if (daysOverdue > 0) {
        const notification = {
          notificationId: null,
          type: 6,
          title: null,
          message: null,
          senderId: 0,
          receiverId: 2,
          date: new Date().toLocaleDateString("de-DE"),
          payload: loan,
        };
        if (daysOverdue > 1) {
          notification.message = `${username} hat ${itemTitle} seit ${daysOverdue} Tagen überfällig`;
        } else if (daysOverdue === 1) {
          notification.message = `${username} hat ${itemTitle} seit einem Tag überfällig`;
        }
        dispatch("userStore/addNotification", notification, {
          root: true,
        });
      }
    });
  },

  checkReservedItems({ dispatch, rootState }) {
    const user = rootState.userStore.user;
    rootState.itemStore.items.forEach((item) => {
      if (item.reservations !== null && item.reservations[0] === user.userId && !item.currentLoanId) {
        const notification = {
          notificationId: null,
          type: 2,
          title: null,
          message: `Der von Ihnen reservierte Artikel ${item.title} ist jetzt verfügbar`,
          senderId: 0,
          receiverId: user.userId,
          date: new Date().toLocaleDateString("de-DE"),
          payload: null,
        };
        dispatch("userStore/addNotification", notification, { root: true });
      }
    });
  },

  userRequestsLoanExtension({ commit, dispatch, rootState }, payload) {
    if (payload.newDueDate === null || payload.newDueDate === "") {
      alert("Bitte geben Sie ein neues Rückgabedatum an.");
      return;
    }
    const user = rootState.userStore.user;
    const dateGerman = new Date(payload.newDueDate).toLocaleDateString("de-DE");
    const notification = {
      notificationId: null,
      type: 5,
      title: null,
      message: `${user.username} hat eine Verlängerung der Ausleihe von ${payload.itemTitle} bis zum ${dateGerman} angefragt`,
      senderId: user.userId,
      receiverId: 2,
      date: new Date().toLocaleDateString("de-DE"),
      payload: {
        loanId: payload.loanId,
        userId: user.userId,
        newDueDate: payload.newDueDate,
      },
    };
    commit("loanStore/setExtensionRequestActive", payload.loanId, {
      root: true,
    });
    dispatch("userStore/addNotification", notification, { root: true });
  },

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

  async userRequestsPasswordReset({ dispatch }, payload) {

    var message = {
      senderId: 0,
      receiverId: 0,
      date: new Date(),
      text: `${payload} hat eine Zurücksetzung des Passworts angefragt`,
      type: 7,
      payload: payload,
    }
      await MessageService.UserRequestsPasswordReset(message).then((response) => {
        if (response.data.success) {
          alert("Passwort zurücksetzen angefordert.");
          router.push({ name: "login" });
        }
        else {
          alert(response.data.message);
        }
     });	
  },
  userReportsDamage({ dispatch, rootState }, payload) {
    const username = rootState.userStore.users.find(
      (user) => user.userId === payload.userId
    ).username;
    const notification = {
      notificationId: null,
      type: 9,
      title: null,
      message: `${payload.title} (${payload.itemId}) ist von ${username} beschädigt gemeldet worden. Die Schadensbeschreibung lautet: '${payload.damageDescription}'`,
      senderId: payload.userId,
      receiverId: 2,
      date: new Date().toLocaleDateString("de-DE"),
      payload: payload,
    };
    dispatch("userStore/addNotification", notification, { root: true });
  },
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
