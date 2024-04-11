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
  registerUser({ commit, state, dispatch }, payload) {
    const user = state.users.find((user) => user.username === payload.username);
    if (user) {
      alert("Username already exists");
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
    dispatch("notificationStore/userRegistersAccount", newUser, { root: true });
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
    if (confirm("Are you sure you want to delete the account?")) {
      commit("deleteAccount", state.user.userId);
      commit("logout");
      router.push("/");
    }
  },
  adminDeleteAccount({ commit }, payload) {
    commit("deleteAccount", payload);
  },
  adminChangePassword({ commit }, payload) {
    commit("adminChangePassword", payload);
  },
  addNotification({ commit, state }, payload) {
    const notificationId =
      Math.random().toString(36).substring(2) + Date.now().toString(36);
    payload.notificationId = notificationId;
    switch (payload.type) {
      case 1:
        payload.title = "Erinnerung an den Rückgabezeitpunkt";
        break;
      case 2:
        payload.title = "Benachrichtigung über die Reservierung";
        break;
      case 3:
        payload.title = "Benachrichtigung über die Ausleihe";
        break;
      case 4:
        payload.title = "Benachrichtigung über die Rückgabe";
        break;
      case 5:
        payload.title = "Anfrage zur Verlängerung einer Ausleihe";
        break;
      case 6:
        payload.title = "Rückgabe ist überfällig";
        break;
      case 7:
        payload.title = "User hat sich registriert";
        break;
      case 8:
        payload.title = "Anfrage zur Zurücksetzung des Passworts";
        break;
      case 9:
        payload.title = "Schaden wurde gemeldet";
        break;
      case 10:
        payload.title = "Ein neues Item wurde hinzugefügt";
        break;
    }
    if (payload.senderId === 0) {
      payload.senderId = "System";
    }
    if (payload.receiverId !== "users") {
      commit("addNotification", payload);
    } else {
      state.users.forEach((user) => {
        if (user.role === 0) {
          payload.receiverId = user.userId;
          commit("addNotification", payload);
        }
      });
    }
  },
  deleteNotificationsWithType({ commit, state }, payload) {
    const userId = state.user.userId;
    commit("deleteNotificationsWithType", { userId, type: payload });
  },
};
