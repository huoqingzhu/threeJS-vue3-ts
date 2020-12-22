<template>
  <div class="zhushi">
    <h1>
      <a href="http://www.webgl3d.cn/Three.js/" target="_blank"
        >学习资料参考郭隆邦老师的博客</a
      >
    </h1>

    <h4>
      本页面引入了tree.js,并且做了一个简单的dome(页面路径:views/main/main.vue)
    </h4>
    <div id="map"></div>
  </div>
</template>

<script lang="ts">
// 引入tree.js
import * as THREE from "three";
// 引入鼠标控制系统
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { defineComponent, toRefs } from "vue";
export default defineComponent({
  name: "Main",
  setup() {},
  mounted() {
    console.log("重新创建");
    // 拿到容器
    let container = document.getElementById("map");
    /**
     * 创建场景对象Scene
     */
    let scene = new THREE.Scene();
    /**
     * 创建网格模型
     */
    // let geometry = new THREE.SphereGeometry(60, 40, 40); //创建一个球体几何对象
    let geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
    let material = new THREE.MeshLambertMaterial({
      color: 0x0000ff,
    }); //材质对象Material
    let mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
    scene.add(mesh); //网格模型添加到场景中
    /**
     * 光源设置
     */
    //点光源
    let point = new THREE.PointLight(0xffffff);
    point.position.set(400, 200, 300); //点光源位置
    scene.add(point); //点光源添加到场景中
    //环境光
    let ambient = new THREE.AmbientLight(0x444444);
    scene.add(ambient);
    // console.log(scene)
    // console.log(scene.children)
    /**
     * 相机设置
     */
    let width = container!.clientWidth; //窗口宽度
    let height = container!.clientHeight; //窗口高度
    let k = width / height; //窗口宽高比
    let s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
    //创建相机对象
    let camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
    camera.position.set(200, 300, 200); //设置相机位置
    camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
    /**
     * 创建渲染器对象
     */
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height); //设置渲染区域尺寸
    renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
    container!.appendChild(renderer.domElement); //body元素中插入canvas对象
    //鼠标控制系统
    let controls = new OrbitControls(camera, renderer.domElement);
    // 监听浏览器窗口的变化
    addEventListener(
      "resize",
      (e) => {
        renderer.setSize(width, height);
      },
      false
    );
    // renderer.render(scene, camera);
    let render = () => {
      requestAnimationFrame(render); //请求再次执行渲染函数render
      // this.controls.update();
      renderer.render(scene, camera); //执行渲染操作
    };
    render();
  },
  beforeUnmount() {
    let dome: any = document.getElementById("map");
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
#map {
  width: 700px;
  height: 700px;
}
</style>
