export default [
  {
    path: "/table",
    name: "其他船舶设备",
    component: () => import("@/views/table/index.vue"),
    meta: {
      auth: true,
      title: "其他船舶设备",
      iocn: "ji",
      keepAlive: true
    }
  }
];
