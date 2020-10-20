
export default [
  {
    path: "/history",
    name: "历史数据",
    component: () => import("@/views/history/index.vue"),
    meta: {
      auth: true,
      title: "历史数据",
      iocn: "history",
      keepAlive: true
    }
  }
];
