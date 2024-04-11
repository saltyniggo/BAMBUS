import router from "../../../router/index.js";

export default {
  checkDueDates({ dispatch, rootState }) {
    const today = new Date();
    const user = rootState.userStore.user;
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
  },

  checkAllDueDates({ dispatch, rootState }) {
    const today = new Date();
    const loans = rootState.loanStore.loans;
    loans.forEach((loan) => {
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
      if (item.reservations[0] === user.userId && !item.currentLoanId) {
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

  userRequestsPasswordReset({ dispatch }, payload) {
    if (!this.state.userStore.users.find((user) => user.email === payload)) {
      alert("User does not exist");
      return;
    } else {
      const username = this.state.userStore.users.find(
        (user) => user.email === payload
      ).username;
      const notification = {
        notificationId: null,
        type: 8,
        title: null,
        message: `${username} mit der Adresse ${payload} hat eine Zurücksetzung des Passworts angefragt`,
        senderId: 0,
        receiverId: 3,
        date: new Date().toLocaleDateString("de-DE"),
        payload: payload,
      };
      dispatch("userStore/addNotification", notification, { root: true });
      alert("Passwort zurücksetzen angefordert.");
      router.push({ name: "login" });
    }
  },
  userReportsDamage({ dispatch, rootState }, payload) {
    const userName = rootState.userStore.users.find(
      (user) => user.userId === payload.userId
    ).username;
    const notification = {
      notificationId: null,
      type: 9,
      title: null,
      message: `${payload.title} (${payload.itemId}) ist von ${userName} beschädigt gemeldet worden. Die Schadensbeschreibung lautet: '${payload.damageDescription}'`,
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
      type: 5,
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
