export default {
  checkDueDates({ dispatch, rootState }) {
    const today = new Date();
    const user = rootState.userStore.user;
    const loans = rootState.itemStore.items.filter(
      (item) => item.rentedBy === user.userId
    );
    loans.forEach((loan) => {
      const daysUntilReturn = Math.floor(
        (today - new Date(loan.dueDate)) / (1000 * 60 * 60 * 24)
      );
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
        notification.message = `${loan.title} ist seit ${daysUntilReturn} Tagen überfällig`;
      } else if (daysUntilReturn === 1) {
        notification.message = `${loan.title} ist seit einem Tag überfällig`;
      } else if (daysUntilReturn <= 5) {
        notification.message = `${
          loan.title
        } ist in ${-daysUntilReturn} Tagen fällig`;
      }
      dispatch("userStore/addNotification", notification, {
        root: true,
      });
    });
  },

  checkAllDueDates({ dispatch, rootState }) {
    const today = new Date();
    const loans = rootState.itemStore.items.filter(
      (item) => item.rentedBy !== null
    );
    loans.forEach((loan) => {
      const daysOverdue = Math.floor(
        (today - new Date(loan.dueDate)) / (1000 * 60 * 60 * 24)
      );
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
          notification.message = `${loan.rentedBy} hat ${loan.title} seit ${daysOverdue} Tagen überfällig`;
        } else if (daysOverdue === 1) {
          notification.message = `${loan.rentedBy} hat ${loan.title} seit einem Tag überfällig`;
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
      if (item.reservations[0] === user.userId && item.available === true) {
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

  userRequestsLoanExtension({ dispatch, rootState }, payload) {
    const user = rootState.userStore.user;
    const notification = {
      notificationId: null,
      type: 5,
      title: null,
      message: `${user.username} hat eine Verlängerung der Ausleihe von ${payload.item.title} bis zum ${payload.newDueDate} angefragt`,
      senderId: user.userId,
      receiverId: 2,
      date: new Date().toLocaleDateString("de-DE"),
      payload: {
        item: payload.item,
        userId: user.userId,
        newDueDate: payload.newDueDate,
      },
    };
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
    if (!this.state.userStore.users.find((user) => user.username === payload)) {
      alert("User does not exist");
      return;
    } else {
      const notification = {
        notificationId: null,
        type: 8,
        title: null,
        message: `${payload} hat eine Zurücksetzung des Passworts angefragt`,
        senderId: 0,
        receiverId: 3,
        date: new Date().toLocaleDateString("de-DE"),
        payload: payload,
      };
      dispatch("userStore/addNotification", notification, { root: true });
      alert("Passwort zurücksetzen angefordert.");
      this.$router.push({ name: "Login" });
    }
  },
};
