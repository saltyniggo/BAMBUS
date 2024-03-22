export default {
  isUserAuthenticated: (state) => state.userIsAuth,
  getUser: (state) => state.currentUser,
  getUserRole: (state) => state.userRole,
};
