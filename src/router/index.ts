import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const loadRoutes = (files: __WebpackModuleApi.RequireContext) =>
  files
    .keys()
    .reduce((arr, key) => {
      const routes = files(key).default;
      return typeof routes === "object" ? arr.concat(routes) : arr;
    }, [])
    .sort((prev, next) => (prev || 0) - (next || 0));
const children = loadRoutes(require.context("./home", false, /\.js$/));
// 把拿到的路由存到本地
localStorage.setItem("router", JSON.stringify(children));
console.log(children);
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "首页",
      keepAlive: true
    },
    redirect: "home",
    component: () => import("@/views/Home.vue"),
    children
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
