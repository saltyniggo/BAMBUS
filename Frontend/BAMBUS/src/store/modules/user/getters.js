export default {
  getRole: (state) => state.userRole,

  isUserAuthenticated: (state) => state.userIsAuth,
  getUser: (state) => state.currentUser,
  getUserRole: (state) => state.userRole,
};
