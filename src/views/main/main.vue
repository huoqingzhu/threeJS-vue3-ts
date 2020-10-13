<template>
<div class="home">
  <a-button type="primary" @click="getDate">发起数据请求</a-button>
  <div v-for="item in listData" :key="item._id">
    <p>
      {{ item.title }}
    </p>
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

export default defineComponent({
  setup() {
    const {
      state,
      getDate
    } = mapHosk();

    return {
      ...toRefs(state),
      getDate
    };
  }
});
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  text-align: center;
}
</style>
