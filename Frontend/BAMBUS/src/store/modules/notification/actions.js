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
        title: 1,
        message: null,
        author: "System",
        date: new Date().toLocaleDateString("de-DE"),
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
    const userId = rootState.userStore.user.userId;
    rootState.itemStore.items.forEach((item) => {
      if (item.reservations[0] === userId && item.available === true) {
        const notification = {
          notificationId: null,
          title: 2,
          message: `Der von Ihnen reservierte Artikel ${item.title} ist jetzt verfügbar`,
          author: "System",
          date: new Date().toLocaleDateString("de-DE"),
        };
        dispatch("userStore/addNotification", notification, { root: true });
      }
    });
  },
};
