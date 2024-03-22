import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";

import router from "./router/index.js";
import store from "./store/index.js";

import vuex from "vuex";


const app = createApp(App);

app.use(VueAxios, axios);
app.use(vuex);

app.use(router);
app.use(store);

app.mount("#app");
