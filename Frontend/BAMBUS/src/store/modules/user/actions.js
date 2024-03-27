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

  changeUsername({ commit, state }, payload) {
    const userExists = state.users.find((user) => user.username === payload);
    if (userExists) {
      alert("Username already exists");
      return;
    }
    if (!payload) {
      alert("Please provide a username");
      return;
    }
    commit("changeUsername", payload);
  },

  changeEmail({ commit, state }, payload) {
    const emailExists = state.users.find((user) => user.email === payload);
    if (emailExists) {
      alert("Email already exists");
      return;
    }
    if (!payload) {
      alert("Please provide an email address");
      return;
    }
    if (!payload.includes("@")) {
      alert("Please provide a valid email address");
      return;
    }
    commit("changeEmail", payload);
  },

  changeName({ commit }, payload) {
    if (!payload.firstName && !payload.lastName) {
      alert("Please provide your first or last name");
      return;
    }
    if (payload.firstName) commit("changeFirstName", payload.firstName);
    if (payload.lastName) commit("changeLastName", payload.lastName);
  },

  changePassword({ commit }, payload) {
    if (!payload.currentPassword) {
      alert("Please enter your current password");
      return;
    }
    if (!payload.newPassword) {
      alert("Please enter a new password");
      return;
    }
    if (payload.currentPassword == payload.newPassword) {
      alert("Passwords must be different");
      return;
    }
    if (payload.newPassword.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }
    commit("changePassword", payload.newPassword);
  },

  deleteAccount({ commit, state }) {
    if (confirm("Are you sure you want to delete your account?")) {
      commit("deleteAccount", state.user.userId);
      commit("logout");
      router.push("/");
    }
  },
};
