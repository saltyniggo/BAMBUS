import router from "@/router";
import UserServices from "../../services/UserServices";
import MessageService from "@/store/services/MessageService";
import LoanService from "@/store/services/LoanService";

export default {
  async loginUser({ commit }, payload) {
    try {
      const loginResponse = await UserServices.Login(payload);
      if (!loginResponse.data.success) {
        throw new Error("Invalid username or password");
      }
      commit("login", loginResponse.data);

      const messageResponse = await MessageService.GetMessagesFromUserId(loginResponse.data.data.userId);
      if (!messageResponse.data.success) {
        throw new Error(messageResponse.data.message);
      }
      commit("setNotifications", messageResponse.data.data);

      if (loginResponse.data.data.role === 2 || loginResponse.data.data.role === 1) {
        const userResponse = await UserServices.GetAllUsers();
        if (!userResponse.data.success) {
          throw new Error(userResponse.data.message);
        }
        commit("setUsers", userResponse.data.data);

        const loanResponse = await LoanService.GetAllLoans();
        if (!loanResponse.data.success) {
          throw new Error(loanResponse.data.message);
        }
        commit("loanStore/setLoans", loanResponse.data.data, { root: true });
      }
    
      router.push("/");
    
    } catch (error) {
      alert(error.message);
    }
  },
  async registerUser({ commit, dispatch }, payload) {
    await UserServices.Register(payload).then((response) => {
      if (response.data.success) {
        commit("login", response.data.data, response.data.token);
        dispatch("notificationStore/userRegistersAccount", response.data.data, { root: true });
        router.push("/");
      }
      else {
        alert(response.data.message);
      }
    }
    );
  },
  async changeUsername({ commit, state }, payload) {
    const userExists = state.users.find((user) => user.username === payload);
    if (userExists) {
      alert("Username already exists");
      return;
    }
    if (!payload) {
      alert("Please provide a username");
      return;
    }

    const user = state.user
    await UserServices.UpdateUser(user.userId, payload, user.email, user.password, user.firstName, user.lastName).then((response) => {
    commit("changeUsername", response.data.data.username);
    })
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
  async deleteAccount({ commit, state }) {
    if (confirm("Are you sure you want to delete the account?")) {
      await UserServices.DeleteUser(state.user.userId).then((response) => {
        if (response.data.success) {
            commit("deleteAccount", state.user.userId);
            commit("logout");
            router.push("/");
        }
        else {
          alert(response.data.message);
        }
      })
    }
  },
  async adminDeleteAccount({ commit }, payload) {
    await UserServices.DeleteUser(payload).then((response) => {
      if (response.data.success) {
        commit("deleteAccount", payload);
      }
      else {
        alert(response.data.message);
      }})
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
        payload.title = "Ein neuer Artikel ist im System verfügbar!";
        break;
      case 11:
        payload.title =
          "Der Manager hat deine Anfrage zur Verlängerung der Ausleihe bearbeitet";
        break;
    }
    if (payload.senderId === 0) {
      payload.senderName = "System";
    } else {
      const sender = state.users.find(
        (user) => user.userId === payload.senderId
      );
      payload.senderName = sender.username;
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

  deleteNotification({ commit }, payload) {
    commit("deleteNotification", payload);
  },

  deleteNotificationsWithType({ commit, state }, payload) {
    const userId = state.user.userId;
    commit("deleteNotificationsWithType", { userId, type: payload });
  },
};
