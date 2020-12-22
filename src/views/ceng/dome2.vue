<template>
  <div class="zhushi">
    <h4>本地坐标系和世界坐标系</h4>
    <ul>
      <li>世界坐标.getWorldPosition()</li>
      <li>位置属性.position</li>
    </ul>
    <p>
      所谓本地坐标系或者说模型坐标系，就是模型对象相对模型的父对象而言，模型位置属性.position表示的坐标值就是以本地坐标系为参考，表示子对象相对本地坐标系原点(0,0,0)的偏移量。
      前面两节课说过Threejs场景Scene是一个树结构，一个模型对象可能有多个父对象节点。世界坐标系默认就是对Threejs整个场景Scene建立一个坐标系，一个模型相对世界坐标系的坐标值就是该模型对象所有父对象以及模型本身位置属性.position的叠加。
    </p>
    <a-button @click="scale">放大</a-button>
    <a-button @click="scale(false)">缩小</a-button>
    <a-button @click="translate('x')">沿X轴平移</a-button>
    <a-button @click="translate('y')">沿Y轴平移</a-button>
    <a-button @click="translate('z')">沿Z轴平移</a-button>
    <a-button @click="rotate('x')">沿X轴平移</a-button>
    <a-button @click="rotate('y')">沿X轴平移</a-button>
    <a-button @click="rotate('z')">沿X轴平移</a-button>

    <div id="map2"></div>
  </div>
</template>

<script lang="ts">
import Map from "@/utils/tree/map";
import { defineComponent, toRefs, reactive, onMounted } from "vue";
import { createCube } from "@/utils/tree/model";
import * as THREE from "three";
interface state {
  map: any;
}
export default defineComponent({
  setup() {
    let mesh = createCube();
    let geometryScale = 1;
    let group: THREE.Group = new THREE.Group();
    function face3() {
      let container = document.getElementById("map2");
      let map = new Map(container);
      mesh.position.set(50, 0, 0);
      group.position.set(50, 0, 0);
      group.add(mesh);
      map.scene.add(group);

      // .position属性获得本地坐标
      console.log("本地坐标", mesh.position);

      // getWorldPosition()方法获得世界坐标
      //该语句默认在threejs渲染的过程中执行,如果渲染之前想获得世界矩阵属性、世界位置属性等属性，需要通过代码更新
      map.scene.updateMatrixWorld(true);
      let worldPosition = new THREE.Vector3();
      mesh.getWorldPosition(worldPosition);
      console.log("世界坐标", worldPosition);
      map.addMesh(group);
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
      mesh.scale.set(geometryScale, geometryScale, geometryScale);
    }
    function translate(type: string) {
      switch (type) {
        case "x":
          mesh.translateX(10);
          break;
        case "y":
          mesh.translateY(10);
          break;
        case "z":
          mesh.translateZ(10);
          break;
        default:
          mesh.translateX(10);
      }
    }
    function rotate(type: string) {
      switch (type) {
        case "x":
          mesh.rotateX(10);
          break;
        case "y":
          mesh.rotateY(10);
          break;
        case "z":
          mesh.rotateZ(10);
          break;
        default:
          mesh.rotateX(10);
      }
    }
    return {
      scale,
      translate,
      rotate,
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

#map2 {
  width: 1000px;
  height: 600px;
}
</style>
