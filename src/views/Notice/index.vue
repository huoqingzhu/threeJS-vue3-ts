<template>
  <div>
    <h1>商城</h1>
  </div>
</template>

<script lang="ts">
import Vue, { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "Notice",
  setup() {
    //开启缓存后,跳转此页面只触发一次后就不触发
    console.log("商城不缓存");
  },
  activated() {
    //开启缓存后,跳转后此页面触发
    console.log("商城缓存");
  },
});
</script>