
export default [
  {
    path: "/Mesh",
    name: "模型",
    component: () => import("@/views/Mesh/index.vue"),
    children:[
      {
        path: "/Mesh/dome1",
        name: "旋转、缩放、平移变换",
        component: () => import("@/views/Mesh/dome1.vue"),
        meta: {
          auth: true,
          iocn: "CloudOutlined",
          title: "Dome1",
          keepAlive: true,
        },
      },
      {
        path: "/Mesh/dome2",
        name: "克隆和复制",
        component: () => import("@/views/Mesh/dome2.vue"),
        meta: {
          auth: true,
          iocn: "CloudOutlined",
          title: "Dome2",
          keepAlive: true,
        },
      }
    ],
    meta: {
      auth: true,
      title: "游戏设置",
      iocn: "SettingOutlined",
      keepAlive: false
    }
  }
];
