export default [{
    path: "/Tree",
    name: "Tree-Dome",
    component: () => import("@/views/Tree/index.vue"),
    redirect: '/Tree/dome1',
    children: [
      {
        path: "/Tree/dome1",
        name: "封装tree",
        component: () => import("@/views/Tree/dome1.vue"),
        meta: {
          auth: true,
          iocn: "CloudOutlined",
          title: "Dome1",
          keepAlive: true,
        },
      },
      {
        path: "/Tree/dome2",
        name: "顶点概念几何体结构",
        component: () => import("@/views/Tree/dome2.vue"),
        meta: {
          auth: true,
          iocn: "CloudOutlined",
          title: "Dome2",
          keepAlive: true,
        },
      },
    ],
    meta: {
      auth: true,
      title: "Tree",
      keepAlive: false,
      iocn: "AppstoreOutlined",
    },
  }
];