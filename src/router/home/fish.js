export default [
  {
    path: "/fish",
    name: "鱼",
    component: () => import("@/views/fish/index.vue"),
    meta: {
      auth: true,
      title: "鱼",
      iocn: "MailOutlined",
      keepAlive: true
    }
  }
];
