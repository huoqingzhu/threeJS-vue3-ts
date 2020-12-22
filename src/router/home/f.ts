
export default [
  {
    path: "/ceng",
    name: "层级",
    component: () => import("@/views/ceng/index.vue"),
    children:[
      {
        path: "/ceng/group",
        name: "Grop",
        component: () => import("@/views/ceng/group.vue"),
        meta: {
          auth: true,
          iocn: "CloudOutlined",
          title: "Grop",
          keepAlive: true,
        },
      },
      {
        path: "/ceng/dome2",
        name: "层级模型节点命名、查找、遍历",
        component: () => import("@/views/ceng/dome3.vue"),
        meta: {
          auth: true,
          iocn: "CloudOutlined",
          title: "层级模型节点命名、查找、遍历",
          keepAlive: true,
        },
      },
      {
        path: "/ceng/3",
        name: "坐标",
        component: () => import("@/views/ceng/dome2.vue"),
        meta: {
          auth: true,
          iocn: "CloudOutlined",
          title: "坐标",
          keepAlive: true,
        },
      },
    ],
    meta: {
      auth: true,
      title: "层级模型节点命名、查找、遍历",
      iocn: "AuditOutlined",
      keepAlive: false
    }
  }
];
