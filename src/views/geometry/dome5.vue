<template>
  <div class="zhushi">
    <h4>Face3对象定义Geometry的三角形面</h4>
    <div id="map1"></div>
  </div>
</template>

<script lang="ts">
import Map from "@/utils/tree/map";
import { defineComponent, toRefs, reactive, onMounted } from "vue";
import { VectorLine, Face3 } from "@/utils/tree/model";

interface state {
  map: any;
}
export default defineComponent({
  setup() {
    function face3() {
      let container = document.getElementById("map1");
      let map = new Map(container);
      const Mesh = Face3();
      map.addMesh(Mesh);
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

    return {
      ...toRefs(state),
    };
  },
  beforeUnmount() {
    // let dome: any = document.getElementById("map2");
    // dome.removeChild(dome.children[0]);
    // let dome1: any = document.getElementById("map3");
    // dome1.removeChild(dome.children[0]);
    // let dome2: any = document.getElementById("map4");
    // dome2.removeChild(dome.children[0]);
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
  width: 400px;
  height: 400px;
}
#map1 {
  width: 400px;
  height: 400px;
}
</style>
