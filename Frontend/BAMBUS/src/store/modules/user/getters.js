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
  },
  getRoleLoggedUser(state) {
    return state.user.role;
  },
  getUserIdLoggedUser(state) {
    return state.user.userId;
  },
};
