<template>
  <div class="zhushi">
    <h3>
      Group它几乎和Object3D是相同的，其目的是使得组中对象在语法上的结构更加清晰。
    </h3>
    <ul>
      <p>下面场景就是两个Mesh组成一个Group添加到场景里面</p>
    </ul>
    <div id="maps"></div>
  </div>
</template>
<script lang="ts">
import Vue, { defineComponent, onMounted } from "vue";
import Map from "@/utils/tree/map";
import { creatGrou } from "@/utils/tree/model";

export default defineComponent({
  setup() {
    function init() {
      let container = document.getElementById("maps");
      let map = new Map(container);
      let group = creatGrou(); //生成三角面

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
