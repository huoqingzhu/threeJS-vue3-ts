<template>
  <div class="zhushi">
    <h4>顶点概念、几何体结构</h4>
    <div id="map2"></div>
    <div id="map3"></div>
  </div>
</template>

<script lang="ts">
// 引入tree.js
import * as THREE from "three";
import Map from "@/utils/tree/map"
import { defineComponent, toRefs ,reactive,onMounted} from "vue";
import {CustomGeometry} from "@/utils/tree/model"
interface state {
  map:any
}
export default defineComponent({
  name:"dome2",
  setup() {
    console.log("dome2")
    let state:state = reactive({
     map:null
  });
  // 
  function init(ID:string,Gradients:boolean,Normal:boolean){
     let container = document.getElementById(ID);
     let map = new Map(container);
     let mesh=CustomGeometry("material",Gradients,Normal)//生成三角面
     let Points=CustomGeometry("Points",Gradients,Normal)//生成点模型
     let Line=CustomGeometry("Line",Gradients,Normal)//生成线模型
     map.addMesh(mesh)
    //  state.map.addMesh(Points)
    //  state.map.addMesh(Line)
     //初始化map  
     map.init()
  }
   //真实dome加载后
   onMounted(() => {
      //自己设置颜色 
      init("map2",false,false)
      //以顶点为为准
      init("map3",true,true)
  })
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
 width:400px;
 height: 400px;
}
#map3{
width:400px;
 height: 400px;
}
</style>
