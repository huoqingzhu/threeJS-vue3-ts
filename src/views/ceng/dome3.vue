<template>
  <div class="zhushi">
    <h3>层级模型节点命名、查找、遍历</h3>
    <ul>
      <li>模型命名(.name属性)</li>
      <li>树结构层级模型</li>
      <li>递归遍历方法.traverse()</li>
      <li>查找某个具体的模型.getObjectById()、.getObjectByName()</li>
    </ul>
    <p>设置光源</p>
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
    <input type="color" v-model="colors" />
    <p>设置躯体颜色</p>
    <input type="color" v-model="colorMesh" />
    <p>设置眼睛颜色</p>
    <input type="color" v-model="eyeColor" />
    <div id="maps"></div>
  </div>
</template>
<script lang="ts">
import Vue, { defineComponent, onMounted, reactive, toRefs, watch } from "vue";
import Map from "@/utils/tree/map";
import { creatPersonModel } from "@/utils/tree/model";
import * as THREE from "three";

export default defineComponent({
  setup() {
    // 初始化 Map
    let map: Map;
    let ambient: THREE.AmbientLight; //环境光
    let point: THREE.PointLight; //点光源
    let directional: THREE.DirectionalLight; //平行光
    let Mesh1: THREE.Group;
    let spot: THREE.SpotLight;
    let state = reactive({
      colors: "#ffffff",
      Ambient: false,
      point: false,
      directional: false,
      spot: false,
      colorMesh: "#FFD700",
      eyeColor: "#000000",
    });
    function init() {
      let container = document.getElementById("maps");
      map = new Map(container, true, false);
      Mesh1 = creatPersonModel(); //创建一个模型
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
    // 观察躯体颜色变化
    watch(
      () => state.colorMesh,
      (a, b) => {
        map.scene.traverse((obj: any) => {
          if (obj.type === "Mesh") {
            obj.material.color.set(a);
          }
        });
      }
    );
    watch(
      () => state.eyeColor,
      (a, b) => {
        const node = map.scene.getObjectByName("左眼");
        const node2 = map.scene.getObjectByName("右眼");
        (node as any).material.color.set(a);
        (node2 as any).material.color.set(a);
      }
    );
    onMounted(() => {
      console.log("重新创建");
      init();
      // 初始化光源对象
      initialLight();
    });

    // 初始化光源对象
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
    return {
      ...toRefs(state),
    };
  },
  beforeUnmount() {
    try {
      let dome: any = document.getElementById("maps");
      if (dome.children[0]) {
        dome.removeChild(dome.children[0]);
      }
    } catch {
      console.log("错误");
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
#maps {
  width: 700px;
  height: 700px;
}
</style>
