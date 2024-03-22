import router from "@/router";

export default {
  login({ commit, state }, payload) {
    const user = state.users.find(
      (user) =>
        user.username === payload.username && user.password === payload.password
    );
    if (user) {
      commit("login", user);
      router.push("/");
    } else {
      alert("Invalid username or password");
    }
  },
};
