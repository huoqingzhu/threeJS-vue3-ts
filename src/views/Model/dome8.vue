<template>
  <div class="zhushi">
    <h3>自定义楼梯</h3>

    <div id="map4"></div>
  </div>
</template>
<script lang="ts">
// 引入tree.js
import * as THREE from "three";
import Map from "@/utils/tree/map";
import { defineComponent, toRefs, reactive, onMounted } from "vue";
import { createLouTi, createScanning } from "@/utils/tree/model";

interface state {
  map: any;
}
export default defineComponent({
  setup() {
    // 初始化 Map
    function init() {
      let container = document.getElementById("map4");
      let map = new Map(container);
      map.addMesh(createLouTi(80, 10, 60));
      const node = createLouTi(80, 10, 60, false);
      node.position.set(100, 0, 0);
      map.addMesh(node);

      map.init();
    }
    onMounted(() => {
      console.log("重新创建");
      init();
    });
  },
  beforeUnmount() {
    let dome: any = document.getElementById("map4");
    dome.removeChild(dome.children[0]);
  },
});
</script>
<style lang="less" scoped>
.zhushi {
  font-size: 18px;
  padding: 0.2rem 1rem;
  width: 100%;
  height: 100%;
  margin-top: 1rem;
}
#map4 {
  width: 1000px;
  height: 400px;
}
</style>