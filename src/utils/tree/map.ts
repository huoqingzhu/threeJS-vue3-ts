import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

class Map {
  public camera:THREE.Camera//相机
  public scene:THREE.Scene=new THREE.Scene();//场景
  public renderer:THREE.WebGLRenderer=new THREE.WebGLRenderer({ antialias: true, alpha: true });//渲染
  public controls:any//鼠标控制系统
  public container:HTMLElement|null//渲染场景
  public callBack?:Function
  constructor(container:HTMLElement|null,camera:boolean=true,Light:boolean=true) {
    this.container = container
    // this.callBack=callBack
    /**
     * 相机设置
     */
    let width = this.container!.clientWidth; //窗口宽度
    let height = this.container!.clientHeight; //窗口高度
    let k = (width / height); //窗口宽高比
    let s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
    //创建相机对象 
    // 正向投影
    if(camera){
      this.camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
    }else{//透视投影
      this.camera = new THREE.PerspectiveCamera( 75, width/height, 1, 10000 );
      this.camera.position.z = 1000;
      this.camera.position.x = 133.99999999999972;
      this.camera.position.y = 437.99999999999943;
    }
    //渲染器我们需要阴影效果：
    this.renderer.shadowMap.enabled = true;

   
    /**
     * 创建渲染器对象
     */
    //辅助三维坐标系AxisHelper
    let axisHelper = new THREE.AxesHelper(250);
    this.scene.add(axisHelper);
    this.renderer.setSize(width, height); //设置渲染区域尺寸
    // 初始化控制系统
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    // 是否预先设置光照
    if(Light){
      let point = new THREE.PointLight(0xfff); //代表模型的亮度
      point.position.set(0, 1200, 0); //点光源位置
      this.scene.add(point); //点光源添加到场景中
      //环境光
      let AmbientLight = new THREE.AmbientLight(0xfff);
      this.scene.add(AmbientLight);
    }
  }
  // 初始化
  init = () => {
    //点光源
    // 透视投影
    // this.camera = new THREE.PerspectiveCamera(60, k, 1, 1000);
    this.camera.position.set(0, 300, 200); //设置相机位置
    this.camera.lookAt(this.scene.position); //设置相机方向(指向的场景对象)
    this.renderer.setClearColor(0xEEEEEE, 0.0);//设置背景颜色(0x4169E1, 1)
    this.container!.appendChild(this.renderer.domElement); //body元素中插入canvas对象
    this.render()//执行渲染
    this.createControls()//监听窗口变化
  }
  // 渲染函数
  render = () => {
    requestAnimationFrame(this.render); //请求再次执行渲染函数render
    // this.controls.update();
    // this.callBack?this.callBack():null
    this.renderer.render(this.scene, this.camera);//执行渲染操作

  }
  createControls = () => {
    // 监听浏览器窗口的变化
    addEventListener('resize', (e) => {
      this.renderer.setSize(this.container!.clientWidth, this.container!.clientHeight);
    }, false);
  }
  // 添加动态模型
  addMesh(Mesh:THREE.Object3D|THREE.Sprite) {
    this.scene.add(Mesh)
  }
}
export default Map