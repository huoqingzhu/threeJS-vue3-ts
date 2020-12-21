<template>
  <div class="zhushi">
    <h2>光源的类型</h2>
    <h4>
      在现实中没有光的世界黑暗的,在webgl中也是如此,下图生成了<span
        style="color: #0000ff"
        >材质为蓝色的正方体</span
      >, 此时没有任何光源
    </h4>
    <p style="display: flex">
      <span>请选择光源颜色:</span>
      <input type="color" v-model="colors" />
    </p>
    <a-switch
      checked-children="环境光"
      un-checked-children="环境光"
      v-model:checked="Ambient"
    />
    <a-switch
      checked-children="点光源"
      un-checked-children="点光源"
      v-model:checked="point"
    />
    <a-switch
      checked-children="平行光"
      un-checked-children="平行光"
      v-model:checked="directional"
    />
    <a-switch
      checked-children="聚光源"
      un-checked-children="聚光源"
      v-model:checked="spot"
    />
    <span>除了环境光其他位置都是设置200</span>
    <div id="maps"></div>
  </div>
</template>

<script lang="ts">
// 引入tree.js
import * as THREE from "three";
import Map from "@/utils/tree/map";
import { defineComponent, toRefs, reactive, onMounted, watch } from "vue";
import { createCube } from "@/utils/tree/model";

interface state {
  map: any;
}
export default defineComponent({
  name: "Dome1",
  setup() {
    // 初始化 Map
    let map: Map;
    let ambient: THREE.AmbientLight; //环境光
    let point: THREE.PointLight; //点光源
    let directional: THREE.DirectionalLight; //平行光
    let Mesh1: THREE.Mesh;
    let spot: THREE.SpotLight;
    let state = reactive({
      colors: "#ffffff",
      Ambient: false,
      point: false,
      directional: false,
      spot: false,
    });
    function init() {
      let container = document.getElementById("maps");
      map = new Map(container, true, false);
      Mesh1 = createCube(0x4169e1); //创建一个模型
      map.addMesh(Mesh1); //将模型加入场景
      map.init();
    }
    // 观察颜色的变化 更改光的颜色
    watch(
      () => state.colors,
      (a: any, b) => {
        console.log(state.colors);
        if (ambient) {
          let color = new THREE.Color(a); //创建颜色对象color
          ambient.color = color; // 给环境光修改颜色
        }
        if (point) {
          let color = new THREE.Color(a); //创建颜色对象color
          point.color = color; // 给环境光修改颜色
        }
        if (directional) {
          let color = new THREE.Color(a); //创建颜色对象color
          directional.color = color; // 给环境光修改颜色
        }
        if (spot) {
          let color = new THREE.Color(a); //创建颜色对象color
          spot.color = color; // 给环境光修改颜色
        }
      }
    );
    // 是否开启环境光
    watch(
      () => state.Ambient,
      (a, b) => {
        if (a) {
          ambient.visible = true;
        } else {
          ambient.visible = false;
        }
      }
    );
    // 是否开启点光源
    watch(
      () => state.point,
      (a, b) => {
        if (a) {
          point.visible = true;
        } else {
          point.visible = false;
        }
      }
    );
    // 是否开启点光源
    watch(
      () => state.directional,
      (a, b) => {
        if (a) {
          directional.visible = true;
        } else {
          directional.visible = false;
        }
      }
    );
    // 是否开启聚光源
    watch(
      () => state.spot,
      (a, b) => {
        if (a) {
          spot.visible = true;
        } else {
          spot.visible = false;
        }
      }
    );
    onMounted(() => {
      console.log("重新创建");
      init();
      initialLight();
    });
    function addLint() {}
    function initialLight() {
      //环境光
      ambient = new THREE.AmbientLight(state.colors);
      map.scene.add(ambient); //环境光对象添加到scene场景中
      ambient.visible = false;
      // 点光源
      point = new THREE.PointLight(state.colors); //设置点光源位置，改变光源的位置
      point.position.set(200, 200, 200);
      point.visible = false;
      map.scene.add(point);
      // 平行光
      directional = new THREE.DirectionalLight(state.colors, 1);
      // 设置光源的方向：通过光源position属性和目标指向对象的position属性计算
      directional.position.set(200, 200, 200);
      // 方向光指向对象网格模型mesh2，可以不设置，默认的位置是0,0,0
      directional.target = Mesh1;
      map.scene.add(directional);
      directional.visible = false;
      // 设置聚光源
      spot = new THREE.SpotLight(state.colors);
      // 设置聚光光源位置
      spot.position.set(200, 200, 200);
      // 聚光灯光源指向网格模型mesh2
      spot.target = Mesh1;
      // 设置聚光光源发散角度
      spot.angle = Math.PI / 6;
      spot.visible = false;
      map.scene.add(spot); //光对象添加到scene场景中
      // 将光源辅助对象加入场景
      // var spotLight = new THREE.SpotLight(0xffffff);
      // spotLight.position.set(70, 10, 10);
      // map.scene.add(spotLight);

      // var spotLightHelper = new THREE.SpotLightHelper(spotLight);
      // map.scene.add(spotLightHelper);
    }
    function changeColor(value: number) {
      console.log(value);
    }
    return {
      ...toRefs(state),
      addLint,
      changeColor,
    };
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
.col {
  width: 80px;
  height: 40px;
  display: block;
  background-color: #00ff00;
  margin: 0 30px;
}
.col2 {
  width: 80px;
  height: 40px;
  display: block;
  background-color: #ff4500;
  margin: 0 30px;
}
.col3 {
  width: 80px;
  height: 40px;
  display: block;
  background-color: #fff;
  margin: 0 30px;
}
</style>
