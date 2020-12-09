<template>
  <!-- <router-view v-slot="{ Component }">
    <transition>
      <keep-alive v-if="$route.meta.keepAlive">
        <component :is="Component" />
      </keep-alive>
      <component v-else :is="Component" />
    </transition>
  </router-view> -->
  <RouterView />
</template>

<style lang="less">
html,
body {
  width: 100%;
  height: 100%;
  touch-action: none;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  top: 0;
  left: 0;
  margin: auto;

  ::-webkit-scrollbar {
    display: none;
    /* Chrome Safari */
  }
}
</style>
