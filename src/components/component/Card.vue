<template>
<div class="card">
  <div class="v10">
    <img src="@/assets/jiao.png" alt="" />
    <img src="@/assets/jiao.png" class="v11" alt="" />
  </div>
  <slot></slot>
  <div class="bt">
    <div class="v10">
      <img src="@/assets/jiao.png" style="transform: rotate(-90deg)" alt="" />
      <img src="@/assets/jiao.png" style="transform: rotate(-180deg)" alt="" />
    </div>
  </div>
</div>
</template>

<script lang="ts">
import {
  defineComponent
} from "vue";

export default defineComponent({
  props: {
    style: {
      type: Object,
      default () {
        return {
          width: "300px",
          height: "400px"
        };
      }
    }
  }
});
</script>

<style lang="less" scoped>
@width-1: 100%;
@count: 10px;

.card {
  background-color: #172244;
  width: 100%;
  height: 100%;
  font-size: 20px;
  color: #fff;
  position: relative;
}

.bt {
  width: 100%;
  position: absolute;
  bottom: 0px;
}

.v10 {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.v12 {
  padding: 20px;
}

.v11 {
  transform: rotate(90deg);
}
</style>
