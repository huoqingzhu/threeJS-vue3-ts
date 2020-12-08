<template>
  <div class="zhushi">
    <div class="tab">
      <a-statistic
        title="房间数"
        :value="topData.room_num"
        :precision="0"
        suffix="人"
        :value-style="{ color: '#3f8600' }"
        style="width: 100px"
      >
      </a-statistic>
      <a-statistic
        title="在线人数"
        :value="topData.user_num"
        :precision="0"
        suffix="人"
        :value-style="{ color: '#3f8600' }"
        style="width: 100px"
      >
      </a-statistic>
      <a-statistic
        title="充值人数"
        :value="topData.recharge_money"
        :precision="0"
        suffix="人"
        :value-style="{ color: '#3f8600' }"
        style="width: 100px"
      >
      </a-statistic>
      <a-statistic
        title="服务费"
        :value="topData.service_money"
        :precision="0"
        suffix="人"
        :value-style="{ color: '#3f8600' }"
        style="width: 100px"
      >
      </a-statistic>
      <a-statistic
        title="提现金额"
        :value="topData.draw_money"
        :precision="0"
        suffix="人"
        :value-style="{ color: '#3f8600' }"
        style="width: 100px"
      >
      </a-statistic>
      <a-statistic
        title="提现人数"
        :value="topData.draw_num"
        :precision="0"
        suffix="人"
        :value-style="{ color: '#3f8600' }"
        style="width: 100px"
      >
      </a-statistic>
    </div>
    <!--折线图-->
    <div class="table">
      <div class="time">
        <a-month-picker
          v-model:value="value2"
          placeholder="Select month"
          @change="onChange"
        />
      </div>
      <br />
      <chart ref="charts" :option="option" :style="style"></chart>
    </div>
  </div>
</template>

<script lang="ts">
import { compile, defineComponent, toRefs } from "vue";
import { topHosk, echarts } from "./hosk";
import chart from "@/components/echart/ecahrt.vue";

export default defineComponent({
  components: {
    chart,
  },
  setup() {
    // 头部标签
    const { state } = topHosk();
    const { echartState, onChange } = echarts();
    // return {

    // };
    return {
      ...toRefs(state),
      ...toRefs(echartState),
      onChange,
    };
  },
});
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
