export default [
  {
    path: "/fish",
    name: "吸鱼泵清污系统",
    component: () => import("@/views/fish/index.vue"),
    meta: {
      auth: true,
      title: "vueX",
      iocn: "yang",
      keepAlive: true
    }
  }
];