export default {
  login(state, user) {
    state.currentUser = user.userId;
    state.userIsAuth = true;
    state.userRole = user.role;
  },
  register(state, newUser) {
    state.users.push(newUser);
  },
};
