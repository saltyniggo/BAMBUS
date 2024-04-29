export default {
  login(state, user, token) {
    state.userIsAuth = true;
    state.user = user;
    state.user.token = token;
  },
  changeUsername(state, payload) {
    const user = state.users.find((user) => user.userId === state.user.userId);
    user.username = payload;
  },
  changeEmail(state, payload) {
    const user = state.users.find((user) => user.userId === state.user.userId);
    user.email = payload;
  },
  changePassword(state, payload) {
    const user = state.users.find((user) => user.userId === state.user.userId);
    user.password = payload;
  },
  changeFirstName(state, payload) {
    const user = state.users.find((user) => user.userId === state.user.userId);
    user.firstName = payload;
  },
  changeLastName(state, payload) {
    const user = state.users.find((user) => user.userId === state.user.userId);
    user.lastName = payload;
  },
  changePassword(state, payload) {
    const user = state.users.find((user) => user.userId === state.user.userId);
    user.password = payload;
  },
  deleteAccount(state, payload) {
    state.users = state.users.filter((user) => user.userId !== payload);
  },
  adminChangePassword(state, payload) {
    const user = state.users.find((user) => user.userId === payload.userId);
    user.password = payload.newPassword;
  },
  addNotification(state, payload) {
    state.users
      .find((user) => user.userId === payload.receiverId)
      .notifications.push(payload);
  },
  deleteNotification(state, payload) {
    const user = state.users.find((user) => user.userId === payload.userId);
    user.notifications = user.notifications.filter(
      (notification) => notification.notificationId !== payload.notificationId
    );
  },
  deleteNotificationsWithType(state, payload) {
    const user = state.user;
    user.notifications = user.notifications.filter(
      (notification) => notification.type !== payload.type
    );
  },
  logout(state) {
    state.userIsAuth = false;
    state.user = {
      userId: null,
      username: null,
      password: null,
      role: null,
      email: null,
      firstName: null,
      lastName: null,
      notifications: [],
    };
  },
};
