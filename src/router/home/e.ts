
export default [
  {
    path: "/Ambient",
    name: "光照",
    component: () => import("@/views/Ambient/index.vue"),
    children:[
      {
        path: "/Ambient/dome1",
        name: "光照的概念",
        component: () => import("@/views/Ambient/dome1.vue"),
        meta: {
          auth: true,
          iocn: "CloudOutlined",
          title: "Dome1",
          keepAlive: true,
        },
      },
      {
        path: "/Ambient/dome2",
        name: "阴影",
        component: () => import("@/views/Ambient/dome2.vue"),
        meta: {
          auth: true,
          iocn: "CloudOutlined",
          title: "Dome1",
          keepAlive: true,
        },
      },
    ],
    meta: {
      auth: true,
      title: "光照",
      iocn: "AuditOutlined",
      keepAlive: false
    }
  }
];
