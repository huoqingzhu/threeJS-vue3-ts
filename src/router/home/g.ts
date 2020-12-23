export default [
  {
    path: "/Model",
    name: "几何体、曲线、三维建模",
    component: () => import("@/views/Model/index.vue"),
    children:[
      {
        path: "/Model/dome1",
        name: "直线、椭圆、圆弧、基类Curve",
        component: () => import("@/views/Model/dome1.vue"),
        meta: {
          auth: true,
          iocn: "CloudOutlined",
          title: "直线、椭圆、圆弧、基类Curve",
          keepAlive: true,
        },
      },
      {
        path: "/Model/dome2",
        name: "曲线路径管道成型",
        component: () => import("@/views/Model/dome2.vue"),
        meta: {
          auth: true,
          iocn: "CloudOutlined",
          title: "曲线路径管道成型",
          keepAlive: true,
        },
      },
      {
        path: "/Model/dome3",
        name: "旋转造形",
        component: () => import("@/views/Model/dome3.vue"),
        meta: {
          auth: true,
          iocn: "CloudOutlined",
          title: "旋转造形",
          keepAlive: true,
        },
      },
      {
        path: "/Model/dome4",
        name: "Shape对象和轮廓填充",
        component: () => import("@/views/Model/dome4.vue"),
        meta: {
          auth: true,
          iocn: "CloudOutlined",
          title: "Shape对象和轮廓填充",
          keepAlive: true,
        },
      },
      {
        path: "/Model/dome5",
        name: "拉伸扫描成型",
        component: () => import("@/views/Model/dome5.vue"),
        meta: {
          auth: true,
          iocn: "CloudOutlined",
          title: "拉伸扫描成型",
          keepAlive: true,
        },
      },
      {
        path: "/Model/dome6",
        name: "中国地图",
        component: () => import("@/views/Model/dome6.vue"),
        meta: {
          auth: true,
          iocn: "CloudOutlined",
          title: "中国地图",
          keepAlive: true,
        },
      },
    ],
    meta: {
      auth: true,
      title: "几何体、曲线、三维建模",
      iocn: "AuditOutlined",
      keepAlive: false
    }
  }
];
