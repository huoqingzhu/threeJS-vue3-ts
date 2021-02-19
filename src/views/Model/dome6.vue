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
import { defineComponent, toRefs, reactive, onMounted } from "vue";
import { createGeojson } from "@/utils/tree/model";
interface state {
  map: any;
}
export default defineComponent({
  setup() {
    const data = require("./JSON/zhong.json");
    console.log(data);
    let geometry = createGeojson(data, 5);
    geometry.translateX(-520);
    geometry.translateY(-50);
    let map: Map;
    function init() {
      let container = document.getElementById("map");
      map = new Map(container, false);
      map.addMesh(geometry);
      map.init();
      map.onMouseMove();
    }
    //真实dome加载后
    onMounted(() => {
      init();
    });
  },
  beforeUnmount() {
    try {
      let dome: any = document.getElementById("map");
      if (dome.children[0]) {
        dome.removeChild(dome.children[0]);
      }
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
  background-color: rgb(2, 3, 27);
  color: #fff;
}

#map {
  width: 1000px;
  height: 800px;
}
</style>
