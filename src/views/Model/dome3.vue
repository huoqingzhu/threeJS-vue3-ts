<template>
  <div class="zhushi">
    <h4>
      LatheGeometry()可以利用已有的二维数据生成三维顶点数据，
      二维数据可以通过二维向量对象Vector2定义，也可以通过3D曲线或2D线条轮廓生成。
      LatheGeometry的二维坐标数据默认绕y轴旋转。
    </h4>

    <div id="map4"></div>
  </div>
</template>
<script lang="ts">
// 引入tree.js
import * as THREE from "three";
import Map from "@/utils/tree/map";
import { defineComponent, toRefs, reactive, onMounted } from "vue";
import { createLatheGeometry } from "@/utils/tree/model";

interface state {
  map: any;
}
export default defineComponent({
  setup() {
    // 初始化 Map
    function init() {
      let container = document.getElementById("map4");
      let map = new Map(container);
      map.addMesh(createLatheGeometry());
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