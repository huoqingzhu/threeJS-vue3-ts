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
  },
  data() {
    return {
      age: 20
    };
  },
  setup() {
    const state = reactive({
      name: "霍庆祝"
    });
    const change = (): void => {
      state.name = "wo";
    };
    return {
      ...toRefs(state),
      change
    };
  }
});
</script>

<style lang="less" scoped>
.container {
  // background-color: #acbcd6;
  position: absolute;
  width: 100%;
  height: 100%;

  .Tabbar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    background-color: #fff;
    box-shadow: 0px 3px 3px #ccc;
  }

  .home {
    margin-top: 70px;
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
