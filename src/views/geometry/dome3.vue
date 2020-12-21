<template>
  <div class="zhushi">
    <h3>不使用顶点索引创建矩形(两个三角形，6个点)</h3>
    <div id="map3"></div>
    <h3>使用顶点索引创建矩形(两个三角形，4个点)</h3>
    <div id="map4"></div>
  </div>
</template>

<script lang="ts">
// 引入tree.js

import Map from "@/utils/tree/map";
import { defineComponent, toRefs, reactive, onMounted } from "vue";
import { CustomGeometry, noIndex, index, VectorLine } from "@/utils/tree/model";
import { log } from "three";
interface state {
  map: any;
}
export default defineComponent({
  name: "Dome2",
  setup() {
    // 不使用定顶点索引创建矩形
    function rectangleNo() {
      let container = document.getElementById("map3");
      let map = new Map(container);
      const Mesh = noIndex();
      map.addMesh(Mesh);
      map.init();
    }
    // 使用顶点索引创建矩形
    function rectangle() {
      let container = document.getElementById("map4");
      let map = new Map(container);
      const Mesh = index();
      map.addMesh(Mesh);
      map.init();
    }

    //真实dome加载后
    onMounted(() => {
      rectangleNo();
      rectangle();
    });
    const state = reactive({
      value: "face",
    });
    // 切换类型

    return {
      ...toRefs(state),
    };
  },
  beforeUnmount() {
    let dome1: any = document.getElementById("map3");
    dome1.removeChild(dome1.children[0]);
    let dome2: any = document.getElementById("map4");
    dome2.removeChild(dome2.children[0]);
  },
});
</script>

<style lang="less" scoped>
.zhushi {
  font-size: 18px;
  padding: 0.2rem 1rem;
  width: 100%;
  height: 100%;
}

#map3 {
  width: 400px;
  height: 400px;
}
#map4 {
  width: 400px;
  height: 400px;
}
</style>
