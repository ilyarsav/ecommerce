import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import BadgeDirective from "primevue/badgedirective";

import "./assets/main.css";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(PrimeVue);
app.use(ToastService);
app.directive("badge", BadgeDirective);
app.mount("#app");
