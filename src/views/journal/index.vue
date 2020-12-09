<template>
  <div>
    <h1>日志</h1>
  </div>
</template>

<script lang="ts">
import Vue, { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    console.log("日志不缓存");
  },
  activated() {
    console.log("日志缓存");
  },
});
</script>
