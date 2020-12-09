
export default [
  {
    path: "/notice",
    name: "公告",
    component: () => import("@/views/Notice/index.vue"),
    meta: {
      auth: true,
      title: "公告",
      iocn: "AuditOutlined",
      keepAlive: false
    }
  }
];
