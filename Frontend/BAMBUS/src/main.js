import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import sidenav from "./components/SideNav.vue";

const app = createApp(App);

app.component("side-nav", sidenav);
app.use(router);

app.mount("#app");
