
export default [
  {
    path: "/journal",
    name: "日志",
    component: () => import("@/views/journal/index.vue"),
    meta: {
      auth: true,
      title: "日志",
      iocn: "ProfileOutlined",
      keepAlive: true
    }
  }
];
