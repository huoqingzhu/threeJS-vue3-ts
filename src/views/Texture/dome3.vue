<template>
  <div class="zhushi">
    <ul>
      <li>阵列</li>
      <li>偏移</li>
      <li>纹理旋转</li>
    </ul>
    <div id="maps"></div>
  </div>
</template>

<script lang="ts">
// 引入tree.js
import Map from "@/utils/tree/map";
import { defineComponent, toRefs, reactive, onMounted } from "vue";
import { createWrapTexture } from "@/utils/tree/model";
interface state {
  map: any;
}
export default defineComponent({
  name: "Dome1",
  setup() {
    // 初始化 Map
    function init() {
      let container = document.getElementById("maps");
      let map = new Map(container);
      let Mesh1 = createWrapTexture(); //创建一个模型
      map.addMesh(Mesh1); //将模型加入场景
      // 阵列
      const node1 = createWrapTexture(true);
      node1.position.set(200, 0, 0);
      map.addMesh(node1);
      // 偏移
      const node2 = createWrapTexture(false, { x: 0, y: 0.2 });
      node2.position.set(-200, 0, 0);
      map.addMesh(node2);
      // 纹理旋转
      const node3 = createWrapTexture(false, { x: 0, y: 0 }, 4);
      node3.position.set(0, 200, 0);
      map.addMesh(node3);

      //初始化map
      map.init();
    }
    onMounted(() => {
      init();
    });
  },
  beforeUnmount() {
    let dome: any = document.getElementById("maps");
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
#maps {
  width: 700px;
  height: 700px;
  canvas {
    display: none;
  }
}
</style>
