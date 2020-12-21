<template>
  <div class="zhushi">
    <h4>我们来尝试封装一下tree.js(路径:views/Tree/dome1.vue)</h4>

    <div style="display: flex">
      <div>
        <p>three.js是右手坐标系</p>
        <img src="https://img-blog.csdnimg.cn/20181227215027204" alt="" />
        <p>
          图中右边那个手对应的坐标系，就是右手坐标系。在Threejs中，坐标和右边的坐标完全一样。x轴正方向向右，y轴正方向向上，z轴由屏幕从里向外。
        </p>
      </div>
      <div id="maps"></div>
    </div>
  </div>
</template>

<script lang="ts">
// 引入tree.js
import * as THREE from "three";
import Map from "@/utils/tree/map";
import { defineComponent, toRefs, reactive, onMounted } from "vue";
import { createCube } from "@/utils/tree/model";
import { log } from "three";
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
      let Mesh1 = createCube(0xffb6c1); //创建一个模型
      map.addMesh(Mesh1); //将模型加入场景
      //初始化map
      map.init();
    }
    onMounted(() => {
      console.log("重新创建");
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
