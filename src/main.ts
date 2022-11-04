import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "@/scss/main.scss";

createApp(App).use(vuetify).mount("#app");
