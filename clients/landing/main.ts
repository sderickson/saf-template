import "@mdi/font/css/materialdesignicons.css";
import "vuetify/lib/styles/main.css";
import { createVuetify } from "vuetify";
import { createApp } from "vue";

import App from "./LandingApp.vue";
import router from "./router.ts";
import { vuetifyConfig } from "@your-org/clients/common/vuetify-config";
const vuetify = createVuetify(vuetifyConfig);

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.mount("#app");
