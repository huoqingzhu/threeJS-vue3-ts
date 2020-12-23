<template>
  <div class="zhushi">
    <h3>草地案例</h3>
    <div id="maps"></div>
  </div>
</template>
<script lang="ts">
// 引入tree.js
import Map from "@/utils/tree/map";
import { defineComponent, toRefs, reactive, onMounted } from "vue";
import { createGrass } from "@/utils/tree/model";
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
      let Mesh1 = createGrass(); //创建一个模型
      map.addMesh(Mesh1); //将模型加入场景
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
