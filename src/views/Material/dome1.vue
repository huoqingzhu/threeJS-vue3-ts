<template>
  <div class="zhushi">
    <h4>所有材质就是对WebGL着色器代码的封装</h4>
    <p>常见的材质有以下几种</p>
    <ul>
      <li>点材质( <label class="daima">PointsMaterial</label>)</li>
      <li>
        线材质 (
        <label>
          <ol>
            <li>线基础材质: <label class="daima">LineBasicMateria</label></li>
            <li>虚线材质:<label class="daima">LineDashedMaterial</label></li>
          </ol>
        </label>
      </li>
      <li>
        网格材质
        <ol>
          <li>网格基础材质(<label class="daima">MeshBasicMaterial</label>)</li>
          <li>
            网格Lambert材质、暗淡、漫反射 MeshLambertMaterial（<label
              class="daima"
              >MeshLambertMaterial </label
            >）
          </li>
          <li>
            网格Phong材质、高亮表面、镜面反射（<label class="daima"
              >MeshPhongMaterial </label
            >）
          </li>
          <li>
            PBR材质

            <ol>
              <li>
                <label class="daima">MeshStandardMaterial</label>
              </li>
              <li>
                <label class="daima">MeshPhysicalMaterial</label>
              </li>
              <li>
                <label class="daima">MeshPhongMaterial</label>
              </li>
            </ol>
          </li>
        </ol>
      </li>
      <li>精灵Sprite材质 <label class="daima">SpriteMaterial</label></li>
      <li>
        自定义着色器材质
        <ol>
          <li>
            <label class="daima">RawShaderMaterial</label>
          </li>
          <li>
            <label class="daima">ShaderMaterial</label>
          </li>
        </ol>
      </li>
    </ul>
    <h4>材质共有属性、私有属性</h4>
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

    <div id="map"></div>
  </div>
</template>

<script lang="ts">
// 引入tree.js
import * as THREE from "three";
import Map from "@/utils/tree/map";
import { defineComponent, toRefs, reactive, onMounted } from "vue";
import { CustomGeometry } from "@/utils/tree/model";
interface state {
  map: any;
}
export default defineComponent({
  name: "Dome2",
  setup() {
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
      init("map", true, true);
    });
    const state = reactive({
      value: "face",
    });
    // 切换类型
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
  width: 400px;
  height: 400px;
}
</style>
