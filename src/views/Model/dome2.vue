<template>
  <div class="zhushi">
    <h4>
      TubeGeometry的功能就是通过一条曲线生成一个圆管。它的本质就是以曲线上顶点为基准，生成一系列曲线等径分布的顶点数据
    </h4>

    <div id="map4"></div>
  </div>
</template>
<script lang="ts">
// 引入tree.js
import * as THREE from "three";
import Map from "@/utils/tree/map";
import { defineComponent, toRefs, reactive, onMounted } from "vue";
import {
  createTubeGeometry,
  createCurvePathTubeGeometry,
} from "@/utils/tree/model";

interface state {
  map: any;
}
export default defineComponent({
  setup() {
    // 初始化 Map
    function init() {
      let container = document.getElementById("map4");
      let map = new Map(container);

      map.addMesh(createTubeGeometry());
      map.addMesh(createCurvePathTubeGeometry());
      //初始化map
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