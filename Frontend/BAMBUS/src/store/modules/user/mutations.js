export default {
  login(state, user) {
    state.userIsAuth = true;
    state.user = user;
  },
  register(state, newUser) {
    state.users.push(newUser);
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
  logout(state) {
    state.userIsAuth = false;
    state.user = null;
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
  deleteNotificationsWithType(state, payload) {
    const user = state.user;
    user.notifications = user.notifications.filter(
      (notification) => notification.type !== payload.type
    );
  },
};
