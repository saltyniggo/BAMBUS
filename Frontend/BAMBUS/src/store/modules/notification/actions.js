export default {
  checkReturnDates({ dispatch, rootState }) {
    const today = new Date();
    const user = rootState.userStore.user;
    const loans = rootState.itemStore.items.filter(
      (item) => item.rentedBy === user.userId
    );
    loans.forEach((loan) => {
      const daysUntilReturn = Math.floor(
        (today - new Date(loan.returnDate)) / (1000 * 60 * 60 * 24)
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
      message: `${user.username} hat eine Verlängerung der Ausleihe von ${payload.item.title} bis zum ${payload.newReturnDate} angefragt`,
      senderId: user.userId,
      receiverId: 2,
      date: new Date().toLocaleDateString("de-DE"),
      payload: {
        item: payload.item,
        userId: user.userId,
        newReturnDate: payload.newReturnDate,
      },
    };
    dispatch("userStore/addNotification", notification, { root: true });
  },
};
