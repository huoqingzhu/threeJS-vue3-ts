export default [
  {
    path: "/fish",
    name: "鱼",
    component: () => import("@/views/fish/index.vue"),
    meta: {
      auth: true,
      title: "吸鱼泵清污系统",
      iocn: "MailOutlined",
      keepAlive: true
    }
  }
];
