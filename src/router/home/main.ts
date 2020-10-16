export default [
  {
    path: "/home",
    name: "首页",
    component: () => import("@/views/main/main.vue"),
    meta: {
      auth: true,
      title: "海水养殖系统",
      iocn: "MailOutlined",
      keepAlive: true
    }
  }
];
