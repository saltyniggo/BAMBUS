export default {
  isUserAuthenticated: (state) => state.userIsAuth,
  getUser(state) {
    return state.user;
  },
  getAllUsers(state) {
    return state.users;
  },
};
