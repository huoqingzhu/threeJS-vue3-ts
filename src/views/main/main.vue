<template>
<div class="home">
  <h1>main主页</h1>
  <h2>{{ listData }}</h2>
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

export default defineComponent({
  setup() {
    const {
      state
    } = mapHosk();
    return {
      ...toRefs(state)
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
