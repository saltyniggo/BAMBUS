<template>
  <div>
    <h1>User Management</h1>
    <select v-model="selectedUser">
      <option v-for="user in users" :key="user.id" :value="user.userId">
        {{ user.firstName }} {{ user.lastName }}
      </option>
    </select>
    <div v-if="selectedUser">
      <input type="password" v-model="newPassword" placeholder="New Password" />
      <button
        @click="
          adminChangePassword({
            newPassword: newPassword,
            userId: selectedUser,
          })
        "
      >
        Update Password
      </button>
      <button @click="adminDeleteAccount(selectedUser)">Delete User</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      selectedUser: null,
      newPassword: "",
    };
  },
  methods: {
    ...mapActions("userStore", ["adminChangePassword", "adminDeleteAccount"]),
    updatePassword() {
      this.updateUserPassword({
        userId: this.selectedUser,
        password: this.newPassword,
      });
    },
  },
  computed: {
    ...mapGetters("userStore", { users: "getAllUsers" }),
  },
};
</script>
