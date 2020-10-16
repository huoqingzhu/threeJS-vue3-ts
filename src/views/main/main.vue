<template>
<div class="home">
  <h1>main主页</h1>
  <h2>{{ data }}</h2>
</div>
</template>

<script lang="ts">
import {
  defineComponent,
  toRefs
} from "vue";
import {
  mapHosk
} from "./hosk";
import {
  Rotation
} from "@/hooks/index";
export default defineComponent({
  setup() {
    const {
      state,
      getDate,
      data
    } = mapHosk();
    // Rotation("1");
    return {
      ...toRefs(state),
      getDate,
      data
    };
  }
});
</script>

<style lang="less" scoped>
@import "./index.less";

.home {
  width: 100%;
  text-align: center;
  font-size: 24px;
  height: 40px;
  line-height: 40px;
}
</style>
