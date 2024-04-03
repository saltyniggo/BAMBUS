export default {
  isUserAuthenticated: (state) => state.userIsAuth,
  getUser(state) {
    return state.user;
  },
  getAllUsers(state) {
    return state.users;
  },
  getEmployees(state) {
    return state.users.filter((user) => user.role == 0);
  }
};
