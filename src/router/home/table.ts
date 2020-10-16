export default [
  {
    path: "/table",
    name: "列表",
    component: () => import("@/views/table/index.vue"),
    meta: {
      auth: true,
      title: "历史报警记录",
      iocn: "MailOutlined",
      keepAlive: true
    }
  }
];
