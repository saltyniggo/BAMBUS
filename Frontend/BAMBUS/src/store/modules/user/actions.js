import router from "@/router";

export default {
  loginUser({ commit, state }, payload) {
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

  registerUser({ commit, state }, payload) {
    const user = state.users.find((user) => user.username === payload.username);
    if (user) {
      alert("Username already exists");
      return;
    }
    if (!payload.username) {
      alert("Please provide a username");
      return;
    }
    if (!payload.password) {
      alert("Please provide a password");
      return;
    }
    if (!payload.repeatPassword) {
      alert("Please confirm your password");
      return;
    }
    if (payload.password !== payload.repeatPassword) {
      alert("Passwords do not match");
      return;
    }
    if (payload.password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }
    if (!payload.email) {
      alert("Please provide an email address");
      return;
    }
    if (!payload.email.includes("@")) {
      alert("Please provide a valid email address");
      return;
    }
    if (!payload.firstName || !payload.lastName) {
      alert("Please provide your first and last name");
      return;
    }
    const userId = state.users.length + 1;

    const newUser = {
      userId: userId,
      role: 0,
      username: payload.username,
      password: payload.password,
      email: payload.email,
      firstName: payload.firstName,
      lastName: payload.lastName,
    };

    commit("register", newUser);
    router.push("/login");
  },
};
