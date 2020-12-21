<template>
  <div class="zhushi">
    <h4>Geometry</h4>
    <ul>
      <li>
        几何体Geometry和缓冲类型几何体BufferGeometry表达的含义相同，只是对象的结构不同，Threejs渲染的时候会先把Geometry转化为BufferGeometry再解析几何体顶点数据进行渲染。
      </li>
      <li>
        Vector3是threejs的三维向量对象,可以通过Vector3对象表示一个顶点的xyz坐标，顶点的法线向量。
      </li>
    </ul>
    <div id="map"></div>
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
    // 使用Vector3定义顶点位置坐标数据
    function Vertor() {
      let container = document.getElementById("map");
      let map = new Map(container);
      const Mesh = VectorLine();
      map.addMesh(Mesh);
      map.init();
    }

    //真实dome加载后
    onMounted(() => {
      Vertor();
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
