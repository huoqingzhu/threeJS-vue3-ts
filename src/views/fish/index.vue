<template>
<div>
  <h1>{{ listData }}</h1>
  <chart ref="charts" :option="option" :style="sty"></chart>
</div>
</template>

<script lang="ts">
import chart from "@/components/echart/ecahrt.vue";

import {
  defineComponent,
  onMounted,
  ref,
  nextTick,
  toRefs
} from "vue";
import {
  echarts
} from "./fishHooks";

export default defineComponent({
  components: {
    chart
  },

  setup(a, b) {
    const {
      echartState
    } = echarts();
    return {
      ...toRefs(echartState)
    };
  }
});
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  text-align: center;
  font-size: 24px;
  height: 40px;
  line-height: 40px;
}
</style>
