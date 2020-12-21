export default [
  {
    path: "/Material",
    name: "材质",
    component: () => import("@/views/Material/dome1.vue"),
    meta: {
      auth: true,
      title: "图表",
      iocn: "PropertySafetyOutlined",
      keepAlive: false
    }
  }
];
