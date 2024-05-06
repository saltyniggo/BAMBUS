<template>
  <div class="header">
    <p id="firstName">Vorname</p>
    <p id="lastName">Nachname</p>
    <p id="email">Email</p>
    <div id="editPassword">
      <div>
        <p>Passwort ändern</p>
        <button @click="showPasswords">
          <i v-if="showPassword" class="fa-regular fa-eye-slash"></i>
          <i v-else class="fa-regular fa-eye"></i>
        </button>
      </div>
    </div>
    <p id="deletePassword">Account löschen?</p>
  </div>
  <hr />
  <div
    class="content"
    v-for="(user, index) in users"
    :key="user.id"
    :class="{ uneven: index % 2 == 0 }"
  >
    <p id="firstName">{{ user.firstName }}</p>
    <p id="lastName">{{ user.lastName }}</p>
    <p id="email">{{ user.email }}</p>
    <div id="editPassword">
      <div>
        <input
          type="password"
          v-model="passwordInputs[index]"
          placeholder="Neues Passwort"
        />
        <base-rectangle-button
          @click="
            changePassword(index, user.userId)
          "
          >Speichern</base-rectangle-button
        >
      </div>
    </div>
    <base-rectangle-button
      id="deletePassword"
      @click="adminDeleteAccount(user.userId)"
      >Löschen</base-rectangle-button
    >
  </div>
</template>

<script>
import BaseRectangleButton from "@/components/base-components/BaseRectangleButton.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "UserManagementTab",
  components: {
    BaseRectangleButton,
  },
  data() {
    return {
      passwordInputs: [],
      showPassword: false,
    };
  },
  methods: {
    ...mapActions("userStore", ["adminChangePassword", "adminDeleteAccount"]),
    showPasswords() {
      var passwordInputs = document.querySelectorAll("input");
      passwordInputs.forEach((input) => {
        if (input.type === "password") {
          input.type = "text";
          this.showPassword = true;
        } else {
          input.type = "password";
          this.showPassword = false;
        }
      });
    },
    changePassword(index, userId) {
      this.adminChangePassword({
        newPassword: this.passwordInputs[index],
        userId: userId,
      });
      this.passwordInputs[index] = "";
    }
  },
  computed: {
    ...mapGetters("userStore", { users: "getEmployees" }),
  },
};
</script>

<style scoped>
.header,
.content {
  display: inline-flex;
  width: 75vw;
  align-items: center;
  padding: 0.5rem;
  overflow: auto;
}

.header {
  font-weight: bold;
}

button {
}

.uneven {
  background-color: #d8c6b9;
}

#firstName,
#lastName {
  width: 15%;
  text-align: left;
  min-width: 120px;
  overflow-wrap: break-word;
}

#email {
  width: 30%;
  text-align: left;
  min-width: 120px;
  overflow-wrap: break-word;
}

#editPassword {
  display: inline;
  width: 30%;
  min-width: 240px;
  text-align: left;
}

#editPassword div {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-right: 5%;
}

#editPassword p {
  text-align: left;
}

#editPassword input {
  width: 65%;
}

#deletePassword {
  width: 10%;
  min-width: 80px;
}

#deletePassword button {
  height: 1rem;
}
</style>
