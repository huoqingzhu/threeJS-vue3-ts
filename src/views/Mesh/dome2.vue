<template>
  <div class="zhushi">
    <h4>克隆和复制</h4>
    <div>
      <a-button @click="scale">放大</a-button>
      <a-button @click="scale(false)">缩小</a-button>
      <a-button @click="translate('x')">沿X轴平移</a-button>
      <a-button @click="translate('y')">沿Y轴平移</a-button>
      <a-button @click="translate('z')">沿Z轴平移</a-button>
      <a-button @click="rotate('x')">沿X轴旋转</a-button>
      <a-button @click="rotate('y')">沿X轴旋转</a-button>
      <a-button @click="rotate('z')">沿X轴旋转</a-button>
    </div>
    <ul>
      <li>克隆方法.clone()</li>
      <li>删除方法.remove()</li>
    </ul>
    <div>
      <a-button @click="clone">克隆一个正方体</a-button>
      <a-button @click="delet">删除正方体</a-button>
    </div>

    <div id="map"></div>
  </div>
</template>

<script lang="ts">
import Map from "@/utils/tree/map";
import { defineComponent, toRefs, reactive, onMounted } from "vue";
import { createCube } from "@/utils/tree/model";
import THREE, { log } from "three";

interface state {
  map: any;
}
export default defineComponent({
  setup() {
    let geometry = createCube();
    let geometryScale = 1;
    let map: Map;
    let copyMesh: any[] = [];
    function face3() {
      let container = document.getElementById("map");
      map = new Map(container);
      map.addMesh(geometry);
      map.init();
    }
    //真实dome加载后
    onMounted(() => {
      face3();
    });
    const state = reactive({
      value: "face",
    });
    // 切换类型
    function scale(value = true) {
      value
        ? (geometryScale = geometryScale * 2)
        : (geometryScale = geometryScale / 2);
      geometry.scale.set(geometryScale, geometryScale, geometryScale);
    }
    function translate(type: string) {
      switch (type) {
        case "x":
          geometry.translateX(10);
          break;
        case "y":
          geometry.translateY(10);
          break;
        case "z":
          geometry.translateZ(10);
          break;
        default:
          geometry.translateX(10);
      }
    }
    function rotate(type: string) {
      switch (type) {
        case "x":
          geometry.rotateX(10);
          break;
        case "y":
          geometry.rotateY(10);
          break;
        case "z":
          geometry.rotateZ(10);
          break;
        default:
          geometry.rotateX(10);
      }
    }
    function clone() {
      let copyGeometry = geometry.clone();
      copyMesh.push(copyGeometry);
      console.log(copyMesh);
      console.log(map);
      copyGeometry.position.set(400 * copyMesh.length, 0, 0);
      map.addMesh(copyGeometry);
    }
    function delet() {
      if (copyMesh.length > 0) {
        map.scene.remove(copyMesh[copyMesh.length - 1]);
        copyMesh.pop();
      } else {
        console.log("没有元素");
      }
    }
    return {
      scale,
      translate,
      rotate,
      clone,
      delet,
      ...toRefs(state),
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
  width: 1000px;
  height: 600px;
}
</style>
