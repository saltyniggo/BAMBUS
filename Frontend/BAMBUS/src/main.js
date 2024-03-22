import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import vuex from "vuex";

import router from "./router/index.js";
import store from "./store/index.js";

const app = createApp(App);

app.use(VueAxios, axios);
app.use(vuex);

app.use(router);
app.use(store);

app.mount("#app");
