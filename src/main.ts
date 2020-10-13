import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ant from "./utils/ant";
import "@/style/ant.less";
createApp(App)
  .use(store)
  .use(router)
  .use(ant)
  .mount("#app");
