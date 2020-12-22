<template>
  <div class="zhushi">
    <h3>直线、椭圆、圆弧、基类Curve</h3>
    <p>
      曲线和几何体同样本质上都是用来生成顶点的算法，曲线主要是按照一定的规则生成一系列沿着某条轨迹线分布的顶点。当你把曲线、几何体看成顶点的时候
    </p>
    <p>1.圆弧线ArcCurve</p>
    <p>2.直线</p>
    <p>3.三维直线(LineCurve3)</p>
    <p>4.样条曲线(THREE.CatmullRomCurve3)</p>
    <p>5.贝塞尔曲线,贝塞尔曲线和样条曲线不同，多了一个控制点概念。</p>
    <p>
      组合曲线CurvePath可以把多个圆弧线、样条曲线、直线等多个曲线合并成一个曲线。
    </p>
    <div id="map3"></div>
  </div>
</template>
<script lang="ts">
// 引入tree.js
import * as THREE from "three";
import Map from "@/utils/tree/map";
import { defineComponent, toRefs, reactive, onMounted } from "vue";
import {
  createArcCurve,
  crateLine,
  crete3DLine,
  createCatmullRom,
  createQuadraticBezier,
  createCurvePath,
} from "@/utils/tree/model";

interface state {
  map: any;
}
export default defineComponent({
  setup() {
    // 初始化 Map
    function init() {
      let container = document.getElementById("map3");
      let map = new Map(container);

      const ArcCurve = createArcCurve();
      const Line = crateLine();
      const Line3D = crete3DLine();
      const LineCatmullRom = createCatmullRom();
      map.addMesh(Line);
      map.addMesh(ArcCurve); //将模型加入场景
      map.addMesh(LineCatmullRom);
      map.addMesh(Line3D);
      map.addMesh(createQuadraticBezier());
      let CurvePath = createCurvePath();
      CurvePath.position.set(0, 0, 50);
      map.addMesh(CurvePath);
      //初始化map
      map.init();
    }
    onMounted(() => {
      console.log("重新创建");
      init();
    });
  },
  beforeUnmount() {
    let dome: any = document.getElementById("map3");
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
  margin-top: 1rem;
}
#map3 {
  width: 1000px;
  height: 400px;
}
</style>