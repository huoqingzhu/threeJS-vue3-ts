export default [
  {
    path: "/home",
    name: "首页",
    component: () => import("@/views/main/main.vue"),
    meta: {
      auth: true,
      title: "地图",
      iocn: "MailOutlined",
      keepAlive: true
    }
  }
];
