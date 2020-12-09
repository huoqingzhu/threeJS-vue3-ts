export default [
  {
    path: "/table",
    name: "商城设置",
    component: () => import("@/views/shopping/index.vue"),
    meta: {
      auth: true,
      title: "图表",
      iocn: "PropertySafetyOutlined",
      keepAlive: false
    }
  }
];
