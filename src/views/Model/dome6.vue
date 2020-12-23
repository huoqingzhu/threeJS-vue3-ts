<template>
  <div class="zhushi">
    <h3>绘制地图的数据采用的是Geojson</h3>
    <p>
      数据来源<a
        href="http://datav.aliyun.com/tools/atlas/#&lat=29.886420040401024&lng=106.720060693723&zoom=4.5"
        target="_blank"
        >高德</a
      >
    </p>
    <div id="map"></div>
  </div>
</template>

<script lang="ts">
import Map from "@/utils/tree/map";
import * as THREE from "three";
import { defineComponent, toRefs, reactive, onMounted } from "vue";
import { createGeojson, createCube } from "@/utils/tree/model";

interface state {
  map: any;
}
export default defineComponent({
  setup() {
    const data = require("./JSON/zhong.json");
    let geometry = createGeojson(data, 5);
    let geometryScale = 2;
    let map: Map;
    function face3() {
      let container = document.getElementById("map");
      map = new Map(container, false);
      let ambient = new THREE.AmbientLight(0xffffff);
      map.scene.add(ambient); //环境光对象添加到scene场景中
      map.addMesh(geometry);
      geometry.translateX(-500);
      geometry.translateY(-100);
      map.init();
    }
    //真实dome加载后
    onMounted(() => {
      face3();
    });

    return {};
  },
  beforeUnmount() {
    try {
      let dome: any = document.getElementById("map");
      dome.removeChild(dome.children[0]);
    } catch {
      console.log("销毁出错");
    }
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

#map {
  width: 1000px;
  height: 600px;
}
</style>
