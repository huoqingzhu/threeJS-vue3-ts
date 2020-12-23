export default [
  {
    path: "/Texture",
    name: "纹理贴纸",
    component: () => import("@/views/Texture/index.vue"),
    children:[
      {
        path: "/Texture/dome1",
        name: "创建纹理贴图",
        component: () => import("@/views/Texture/dome1.vue"),
        meta: {
          auth: true,
          iocn: "CloudOutlined",
          title: "创建纹理贴图",
          keepAlive: true,
        },
      }, 
      {
        path: "/Texture/dome2",
        name: "数组材质",
        component: () => import("@/views/Texture/dome2.vue"),
        meta: {
          auth: true,
          iocn: "CloudOutlined",
          title: "数组材质",
          keepAlive: true,
        },
      },
      {
        path: "/Texture/dome3",
        name: "纹理对象Texture",
        component: () => import("@/views/Texture/dome3.vue"),
        meta: {
          auth: true,
          iocn: "CloudOutlined",
          title: "数组材质纹理对象Texture",
          keepAlive: true,
        },
      },  
      {
        path: "/Texture/dome4",
        name: "草地阵列",
        component: () => import("@/views/Texture/dome4.vue"),
        meta: {
          auth: true,
          iocn: "CloudOutlined",
          title: "草地阵列",
          keepAlive: true,
        },
      },  
      {
        path: "/Texture/dome5",
        name: "动画纹理",
        component: () => import("@/views/Texture/dome5.vue"),
        meta: {
          auth: true,
          iocn: "CloudOutlined",
          title: "动画纹理",
          keepAlive: true,
        },
      },  
      {
        path: "/Texture/dome6",
        name: "canvas画布、视频",
        component: () => import("@/views/Texture/dome6.vue"),
        meta: {
          auth: true,
          iocn: "CloudOutlined",
          title: "canvas画布、视频",
          keepAlive: true,
        },
      }, 
      {
        path: "/Texture/dome7",
        name: "法线贴纸",
        component: () => import("@/views/Texture/dome7.vue"),
        meta: {
          auth: true,
          iocn: "CloudOutlined",
          title: "法线贴纸",
          keepAlive: true,
        },
      },  
    ],
    meta: {
      auth: true,
      title: "纹理贴纸",
      iocn: "AuditOutlined",
      keepAlive: false
    }
  }
];
