import { createRouter, createWebHashHistory, RouteRecordRaw,createWebHistory } from "vue-router";
const loadRoutes = (files: __WebpackModuleApi.RequireContext) =>
  files
    .keys()
    .reduce((arr, key) => {
      const routes = files(key).default;
      return typeof routes === "object" ? arr.concat(routes) : arr;
    }, [])
    .sort((prev, next) => (prev || 0) - (next || 0));
const children = loadRoutes(require.context("./home", false, /\.ts$/));
// 把拿到的路由存到本地
localStorage.setItem("router", JSON.stringify(children));
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
  },
  {
    path: "/login",
    name: "登陆",
    meta: {
      title: "登陆",
      keepAlive: true
    },
    component: () => import("@/views/Login/index.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
