export default [
  {
    path: "/table",
    name: "图表",
    component: () => import("@/views/echart/index.vue"),
    meta: {
      auth: true,
      title: "图表",
      iocn: "ji",
      keepAlive: true
    }
  }
];
