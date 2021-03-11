export default [
  {
    path: "/particle",
    name: "粒子",
    component: () => import("@/views/particle/index.vue"),
    meta: {
      auth: true,
      title: "图表",
      iocn: "PropertySafetyOutlined",
      keepAlive: false
    },
    children:[
      {
        path: "/particle/dome1",
        name: "波浪粒子",
        component: () => import("@/views/particle/dome1.vue"),
        meta: {
          auth: true,
          iocn: "CloudOutlined",
          title: "创建纹理贴图",
          keepAlive: true,
        },
      },
      {
        path: "/particle/dome2",
        name: "波浪粒子2",
        component: () => import("@/views/particle/dome2.vue"),
        meta: {
          auth: true,
          iocn: "CloudOutlined",
          title: "创建纹理贴图",
          keepAlive: true,
        },
      }
    ]
  }
];
