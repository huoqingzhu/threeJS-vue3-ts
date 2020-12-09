
export default [
  {
    path: "/history",
    name: "游戏设置",
    component: () => import("@/views/history/index.vue"),
    meta: {
      auth: true,
      title: "游戏设置",
      iocn: "SettingOutlined",
      keepAlive: false
    }
  }
];
