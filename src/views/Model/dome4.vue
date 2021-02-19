<template>
  <div class="zhushi">
    <h3>Shape对象和轮廓填充ShapeGeometry</h3>
    <ul>
      <li>
        填充顶点构成的轮廓(所谓填充：ShapeGeometry算法利用顶点计算出三角面face3数据填充轮廓)
      </li>
      <li>shape外轮廓和内轮廓(shape.holes.push)</li>
    </ul>
    <div id="map4"></div>
  </div>
</template>
<script lang="ts">
// 引入tree.js
import * as THREE from "three";
import Map from "@/utils/tree/map";
import { defineComponent, toRefs, reactive, onMounted } from "vue";
import {
  ShapeGeometry,
  absarcShapeGeometry,
  rectangleShape,
  arcShape,
  manyShape,
} from "@/utils/tree/model";

interface state {
  map: any;
}
export default defineComponent({
  setup() {
    // 初始化 Map
    function init() {
      let container = document.getElementById("map4");
      let map = new Map(container, true, false);
      map.addMesh(ShapeGeometry()); //五边形填充
      const absarcShape = absarcShapeGeometry(); //圆形填充
      absarcShape.position.set(0, 0, -100);
      const rectang = rectangleShape();
      rectang.position.set(0, 0, 200);
      // map.addMesh(rectang);
      // map.addMesh(absarcShape);
      const arc = arcShape();
      arc.position.set(150, 150, 150);
      // map.addMesh(arc);
      let ambient = new THREE.AmbientLight(0xffffff);
      map.scene.add(ambient); //环境光对象添加到scene场景中
      // map.addMesh(manyShape());
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