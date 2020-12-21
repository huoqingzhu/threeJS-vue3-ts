export default [{
    path: "/geometry",
    name: "顶点概念几何体结构",
    component: () => import("@/views/geometry/index.vue"),
    redirect: '/geometry/dome1',
    children: [
      {
        path: "/geometry/dome1",
        name: "封装tree",
        component: () => import("@/views/geometry/dome1.vue"),
        meta: {
          auth: true,
          iocn: "CloudOutlined",
          title: "Dome1",
          keepAlive: true,
        },
      },
      {
        path: "/geometry/dome2",
        name: "几何体材质",
        component: () => import("@/views/geometry/dome2.vue"),
        meta: {
          auth: true,
          iocn: "CloudOutlined",
          title: "Dome2",
          keepAlive: true,
        },
      },
      {
        path: "/geometry/dome3",
        name: "顶点索引",
        component: () => import("@/views/geometry/dome3.vue"),
        meta: {
          auth: true,
          iocn: "CloudOutlined",
          title: "Dome2",
          keepAlive: true,
        },
      },
      {
        path: "/geometry/dome4",
        name: "gemetry",
        component: () => import("@/views/geometry/gemetry.vue"),
        meta: {
          auth: true,
          iocn: "CloudOutlined",
          title: "Dome2",
          keepAlive: true,
        },
      },
      {
        path: "/geometry/dome5",
        name: "几何体数据",
        component: () => import("@/views/geometry/dome5.vue"),
        meta: {
          auth: true,
          iocn: "CloudOutlined",
          title: "Dome5",
          keepAlive: true,
        },
      },
      // {
      //   path: "/geometry/dome6",
      //   name: "波浪粒子",
      //   component: () => import("@/views/geometry/demo6.vue"),
      //   meta: {
      //     auth: true,
      //     iocn: "CloudOutlined",
      //     title: "Dome6",
      //     keepAlive: true,
      //   },
      // },
    ],
    meta: {
      auth: true,
      title: "geometry",
      keepAlive: false,
      iocn: "AppstoreOutlined",
    },
  }
];