import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ant from "./utils/ant";
import "@/style/ant.less";
// 路由导航
import "@/utils/permission"
createApp(App)
  .use(store)
  .use(router)
  .use(ant)
  .mount("#app");
