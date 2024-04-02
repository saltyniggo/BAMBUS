<template>
    <base-content-container>
        <template v-slot:body>
            <div class="header">
                <p id="firstName">Vorname</p>
                <p id="lastName">Nachname</p>
                <p id="email">Email</p>
                <p id="editPassword">Passwort ändern</p>
                <p id="deletePassword">Account löschen?</p>
            </div>
            <hr>
            <div class="content" v-for="(user, index) in users" :key="user.id" :class="{uneven: index%2 !== 0}">
                <p id="firstName">{{ user.firstName }}</p>
                <p id="lastName">{{ user.lastName }}</p>
                <p id="email">{{ user.email }}</p>
                <div id="editPassword">
                    <div><input type="password" v-model="passwordInputs[index]" placeholder="Neues Passwort" />
                    <base-rectangle-button @click="adminChangePassword({
                        newPassword:  passwordInputs[index],
                        userId: user.userId,
                    })">Speichern</base-rectangle-button></div>
                    
                </div>
                <base-rectangle-button id="deletePassword" @click="adminDeleteAccount(user.userId)">Löschen</base-rectangle-button>

            </div>
        </template>
     
        <template v-slot:default></template>
    </base-content-container>
</template>


<script>
import BaseContentContainer from "@/components/base-components/BaseContentContainer.vue";
import BaseRectangleButton from "@/components/base-components/BaseRectangleButton.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "UserManagementTab",
  components: {
    BaseContentContainer,
    BaseRectangleButton,
  },
  data() {
    return {
        passwordInputs: [],
    };
  },
  methods: {
    ...mapActions("userStore", ["adminChangePassword", "adminDeleteAccount"]),
  },
  computed: {
    ...mapGetters("userStore", { users: "getAllUsers" }),
  },
};
</script>

<style scoped>
.header, .content {
    display: inline-flex;
    width: 75vw;
    align-items: center;
    padding: 0.5rem;
    overflow: auto;
}
.header {
    font-weight: bold;
}

.uneven {
    background-color: #d8c6b9;
}

#firstName, #lastName {
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
    width: 30%;
    min-width: 240px;
    text-align: left;
}

#editPassword div {
    display: flex;
    justify-content: space-around;
    width: 100%;
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
