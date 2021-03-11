<template>
  <div class="zhushi">
    <h3>天空盒</h3>
    <div id="map8"></div>
  </div>
</template>
<script lang="ts">
// 引入tree.js
import Map from "@/utils/tree/map";
import { defineComponent, toRefs, reactive, onMounted } from "vue";
import {
  createArcCurve,
  absarcShapeGeometry,
  createCircular,
} from "@/utils/tree/model";
import * as THREE from "three";
interface state {
  map: any;
}
export default defineComponent({
  name: "Dome1",
  setup() {
    // 初始化 Map
    function init() {
      let container = document.getElementById("map8");
      let map = new Map(container);

      let Mesh1 = absarcShapeGeometry(); //创建一个模型
      Mesh1.position.set(200, 0, 0);
      map.addMesh(Mesh1); //将模型加入场景
      map.addMesh(createCircular()); //
      //初始化map
      map.camera.position.set(0, 0, 1000); //设置相机位置
      map.camera.lookAt(map.scene.position); //设置相机方向(指向的场景对象)
      map.init();
    }
    onMounted(() => {
      init();
    });
  },
  beforeUnmount() {
    let dome: any = document.getElementById("map8");
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
}
#map8 {
  width: 1000px;
  height: 800px;
}
</style>
