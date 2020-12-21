<template>
  <div class="zhushi">
    <h4>波浪粒子</h4>

    <div id="map2"></div>
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
    let cont = 10;
    function init(ID: string, Gradients: boolean, Normal: boolean) {
      let container = document.getElementById(ID);

      let particles = new Array(); //精灵
      let particle: THREE.Sprite; //精灵
      let PI2 = Math.PI * 5; //360度
      let map = new Map(container, false);
      // 创建材质
      let material = new THREE.SpriteMaterial({
        color: 0x097bdb,
        //color:0xffe600,//小点点的颜色
      });
      var i = 0;
      let AMOUNTX = 50,
        AMOUNTY = 50,
        count = 0;
      let SEPARATION = 100;
      // 随机生成粒子
      for (var ix = 0; ix < AMOUNTX; ix++) {
        for (var iy = 0; iy < AMOUNTY; iy++) {
          particle = particles[i++] = new THREE.Sprite(material);
          particle.position.x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
          particle.position.z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
          particle.scale.set(8, 8, 1); //设置大小
          // console.log(particle);
          map.addMesh(particle);
        }
      }
      let mouseX = 0,
        mouseY = -438; //设置初始位置

      //初始化map
      // console.log(particles);
      setTimeout(() => {
        let i = 0;
        for (let ix = 0; ix < AMOUNTX; ix++) {
          for (let iy = 0; iy < AMOUNTY; iy++) {
            // console.log(i);
            let particle = particles[i++];
            particle.position.y =
              Math.sin((ix + count) * 0.3) * 50 +
              Math.sin((iy + count) * 0.5) * 50;
            particle.scale.x = particle.scale.y =
              (Math.sin((ix + count) * 0.3) + 1) * 4 +
              (Math.sin((iy + count) * 0.5) + 1) * 4;
          }
        }
      }, 1000);
      // setTimeout(() => {
      //   let i = 0;
      //   for (let ix = 0; ix < AMOUNTX; ix++) {
      //     for (let iy = 0; iy < AMOUNTY; iy++) {
      //       // console.log(i);
      //       let particle = particles[i++];
      //       let y =
      //         Math.sin((ix + count) * 0.3) * 50 +
      //         Math.sin((iy + count) * 0.5) * 50;
      //       particle.position.set(particle.position.x, y, particle.position.z);
      //       particle.scale.x = particle.scale.y =
      //         (Math.sin((ix - count) * 0.3) + 1) * 4 +
      //         (Math.sin((iy - count) * 0.5) + 1) * 4;
      //     }
      //   }
      // }, 2000);
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

    return {
      ...toRefs(state),
    };
  },
  beforeUnmount() {
    let dome: any = document.getElementById("map2");
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
#map2 {
  width: 900px;
  height: 600px;
}
</style>
