export default {
  checkReturnDates({ dispatch, rootState }) {
    {
      const today = new Date();
      const user = rootState.userStore.user;
      const loans = rootState.itemStore.items.filter(
        (item) => item.rentedBy === user.userId
      );
      loans.forEach((loan) => {
        if (new Date(loan.returnDate) < today) {
          const overdueDays = Math.floor(
            (today - new Date(loan.returnDate)) / (1000 * 60 * 60 * 24)
          );
          const notificationId = Math.random().toString(36);
          const notification = {
            notificationId: notificationId,
            title: "Erinnerung an den Rückgabezeitpunkt",
            message: null,
            author: "System",
            date: new Date().toLocaleDateString("de-DE"),
          };
          if (overdueDays > 1) {
            notification.message = `${loan.title} ist seit ${overdueDays} Tagen überfällig`;
            console.log(notification);
          } else if (overdueDays === 1) {
            notification.message = `${loan.title} ist seit einem Tag überfällig`;
          }
          dispatch("userStore/addNotification", notification, {
            root: true,
          });
        }
      });
    }
  },
};
