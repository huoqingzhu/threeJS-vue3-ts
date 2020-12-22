<template>
  <div class="zhushi">
    <h3>在具有方向光源的作用下，物体会形成阴影投影效果。</h3>
    <p>
      ps:产生阴影的前提：
      <ul>
        <li>渲染器要开启阴影   <span class="daima">this.renderer.shadowMap.enabled = true</span></li>
        <li>设置能够产生阴影的模型 <span class="daima">mesh.castShadow = true;</span></li>
         <li>设置接收投影效果的模型 <span class="daima">planeMesh.receiveShadow = true;</span></li>
        <li>定义能够产生阴影的光源 <span class="daima">light.castShadow = true</span></li>
      </ul>
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
    </p>
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
  setup() {
    let state = reactive({
      colors: "#ffffff",
      directional: true,
      spot: false,
    });
    let directionalLight: THREE.DirectionalLight;
    let spotLight: THREE.SpotLight;
    // 初始化 Map
    function init() {
      let container = document.getElementById("maps");
      let map = new Map(container, true, false);
      // let Mesh1 = createCube(0xffb6c1); //创建一个模型
      // map.addMesh(Mesh1); //将模型加入场景
      var geometry = new THREE.BoxGeometry(40, 100, 40);
      var material = new THREE.MeshLambertMaterial({
        color: 0x0000ff,
      });
      var mesh = new THREE.Mesh(geometry, material);
      // mesh.position.set(0,0,0)
      map.scene.add(mesh);

      // 设置产生投影的网格模型
      mesh.castShadow = true;

      //创建一个平面几何体作为投影面
      var planeGeometry = new THREE.PlaneGeometry(300, 200);
      var planeMaterial = new THREE.MeshLambertMaterial({
        color: 0xccc,
      });
      // 平面网格模型作为投影面
      var planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
      map.scene.add(planeMesh); //网格模型添加到场景中
      planeMesh.rotateX(-Math.PI / 2); //旋转网格模型
      planeMesh.position.y = -50; //设置网格模型y坐标
      // 设置接收阴影的投影面
      planeMesh.receiveShadow = true;

      // 加入平行光
      directionalLight = new THREE.DirectionalLight(0xffffff, 2);
      // 设置光源位置
      directionalLight.position.set(-40, 60, 40);
      map.scene.add(directionalLight);
      // 设置用于计算阴影的光源对象
      directionalLight.castShadow = true;
      // 设置计算阴影的区域，最好刚好紧密包围在对象周围
      // 计算阴影的区域过大：模糊  过小：看不到或显示不完整
      directionalLight.shadow.camera.near = 0.5;
      directionalLight.shadow.camera.far = 300;
      directionalLight.shadow.camera.left = -50;
      directionalLight.shadow.camera.right = 50;
      directionalLight.shadow.camera.top = 200;
      directionalLight.shadow.camera.bottom = -100;
      // 设置mapSize属性可以使阴影更清晰，不那么模糊
      directionalLight.shadow.mapSize.set(1024, 1024);

      // 加入聚光光源
      spotLight = new THREE.SpotLight(0xffffff, 2);
      // 设置聚光光源位置
      spotLight.position.set(50, 90, 50);
      // 设置聚光光源发散角度
      spotLight.angle = Math.PI / 6;
      map.scene.add(spotLight); //光对象添加到scene场景中
      // 设置用于计算阴影的光源对象
      spotLight.castShadow = true;
      // 设置计算阴影的区域，注意包裹对象的周围
      spotLight.shadow.camera.near = 1;
      spotLight.shadow.camera.far = 300;
      spotLight.shadow.camera.fov = 20;
      spotLight.visible = false;
      // 渲染场景
      map.init();
    }
    // 是否开启点光源
    watch(
      () => state.directional,
      (a, b) => {
        if (a) {
          directionalLight.visible = true;
        } else {
          directionalLight.visible = false;
        }
      }
    );
    watch(
      () => state.spot,
      (a, b) => {
        if (a) {
          spotLight.visible = true;
        } else {
          spotLight.visible = false;
        }
      }
    );
    onMounted(() => {
      console.log("重新创建");
      init();
    });
    return {
      ...toRefs(state),
    };
  },
  beforeUnmount() {
    let dome: any = document.getElementById("maps");
    if (dome.children[0]) {
      dome.removeChild(dome.children[0]);
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
  canvas {
    display: none;
  }
}
</style>
