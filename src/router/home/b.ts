export default [{
    path: "/play",
    name: "数据中心",
    component: () => import("@/views/fish/index.vue"),
    redirect: '/play/room',
    children: [
      {
        path: "/play/room",
        name: "房间",
        component: () => import("@/views/fish/index.vue"),
        meta: {
          auth: true,
          iocn: "CloudOutlined",
          title: "游戏设置-房间",
          keepAlive: true,
        },
      },
      {
      path: "/play/user",
      name: "玩家",
      component: () => import("@/views/fish/index.vue"),
      meta: {
        auth: true,
        iocn: "CloudOutlined",
        title: "数据中心-玩家",
        keepAlive: true,
      },
    },
    {
      path: "/play/computed",
      name: "机器人",
      component: () => import("@/views/fish/index.vue"),
      meta: {
        auth: true,
        iocn: "CloudOutlined",
        title: "数据中心-机器人",
        keepAlive: true,
      },
    },
    {
      path: "/play/Recharge",
      name: "充值记录",
      component: () => import("@/views/fish/index.vue"),
      meta: {
        auth: true,
        iocn: "CloudOutlined",
        title: "数据中心-充值记录",
        keepAlive: true,
      }, 
    },
    {
      path: "/play/Withdrawal",
      name: "提现记录",
      component: () => import("@/views/fish/index.vue"),
      meta: {
        auth: true,
        iocn: "CloudOutlined",
        title: "数据中心-提现记录",
        keepAlive: true,
      },
    },
    {
      path: "/play/AddMany",
      name: "加钱记录",
      component: () => import("@/views/fish/index.vue"),
      meta: {
        auth: true,
        iocn: "CloudOutlined",
        title: "数据中心-加钱记录",
        keepAlive: true,
      },
    }
    ],
    meta: {
      auth: true,
      title: "vueX",
      iocn: "CloudOutlined",
      keepAlive: true
    }
  }
];