
export default [
  {
    path: "/home",
    name: "海水养殖系统",
    component: () => import("@/views/main/main.vue"),
    meta: {
      auth: true,
      title: "海水养殖系统",
      iocn: "MailOutlined",
      keepAlive: true
    }
  }
];
