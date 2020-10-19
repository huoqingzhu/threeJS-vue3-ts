<template>
<div class="homeM">
  <!--左边 -->
  <div style="margin-top:40px">
    <img src="./img/zhu.png" class="zhu" />
  </div>
  <!-- 中间部分-->
  <div class="mainCenter">
    <com1></com1>
    <com1 style="margin-top:200px" title="NO.2养殖海水泵"></com1>
    <com1 style="margin-top:200px" title="NO.3养殖海水泵"></com1>
  </div>
  <div class="mainRight">
    <div style="position: relative;">
      <div class="v30">
        <div class="line" style="width:205px"></div>
        <img src="./img/U.png" alt="U" style="margin-top:8px" />
        <div class="line" style="width:115px"></div>
        <img src="./img/san1.png" class="v31" alt="S" style="margin-left:-265px" />
      </div>
      <div class="v30" style=" margin-top: 265px;">
        <div class="line" style="width:205px"></div>
        <img src="./img/U.png" alt="U" style="margin-top:8px" />
        <div class="line" style="width:115px"></div>
        <img src="./img/san1.png" class="v31" alt="S" style="margin-left:-265px" />
        <div class="yLine" style="height:205px;margin-left:-115px;margin-top:210px"></div>
        <div class="yLine" style="height:205px;margin-left:-5px;margin-top:710px"></div>
      </div>

      <com2 title="养殖水舱3"></com2>
    </div>
    <div style="margin-left:100px;position: relative;">
      <div class="v30">
        <div class="line" style="width:205px"></div>
        <img src="./img/U.png" alt="U" style="margin-top:8px" />
        <div class="line" style="width:115px"></div>
        <img src="./img/san1.png" class="v31" alt="S" style="margin-left:-300px" />
        <div class="yLine" style="height:265px;margin-left:-80px;margin-top:350px"></div>
        <img src="./img/san1.png" class="v32" alt="S" />
        <div class="yLine" style="height:310px;margin-left:330px;margin-top:310px"></div>

        <img src="./img/san1.png" class="v32" alt="S" style="margin-left:-18px;margin-top:280px" />
      </div>
      <com2 title="养殖水舱2"></com2>
    </div>
    <div style="margin-left:100px">
      <com2 title="养殖水舱1"></com2>
    </div>
  </div>
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
import com1 from "./left.vue";
import com2 from "./right.vue";
export default defineComponent({
  components: {
    com1,
    com2
  },
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
</style>
