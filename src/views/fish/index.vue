<template>
<div class="zhushi">
  <p>注释: <span>启动图标为绿色,关闭为红色</span></p>
  <div>自定义Ref {{ listData.length }}</div>
</div>
</template>

<script lang="ts">
import {
  defineComponent,
  toRefs,
  computed
} from "vue";
import {
  fish
} from "./hooks";
import {
  useStore
} from "vuex";
export default defineComponent({
  setup(a: any) {
    const {
      listData
    } = fish();
    return {
      listData
    };
  }
});
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
