<template>
  <div class="zhushi">
    <ul>
      <li>1.CAD转dxf格式文件</li>
      <li>
        dxf转
        <a
          href="https://zhuanlan.zhihu.com/p/141554586?from_voters_page=true%E5%85%AC%E5%BC%80"
          target="_blank"
          >geojson</a
        >
      </li>
    </ul>
    <div id="map4"></div>
  </div>
</template>
<script lang="ts">
// 引入tree.js
import * as THREE from "three";
import Map from "@/utils/tree/map";
import { defineComponent, toRefs, reactive, onMounted } from "vue";
import { GeometryCollectionGeojson } from "@/utils/tree/model";
import { log } from "three";

interface state {
  map: any;
}
export default defineComponent({
  setup() {
    // const data = require("./JSON/line.json");
    // console.log(data);
    console.log(require("./JSON/2.json"));
    console.log(require("./JSON/zhengshi.json"));
    let geometry = GeometryCollectionGeojson(require("./JSON/zhengshi.json"));
    let map: Map;
    function face3() {
      let container = document.getElementById("map4");
      map = new Map(container, false);
      let ambient = new THREE.AmbientLight(0xffffff);
      map.scene.add(ambient); //环境光对象添加到scene场景中
      map.addMesh(geometry);
      // geometry.translateX(-500);
      // geometry.translateY(-100);

      map.init();
      console.log(map.scene.children);
    }
    //真实dome加载后
    onMounted(() => {
      face3();
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