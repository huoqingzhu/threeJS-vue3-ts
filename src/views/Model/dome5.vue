<template>
  <div class="zhushi">
    <h3>拉伸扫描成型ExtrudeGeometry</h3>
    <ul>
      <li>拉伸成型就是将一个横面拉成三维立体的（常用）</li>
      <li>扫描需要轮廓（一个面），轨迹线,将轮廓按照轨迹线拉伸</li>
    </ul>
    <div id="map4"></div>
  </div>
</template>
<script lang="ts">
// 引入tree.js
import * as THREE from "three";
import Map from "@/utils/tree/map";
import { defineComponent, toRefs, reactive, onMounted } from "vue";
import { createExtrude, createScanning } from "@/utils/tree/model";

interface state {
  map: any;
}
export default defineComponent({
  setup() {
    // 初始化 Map
    function init() {
      let container = document.getElementById("map4");
      let map = new Map(container);
      map.addMesh(createExtrude());
      let ambient = new THREE.AmbientLight(0xffffff);
      map.scene.add(ambient); //环境光对象添加到scene场景中
      let node = createScanning();
      node.position.set(200, 200, 200);
      map.addMesh(node);
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