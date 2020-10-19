<template>
<!--onselectstart="return false" -->
<div class="container">
  <div class="Tabbar">
    <Header></Header>
  </div>
  <div class="home">
    <RouterView />
  </div>
</div>
</template>

<script lang="ts">
import Header from "../components/head/index.vue";

// eslint-disable-next-line prettier/prettier
import {
  defineComponent,
  reactive,
  toRefs
} from "vue";
// eslint-disable-next-line prettier/prettier
import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup
} from "vue-class-component";
export default defineComponent({
  components: {
    Header
  }
});
</script>

<style lang="less" scoped>
.container {
  // background-color: #acbcd6;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #121c30;

  .Tabbar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100px;
    // line-height: 100px;
    background-color: #fff;
    // box-shadow: 0px 3px 3px #ccc;
    z-index: 10;
  }

  .home {
    width: 100%;
    height: 85%;
    margin-top: 160px;
    z-index: 1;
  }

  .footter {
    width: 100%;
    height: 20px;
    //     background: #5b6d81;
    line-height: 20px;
    text-align: center;
    /* 方法一 */
    position: fixed;
    bottom: 0;
  }
}
</style>
