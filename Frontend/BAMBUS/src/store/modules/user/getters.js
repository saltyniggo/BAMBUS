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
  getToken(state) {
    return state.user.token;
  },
  getUserFromUsers: (state) => (userId) => {
    const user = state.users.find((user) => user.userId === userId);
    if (user) {
      return user;
    } else {
      return null;
    },
  },
  getUserId: (state) => {
    return state.user.userId;
  },
};
