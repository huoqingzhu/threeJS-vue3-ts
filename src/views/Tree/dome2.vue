<template>
  <div class="zhushi">
    <h4>顶点概念、几何体结构</h4>
    <a-select
      v-model:value="value"
      style="width: 120px"
      ref="select"
      @change="handleChange"
    >
      <a-select-option value="point"> point </a-select-option>
      <a-select-option value="line"> line </a-select-option>
      <a-select-option value="face"> face </a-select-option>
    </a-select>
    <div id="map2"></div>
    <!-- <div id="map3"></div> -->
  </div>
</template>

<script lang="ts">
// 引入tree.js
import * as THREE from "three";
import Map from "@/utils/tree/map";
import { defineComponent, toRefs, reactive, onMounted } from "vue";
import { CustomGeometry } from "@/utils/tree/model";
import { log } from "three";
interface state {
  map: any;
}
export default defineComponent({
  name: "Dome2",
  setup() {
    console.log("dome2");
    let face: THREE.Mesh | THREE.Points | THREE.Line;
    let Points: THREE.Mesh | THREE.Points | THREE.Line;
    let Line: THREE.Mesh | THREE.Points | THREE.Line;
    function init(ID: string, Gradients: boolean, Normal: boolean) {
      let container = document.getElementById(ID);
      let map = new Map(container);
      face = CustomGeometry("material", Gradients, Normal); //生成三角面
      Points = CustomGeometry("Points", Gradients, Normal); //生成点模型
      Line = CustomGeometry("Line", Gradients, Normal); //生成线模型
      map.addMesh(face);
      map.addMesh(Points);
      map.addMesh(Line);
      //初始化map
      map.init();
    }
    //真实dome加载后
    onMounted(() => {
      //自己设置颜色
      init("map2", true, true);
      //以顶点为为准
      // init("map3", true, true);
    });
    const state = reactive({
      value: "face",
    });
    const handleChange = (e: any) => {
      if (e === "point") {
        (Points.material as THREE.PointsMaterial).visible = true;
        (face.material as THREE.MeshBasicMaterial).visible = false;
        (Line.material as THREE.LineBasicMaterial).visible = false;
      } else if (e === "face") {
        (face.material as THREE.MeshBasicMaterial).visible = true;
        (Line.material as THREE.LineBasicMaterial).visible = false;
        (Points.material as THREE.PointsMaterial).visible = false;
      } else {
        (face.material as THREE.MeshBasicMaterial).visible = false;
        (Line.material as THREE.LineBasicMaterial).visible = true;
        (Points.material as THREE.PointsMaterial).visible = false;
      }
    };
    return {
      ...toRefs(state),
      handleChange,
    };
  },
  beforeUnmount() {
    let dome: any = document.getElementById("map2");
    dome.removeChild(dome.children[0]);
    // dome.children[0].style = "display: none; width: 0px; height: 0px;";
    console.log(dome.children[0]);
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
#map2 {
  width: 400px;
  height: 400px;
}
#map3 {
  width: 400px;
  height: 400px;
}
</style>
