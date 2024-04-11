import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import vuex from "vuex";

import router from "./router/index.js";
import store from "./store/index.js";


// import 'vuetify/styles'
// import {createVuetify} from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

// const vuetify = createVuetify({components, directives})

const app = createApp(App);

// app.use(vuetify);

app.use(VueAxios, axios);


app.use(router);
app.use(store);

app.mount("#app");
