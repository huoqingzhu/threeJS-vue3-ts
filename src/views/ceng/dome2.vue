<template>
  <div class="zhushi">
    <h3>层级模型节点命名、查找、遍历</h3>
    <ul>
      <li>模型命名(.name属性)</li>
      <li>树结构层级模型</li>
      <li>递归遍历方法.traverse()</li>
      <li>查找某个具体的模型.getObjectById()、.getObjectByName()</li>
    </ul>
    <div id="maps"></div>
  </div>
</template>
<script lang="ts">
import Vue, { defineComponent, onMounted } from "vue";
import Map from "@/utils/tree/map";
import { creatPersonModel } from "@/utils/tree/model";

export default defineComponent({
  setup() {
    function init() {
      let container = document.getElementById("maps");
      let map = new Map(container);
      let group = creatPersonModel(); //生成三角面
      map.addMesh(group);
      //初始化map
      map.init();
    }
    //真实dome加载后
    onMounted(() => {
      init();
    });
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
}
</style>
