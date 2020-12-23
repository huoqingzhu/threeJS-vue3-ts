import * as THREE from "three";
// 生成随机色
function randomColor(): string {
  let colorStr: any = Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .toUpperCase();
  let str = "#" + "000000".substring(0, 6 - colorStr) + colorStr;
  if (str.length < 7) {
    return "#ffffff";
  } else {
    return str;
  }
}
// 创建一个立方体
const createCube=(color:number=0x0000ff):THREE.Mesh=>{
  let cube:THREE.Mesh
  let geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
  let material = new THREE.MeshLambertMaterial({
     color:color ,
  }); 
  cube = new THREE.Mesh(geometry, material); //网格模型对象Mesh
  return cube
}
/**
 * @name 几何体本质 网格模型Mesh是由立方体几何体geometry和材质material两部分构成
 * @param sting  什么类型的几何体
 * @param boolean 是否以顶点颜色计算 出现渐变是因为Threejs通过底层WebGL进行渲染的时候会对顶点的颜色数据进行插值计算
 * @param boolean 是否设置顶点法向量 默认不设置
 * @returns THREE.Mesh|THREE.Points|THREE.Line
 */
const CustomGeometry=(type:string="material",Gradients:boolean=false,Normal:boolean=false):THREE.Mesh|THREE.Points|THREE.Line=>{
  let geometry = new THREE.BufferGeometry(); //创建一个Buffer类型几何体对象
  //类型数组创建顶点数据
  let vertices = new Float32Array([
    0, 0, 0, //顶点1坐标
    50, 0, 0, //顶点2坐标
    0, 100, 0, //顶点3坐标
  
    0, 0, 0, //顶点4坐标
    0, 0, 100, //顶点5坐标
    50, 0, 0, //顶点6坐标
  ]);
  // 设置顶点颜色
  let colors = new Float32Array([
      1, 0, 0, //顶点1颜色
      0, 1, 0, //顶点2颜色
      0, 0, 1, //顶点3颜色
      1, 1, 0, //顶点4颜色
      0, 1, 1, //顶点5颜色
      1, 0, 1, //顶点6颜色
  ]);
  // 设置发向量
  let normals = new Float32Array([
    0, 0, 1, //顶点1法向量
    0, 0, 1, //顶点2法向量
    0, 0, 1, //顶点3法向量
  
    0, 1, 0, //顶点4法向量
    0, 1, 0, //顶点5法向量
    0, 1, 0, //顶点6法向量
  ]);
  // 设置几何体attributes属性的位置normal属性 法向量
   //3个为一组,表示一个顶点的法向量数据
   if(Normal){
     geometry.attributes.normal = new THREE.BufferAttribute(normals, 3)
   }
  
  // 设置几何体attributes属性的颜色color属性 渐变
  geometry.attributes.color = new THREE.BufferAttribute(colors, 3); //3个为一组,表示一个顶点的颜色数据RGB
  // 创建属性缓冲区对象
  let attribue = new THREE.BufferAttribute(vertices, 3); //3个为一组，表示一个顶点的xyz坐标
  // 设置几何体attributes属性的位置属性 
  geometry.attributes.position = attribue;

  //设置材质 
  let material = new THREE.MeshBasicMaterial({
    color: 0x0000ff, //三角面颜色
   //以顶点颜色为准
    side: THREE.DoubleSide //两面可见
  }); //材质对象
  material.visible=true
  if(Gradients){
      material = new THREE.MeshBasicMaterial({
      vertexColors: Gradients,
     //以顶点颜色为准
      side: THREE.DoubleSide //两面可见
    }); //材质对象
  }
  let materialMesh = new THREE.Mesh(geometry, material);
  let mesh:THREE.Mesh|THREE.Points|THREE.Line

  switch(type){
      case "material":
          mesh=materialMesh
          break;
      case "Points":
        //材质对象
        let material1 = new THREE.PointsMaterial({
          // 使用顶点颜色数据渲染模型，不需要再定义color属性
          //color: 0xff0000,
          vertexColors: Gradients, //以顶点颜色为准
          size: 10.0 //点对象像素尺寸
        });
        // 点渲染模式  点模型对象Points
        let points = new THREE.Points(geometry, material1); //点模型对象
          mesh=points
          break;
      case "Line":
         let material2=new THREE.LineBasicMaterial({
          //color:0xff0000 ,//线条颜色
          vertexColors: Gradients, //以顶点颜色为准
          });//材质对象
          let line=new THREE.Line(geometry,material2);//线条模型对象
          mesh=line
          break;
      default:
      mesh=materialMesh
  } 
  return mesh
}
/**
 * 不使用顶点数据创建矩形
 */
const noIndex=():THREE.Mesh=>{
  let geometry = new THREE.BufferGeometry(); //声明一个空几何体对象
  //类型数组创建顶点位置position数据
  let vertices = new Float32Array([
    0,
    0,
    0, //顶点1坐标
    80,
    0,
    0, //顶点2坐标
    80,
    80,
    0, //顶点3坐标

    0,
    0,
    0, //顶点4坐标   和顶点1位置相同
    80,
    80,
    0, //顶点5坐标  和顶点3位置相同
    0,
    80,
    0, //顶点6坐标
  ]);
  // 创建属性缓冲区对象
  let attribue = new THREE.BufferAttribute(vertices, 3); //3个为一组
  // 设置几何体attributes属性的位置position属性
  geometry.attributes.position = attribue;
  let normals = new Float32Array([
    0,
    0,
    1, //顶点1法向量
    0,
    0,
    1, //顶点2法向量
    0,
    0,
    1, //顶点3法向量

    0,
    0,
    1, //顶点4法向量
    0,
    0,
    1, //顶点5法向量
    0,
    0,
    1, //顶点6法向量
  ]);
  let colors = new Float32Array([
    1,
    0,
    0, //顶点1颜色
    0,
    1,
    0, //顶点2颜色
    0,
    0,
    1, //顶点3颜色

    1,
    1,
    0, //顶点4颜色
    0,
    1,
    1, //顶点5颜色
    1,
    0,
    1, //顶点6颜色
  ]);
  // 设置几何体attributes属性的位置normal属性
  geometry.attributes.normal = new THREE.BufferAttribute(normals, 3); //3个为一组,表示一个顶点的xyz坐标
  geometry.attributes.color = new THREE.BufferAttribute(colors, 3); //3个为一组,表示一个顶点的颜色数据RGB
  //设置材质
  let material = new THREE.MeshBasicMaterial({
    vertexColors: true, //三角面颜色
    side: THREE.DoubleSide, //两面可见
    //以顶点颜色为准
  }); //材质对象
  let materialMesh = new THREE.Mesh(geometry, material);
  return materialMesh
}
/**
 * 使用顶点数据创建矩形
 */
const index=():THREE.Mesh=>{
  let geometry = new THREE.BufferGeometry(); //声明一个空几何体对象
  //类型数组创建顶点位置position数据
  let vertices = new Float32Array([
    0,
    0,
    0, //顶点1坐标
    80,
    0,
    0, //顶点2坐标
    80,
    80,
    0, //顶点3坐标
    0,
    80,
    0, //顶点4坐标
  ]);
  // 创建属性缓冲区对象
  let attribue = new THREE.BufferAttribute(vertices, 3); //3个为一组
  // 设置几何体attributes属性的位置position属性
  geometry.attributes.position = attribue;
  let normals = new Float32Array([
    0,
    0,
    1, //顶点1法向量
    0,
    0,
    1, //顶点2法向量
    0,
    0,
    1, //顶点3法向量
    0,
    0,
    1, //顶点4法向量
  ]);
  let colors = new Float32Array([
    1,
    0,
    0, //顶点1颜色
    0,
    1,
    0, //顶点2颜色
    0,
    0,
    1, //顶点3颜色
    1,
    1,
    0, //顶点4颜色
    0,
    1,
    1, //顶点5颜色
    1,
    0,
    1, //顶点6颜色
  ]);
  // 设置几何体attributes属性的位置normal属性
  geometry.attributes.normal = new THREE.BufferAttribute(normals, 3); //3个为一组,表示一个顶点的xyz坐标
  geometry.attributes.color = new THREE.BufferAttribute(colors, 3); //3个为一组,表示一个顶点的颜色数据RGB
  // Uint16Array类型数组创建顶点索引数据
  let indexes = new Uint16Array([
    // 0对应第1个顶点位置数据、第1个顶点法向量数据
    // 1对应第2个顶点位置数据、第2个顶点法向量数据
    // 索引值3个为一组，表示一个三角形的3个顶点
    0,
    1,
    2,
    0,
    2,
    3,
  ]);
  // 索引数据赋值给几何体的index属性
  geometry.index = new THREE.BufferAttribute(indexes, 1); //1个为一组
  //设置材质
  let material = new THREE.MeshBasicMaterial({
    vertexColors: true, //三角面颜色
    side: THREE.DoubleSide, //两面可见
    //以顶点颜色为准
  }); //材质对象
  let materialMesh = new THREE.Mesh(geometry, material);
  return materialMesh
}
/**
 * Vector3定义顶点位置坐标数据
 */
const VectorLine=():THREE.Line=>{
  let geometry = new THREE.Geometry(); //声明一个几何体对象Geometry
  let p1 = new THREE.Vector3(50, 0, 0); //顶点1坐标
  let p2 = new THREE.Vector3(0, 70, 0); //顶点2坐标
  let p3 = new THREE.Vector3(80, 70, 0); //顶点3坐标
  //顶点坐标添加到geometry对象
  geometry.vertices.push(p1, p2, p3);
  // Color对象表示顶点颜色数据
  let color1 = new THREE.Color(0x00ff00); //顶点1颜色——绿色
  let color2 = new THREE.Color(0xff0000); //顶点2颜色——红色
  let color3 = new THREE.Color(0x0000ff); //顶点3颜色——蓝色
  //顶点颜色数据添加到geometry对象
  geometry.colors.push(color1, color2, color3);
  let material=new THREE.LineBasicMaterial({
    //color:0xff0000 ,//线条颜色
    vertexColors:true, //以顶点颜色为准
    });//材质对象
    let line=new THREE.Line(geometry,material);//线条模型对象
    return line
 
}
/**
 * Face3定义Geometry三角面
 */
const Face3=():THREE.Mesh=>{
  let geometry=new THREE.Geometry()
  let p1 = new THREE.Vector3(0, 0, 0); //顶点1坐标
  let p2 = new THREE.Vector3(0, 100, 0); //顶点2坐标
  let p3 = new THREE.Vector3(50, 0, 0); //顶点3坐标
  let p4 = new THREE.Vector3(0, 0, 100); //顶点4坐标
//顶点坐标添加到geometry对象
  geometry.vertices.push(p1, p2, p3,p4);

// Face3构造函数创建一个三角面
  let face1 = new THREE.Face3(0, 1, 2);
  //三角面每个顶点的法向量
  let n1 = new THREE.Vector3(0, 0, -1); //三角面Face1顶点1的法向量
  let n2 = new THREE.Vector3(0, 0, -1); //三角面2Face2顶点2的法向量
  let n3 = new THREE.Vector3(0, 0, -1); //三角面3Face3顶点3的法向量
  // 设置三角面Face3三个顶点的法向量
  face1.vertexNormals.push(n1,n2,n3);
  // 设置三角面渐变（三个顶点颜色不同三角形面渲染的时候会进行颜色插值计算，测到一个颜色渐变效果）
  face1.vertexColors = [
    new THREE.Color(0xffff00),
    new THREE.Color(0xff00ff),
    new THREE.Color(0x00ffff),
  ]
  // 三角面2
  let face2 = new THREE.Face3(0, 2, 3);
   // 设置三角面法向量
  face2.normal=new THREE.Vector3(0, -1, 0);
  face2.color = new THREE.Color(0xff00ff);

  //三角面face1、face2添加到几何体中
  geometry.faces.push(face1,face2);
  // 设置材质
   //设置材质 
   let material = new THREE.MeshBasicMaterial({
    //color: 0x0000ff, //三角面颜色
   //以顶点颜色为准
   vertexColors: true,
    side: THREE.DoubleSide //两面可见
  }); //材质对象
  let materialMesh = new THREE.Mesh(geometry, material);
  return materialMesh
}
/**
 * 创建一个goup对象
 */
const creatGrou=():THREE.Group=>{
    //创建两个网格模型mesh1、mesh2
    let geometry = new THREE.BoxGeometry(20, 20, 20);
    let material = new THREE.MeshLambertMaterial({color: 0xFF1493});
    let group = new THREE.Group();
    let mesh1 = new THREE.Mesh(geometry, material);
    mesh1.material.color.set(0xFF1493)
    mesh1.position.set(50, 0, 0);

    let mesh2 = new THREE.Mesh(geometry, material);
    mesh2.translateX(25);
    //把mesh1型插入到组group中，mesh1作为group的子对象
    group.add(mesh1);
    //把mesh2型插入到组group中，mesh2作为group的子对象
    group.add(mesh2);
    return group
}
/**
 * 创建一个小人模型
 */
const creatPersonModel=()=>{
  // 头部网格模型和组
let headMesh = sphereMesh(10, 0, 0, 0);
headMesh.name = "脑壳"
let leftEyeMesh = sphereMesh(1, 8, 5, 4);
leftEyeMesh.name = "左眼"
let rightEyeMesh = sphereMesh(1, 8, 5, -4);
rightEyeMesh.name = "右眼"
let headGroup = new THREE.Group();
headGroup.name = "头部"
headGroup.add(headMesh, leftEyeMesh, rightEyeMesh);
// 身体网格模型和组
let neckMesh = cylinderMesh(3, 10, 0, -15, 0);
neckMesh.name = "脖子"
let bodyMesh = cylinderMesh(14, 30, 0, -35, 0);
bodyMesh.name = "腹部"
let leftLegMesh = cylinderMesh(4, 60, 0, -80, -7);
leftLegMesh.name = "左腿"
let rightLegMesh = cylinderMesh(4, 60, 0, -80, 7);
rightLegMesh.name = "右腿"
let legGroup = new THREE.Group();
legGroup.name = "腿"
legGroup.add(leftLegMesh, rightLegMesh);
let bodyGroup = new THREE.Group();
bodyGroup.name = "身体"
bodyGroup.add(neckMesh, bodyMesh, legGroup);
// 人Group
let personGroup = new THREE.Group();
personGroup.name = "人"
personGroup.add(headGroup, bodyGroup)
personGroup.translateY(50)


// 球体网格模型创建函数
function sphereMesh(R: number | undefined, x: number, y: number, z: number) {
  let geometry = new THREE.SphereGeometry(R, 25, 25); //球体几何体
  let material = new THREE.MeshPhongMaterial({
    color: 0xFFD700
  }); //材质对象Material
  let mesh = new THREE.Mesh(geometry, material); // 创建网格模型对象
  mesh.position.set(x, y, z);
  return mesh;
}
// 圆柱体网格模型创建函数
function cylinderMesh(R: number | undefined, h: number | undefined, x: number, y: number, z: number) {
  let geometry = new THREE.CylinderGeometry(R, R, h, 25, 25); //球体几何体
  let material = new THREE.MeshPhongMaterial({
    color: 0xFFD700
  }); //材质对象Material
  let mesh = new THREE.Mesh(geometry, material); // 创建网格模型对象
  mesh.position.set(x, y, z);
  return mesh;
}
return personGroup

}
/**
 * 创建圆弧
 */
const createArcCurve=():THREE.Line=>{
    let geometry = new THREE.Geometry(); //声明一个几何体对象Geometry
    //参数：0, 0圆弧坐标原点x，y  100：圆弧半径    0, 2 * Math.PI：圆弧起始角度
    let arc = new THREE.ArcCurve(0, 0, 100, 0, 1* Math.PI,false);
    //getPoints是基类Curve的方法，返回一个vector2对象作为元素组成的数组
    let points = arc.getPoints(50);//分段数50，返回51个顶点
    // setFromPoints方法从points中提取数据改变几何体的顶点属性vertices
    geometry.setFromPoints(points); 
    let material = new THREE.LineBasicMaterial({
      color: 0x000000
    });
    //线条模型对象
    let line = new THREE.Line(geometry, material);
    return line
}
/**
 * 创建直线
 */
const crateLine=():THREE.Line=>{
    let geometry = new THREE.Geometry(); //声明一个几何体对象Geometry
    let p1 = new THREE.Vector3(50, 0, 0); //顶点1坐标
    let p2 = new THREE.Vector3(50, 170, 0); //顶点2坐标
    //顶点坐标添加到geometry对象
    geometry.vertices.push(p1, p2);
    let material = new THREE.LineBasicMaterial({
      color: 0x00FF80,
    });//材质对象
    //线条模型对象
    let line = new THREE.Line(geometry, material);
    return line
}
/**
 * 创建三维直线
 */
const crete3DLine=():THREE.Line=>{
    let geometry = new THREE.Geometry(); //声明一个几何体对象Geometry
    let p1 = new THREE.Vector3(20, 0, 0); //顶点1坐标
    let p2 = new THREE.Vector3(20, 170, 0); //顶点2坐标
    // 三维直线LineCurve3
    let LineCurve = new THREE.LineCurve3(p1, p2);
    // 二维直线LineCurve
    // let LineCurve = new THREE.LineCurve(new THREE.Vector2(50, 0), new THREE.Vector2(0, 70));
    let pointArr = LineCurve.getPoints(10);
    geometry.setFromPoints(pointArr);
    let material = new THREE.LineBasicMaterial({
      color: 0xFF0000,
    });//材质对象
    //线条模型对象
    let line = new THREE.Line(geometry, material);
    return line
}
/**
 * 创建样条曲线
 */
const createCatmullRom=():THREE.Line=>{
    let geometry = new THREE.Geometry(); //声明一个几何体对象Geometry
    // 三维样条曲线  Catmull-Rom算法
    let curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-50, 20, 90),
      new THREE.Vector3(-10, 40, 40),
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(60, -60, 0),
      new THREE.Vector3(70, 0, 80)
    ]);
    //getPoints是基类Curve的方法，返回一个vector3对象作为元素组成的数组
    let points = curve.getPoints(100); //分段数100，返回101个顶点
    // setFromPoints方法从points中提取数据改变几何体的顶点属性vertices
    geometry.setFromPoints(points);
    //材质对象
    let material = new THREE.LineBasicMaterial({
      color: 0x000000
    });
    //线条模型对象
      return new THREE.Line(geometry, material);
}
/**
 * 创建贝塞尔曲线
 */
const createQuadraticBezier=():THREE.Line=>{
  let geometry = new THREE.Geometry(); //声明一个几何体对象Geometry
  let p1 = new THREE.Vector3(-80, 0, 0);
  let p2 = new THREE.Vector3(-40, 100, 0);
  let p3 = new THREE.Vector3(40, 100, 0);
  let p4 = new THREE.Vector3(80, 0, 0);
  // 三维三次贝赛尔曲线
  let curve = new THREE.CubicBezierCurve3(p1, p2, p3, p4);
  let points = curve.getPoints(100); //分段数100，返回101个顶点
  // setFromPoints方法从points中提取数据改变几何体的顶点属性vertices
  geometry.setFromPoints(points);
  let material = new THREE.LineBasicMaterial({
    color: 0x5F9EA0	
  });
  //线条模型对象
    return new THREE.Line(geometry, material);
}
/**
 * 创建组合曲线
 */
const createCurvePath=():THREE.Line=>{
  let geometry = new THREE.Geometry(); //声明一个几何体对象Geometry
  // 绘制一个U型轮廓
  let R = 80;//圆弧半径
  let arc = new THREE.ArcCurve(0, 0, R, 0, Math.PI, true);
  // 半圆弧的一个端点作为直线的一个端点
  let line1 = new THREE.LineCurve(new THREE.Vector2(R, 200), new THREE.Vector2(R, 0));
  let line2 = new THREE.LineCurve(new THREE.Vector2(-R, 0), new THREE.Vector2(-R, 200));
  // 创建组合曲线对象CurvePath
  let CurvePath = new THREE.CurvePath();
  // 把多个线条插入到CurvePath中
  CurvePath.curves.push(line1, arc, line2);
  //分段数200
  let points:any = CurvePath.getPoints(200);
  // setFromPoints方法从points中提取数据改变几何体的顶点属性vertices
  geometry.setFromPoints(points);
  //材质对象
  let material = new THREE.LineBasicMaterial({
    color: 0x000000
  });
  //线条模型对象
  return new THREE.Line(geometry, material);
}
/**
 * 样条曲线生产管道
 */
const createTubeGeometry=():THREE.Mesh=>{
  //创建管道成型的路径(3D样条曲线)
  let path = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-10, -50, -50),
  new THREE.Vector3(10, 0, 0),
  new THREE.Vector3(8, 50, 50),
  new THREE.Vector3(-5, 0, 100)
  ]);
  // path:路径   40：沿着轨迹细分数  2：管道半径   25：管道截面圆细分数
  let geometry = new THREE.TubeGeometry(path, 40, 2, 25);
  let material = new THREE.MeshLambertMaterial({
    color:0x00FF7F ,
 }); 
 return new THREE.Mesh(geometry, material); //网格模型对象Mesh
}
/**
 * CurvePath多段路径生成管道
 */
const createCurvePathTubeGeometry=():THREE.Mesh=>{
    //创建管道成型的路径(3D样条曲线)
    let p1 = new THREE.Vector3(-85.35, -35.36)
    let p2 = new THREE.Vector3(-50, 0, 0);
    let p3 = new THREE.Vector3(0, 50, 0);
    let p4 = new THREE.Vector3(50, 0, 0);
    let p5 = new THREE.Vector3(85.35, -35.36);
    // 创建线条一：直线
    let line1 = new THREE.LineCurve3(p1,p2);
    // 重建线条2：三维样条曲线
    let curve = new THREE.CatmullRomCurve3([p2, p3, p4]);
    // 创建线条3：直线
    let line2 = new THREE.LineCurve3(p4,p5);
    let CurvePath:any = new THREE.CurvePath();// 创建CurvePath对象
    CurvePath.curves.push(line1, curve, line2);// 插入多段线条
    //通过多段曲线路径创建生成管道
    //通过多段曲线路径创建生成管道，CCurvePath：管道路径
    let geometry = new THREE.TubeGeometry(CurvePath, 100, 5, 25, false);
      let material = new THREE.MeshLambertMaterial({
        color:0xFFB6C1 ,
     }); 
     return new THREE.Mesh(geometry, material); //网格模型对象Mesh
}
/**
 * 旋转造型
 */
const createLatheGeometry=():THREE.Mesh=>{
  let shape = new THREE.Shape();//创建Shape对象
    let points = [
        new THREE.Vector2(50,60),
        new THREE.Vector2(25,0),
        new THREE.Vector2(50,-60)
    ];
    shape.splineThru(points);//顶点带入样条插值计算函数
    let splinePoints = shape.getPoints(20);//插值计算细分数20
    //let geometry = new THREE.LatheGeometry(points,30);
    let geometry= new THREE.LatheGeometry(splinePoints,30);//旋转造型
    let material=new THREE.MeshLambertMaterial({
        color:0x0000ff,//三角面颜色
        side:THREE.DoubleSide//两面可见
    });//材质对象
    material.wireframe = true;//线条模式渲染(查看细分数)
    return new THREE.Mesh(geometry,material);//旋转网格模型对象
}
/**
 * 填充顶点构成的轮廓 5边形
 */
const ShapeGeometry=():THREE.Mesh=>{
  let points = [
    new THREE.Vector2(-50, -50),
    new THREE.Vector2(-60, 0),
    new THREE.Vector2(0, 50),
    new THREE.Vector2(60, 0),
    new THREE.Vector2(50, -50),
    new THREE.Vector2(-50, -50),
  ]
  // 通过顶点定义轮廓
  let shape = new THREE.Shape(points);
  // shape可以理解为一个需要填充轮廓
  // 所谓填充：ShapeGeometry算法利用顶点计算出三角面face3数据填充轮廓
  let geometry = new THREE.ShapeGeometry(shape, 25);
  let material=new THREE.MeshLambertMaterial({
      color:0x0000ff,//三角面颜色
      side:THREE.DoubleSide//两面可见
  });//材质对象
  // material.wireframe = true;//线条模式渲染(查看细分数)
  return new THREE.Mesh(geometry,material);//旋转网格模型对象

}
/**
 * 填充绘制圆形.absarc()
 */
const absarcShapeGeometry=():THREE.Mesh=>{
  let shape = new THREE.Shape();
  shape.absarc(0,0,100,0,2*Math.PI,false);//圆弧轮廓
  let geometry = new THREE.ShapeGeometry(shape, 25);
  let material=new THREE.MeshLambertMaterial({
      color:0xcccccc,//三角面颜色
      side:THREE.DoubleSide//两面可见
  });//材质对象
  // material.wireframe = true;//线条模式渲染(查看细分数)
  return new THREE.Mesh(geometry,material);//旋转网格模型对象
}
/**
 * 绘制矩形shap
 */
const rectangleShape=():THREE.Mesh=>{
   // 通过shpae基类path的方法绘制轮廓（本质也是生成顶点）
   let shape = new THREE.Shape();
   // 四条直线绘制一个矩形轮廓
   shape.moveTo(0,0);//起点
   shape.lineTo(0,100);//第2点
   shape.lineTo(100,100);//第3点
   shape.lineTo(100,0);//第4点
   shape.lineTo(0,0);//第5点
    let geometry = new THREE.ShapeGeometry(shape, 25);
     let material=new THREE.MeshLambertMaterial({
         color:0x0000ff,//三角面颜色
         side:THREE.DoubleSide//两面可见
     });//材质对象
     // material.wireframe = true;//线条模式渲染(查看细分数)
     return new THREE.Mesh(geometry,material);//旋转网格模型对象
}
/**
 * 绘制内轮廓 打洞 外轮廓圆弧嵌套三个内圆弧轮廓 arc
 */
const arcShape=():THREE.Mesh=>{
    // 一个外轮廓圆弧嵌套三个内圆弧轮廓
    let shape = new THREE.Shape(); //Shape对象
    //外轮廓
    shape.arc(0, 0, 100, 0, 2 * Math.PI,false);
    // 内轮廓1
    let path1 = new THREE.Path();
    path1.arc(0, 0, 40, 0, 2 * Math.PI,false);
    // 内轮廓2
    let path2 = new THREE.Path();
    path2.arc(80, 0, 10, 0, 2 * Math.PI,false);
    // 内轮廓3
    let path3 = new THREE.Path();
    path3.arc(-80, 0, 10, 0, 2 * Math.PI,false);
    //三个内轮廓分别插入到holes属性中
    shape.holes.push(path1, path2, path3);
    let geometry = new THREE.ShapeGeometry(shape, 25);
    let material=new THREE.MeshLambertMaterial({
             color:0x0000ff,//三角面颜色
             side:THREE.DoubleSide//两面可见
      });//材质对象
    // material.wireframe = true;//线条模式渲染(查看细分数)
    return new THREE.Mesh(geometry,material);//旋转网格模型对象
}
/**
 * 多轮廓同时填充
 */
const manyShape=():THREE.Mesh=>{
     let shape=new THREE.Shape();
     shape.arc(-50,0,30,0,2*Math.PI,false);
     // 轮廓对象2
     let shape2=new THREE.Shape();
     shape2.arc(50,0,30,0,2*Math.PI,false);
     // 轮廓对象3
     let shape3=new THREE.Shape();
     shape3.arc(0,50,30,0,2*Math.PI,false);
     // 多个shape作为元素组成数组,每一个shpae可以理解为一个要填充的轮廓
     let geometry = new THREE.ShapeGeometry([shape,shape2,shape3], 30);
     let material=new THREE.MeshLambertMaterial({
      color:0x00FF7F,//三角面颜色
      side:THREE.DoubleSide//两面可见
     });//材质对象
     // material.wireframe = true;//线条模式渲染(查看细分数)
     return new THREE.Mesh(geometry,material);//旋转网格模型对象
}
/**
 * 创建拉伸网格模型
 */
const createExtrude=()=>{
       let shape = new THREE.Shape();
       /**四条直线绘制一个矩形轮廓*/
       shape.moveTo(0,0);//起点
       shape.lineTo(0,100);//第2点
       shape.lineTo(100,100);//第3点
       shape.lineTo(100,0);//第4点
       shape.lineTo(0,0);//第5点
       let geometry = new THREE.ExtrudeGeometry(//拉伸造型
           shape,//二维轮廓
           //拉伸参数
           {
              depth:120,//拉伸长度
              bevelEnabled:false//无倒角
          }
      );
      let material=new THREE.MeshLambertMaterial({
        color:0xFF4500,//三角面颜色
        side:THREE.DoubleSide//两面可见
       });//材质对象
       // material.wireframe = true;//线条模式渲染(查看细分数)
       return new THREE.Mesh(geometry,material);//旋转网格模型对象
}
/**
* 创建扫描网格模型
*/
const createScanning=():THREE.Mesh=>{
     let shape = new THREE.Shape();
     /**四条直线绘制一个矩形轮廓*/
     shape.moveTo(0,0);//起点
     shape.lineTo(0,10);//第2点
     shape.lineTo(10,10);//第3点
     shape.lineTo(10,0);//第4点
     shape.lineTo(0,0);//第5点
     /**创建轮廓的扫描轨迹(3D样条曲线)*/
     let curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3( -10, -50, -50 ),
        new THREE.Vector3( 10, 0, 0 ),
        new THREE.Vector3( 8, 50, 50 ),
        new THREE.Vector3( -5, 0, 100)
     ]);
     let geometry = new THREE.ExtrudeGeometry(//拉伸造型
        shape,//二维轮廓
        //拉伸参数
        {
            bevelEnabled:false,//无倒角
            extrudePath:curve,//选择扫描轨迹
            steps:50//扫描方向细分数
        }
     );
     let material=new THREE.MeshLambertMaterial({
       color:0xFF4500,//三角面颜色
       side:THREE.DoubleSide//两面可见
      });//材质对象
      // material.wireframe = true;//线条模式渲染(查看细分数)
      return new THREE.Mesh(geometry,material);//旋转网格模型对象
}
  /**
   * 
   * @param {JSON} json 地图的JSON
   * @returns {THREE.Group}模型的数据
   */
 const  createGeojson=(json:any,height:number):THREE.Group=> {
   const group=new THREE.Group()

  json.features.forEach((element:any) => {
    let shapeArayy:THREE.Shape[]=[]
    const color=randomColor()
    element.geometry.coordinates.forEach((item:any)=> {
      item.forEach((value: any) => {
        let arr =value
        let points:any[]=[];
        // 转化为Vector2构成的顶点数组
        arr.forEach((elem:any)=> {
          points.push(new THREE.Vector2(elem[0],elem[1]))
        });
        // 样条曲线生成更多的点
        // let SplineCurve = new THREE.SplineCurve(points)
        // let shape = new THREE.Shape(SplineCurve.getPoints(100));//生成指定长度的点
        let shape = new THREE.Shape(points);
        shapeArayy.push(shape)
      });
     });
    let geometry = new THREE.ExtrudeGeometry(//拉伸造型
      shapeArayy,//二维轮廓
      //拉伸参数
      {
         depth:height,//拉伸长度
         bevelEnabled:false//无倒角
     }
    );
    // geometry.center();//几何体居中
    geometry.scale(5,5,2);//几何体缩放
    let material = new THREE.MeshPhongMaterial({
      color: color,
      side: THREE.DoubleSide //两面可见
    }); //材质对象
    const node= new THREE.Mesh(geometry, material)
    node.name=element.properties.name
    group.add(node)
    });
    return group
}  
/**
 * 添加纹理贴图
 */
const createTexture=():THREE.Mesh=>{
    // 纹理贴图映射到一个矩形平面上

    let geometry = new THREE.BoxGeometry(400, 400, 400); //立方体
    let texture = new THREE.TextureLoader().load(
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1435880887,2953173287&fm=26&gp=0.jpg"
    );

    // 立即使用纹理进行材质创建
    let material = new THREE.MeshBasicMaterial({
      map: texture,
    });
    let mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
    return mesh
}
/**
 * 添加数组材质
 */
const createMaterialArr=():THREE.Mesh=>{
  let geometry = new THREE.BoxGeometry(100, 100, 100); //立方体
  // let geometry = new THREE.PlaneGeometry(204, 102, 4, 4); //矩形平面
  // let geometry = new THREE.SphereGeometry(60, 25, 25); //球体
  // let geometry = new THREE.CylinderGeometry(60, 60, 25,25); //圆柱
  //
  // 材质对象1
  let material_1 = new THREE.MeshPhongMaterial({
    color: 0xffff3f
  })
  let texture = new THREE.TextureLoader().load(
    "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1435880887,2953173287&fm=26&gp=0.jpg"
  );
  // 材质对象2
  let material_2 = new THREE.MeshLambertMaterial({
    map: texture, // 设置纹理贴图
    // wireframe:true,
  });
  // 设置材质数组  数据顺序:右 左 上 下  前后
  let materialArr = [material_2, material_2, material_2, material_2, material_1, material_1];
  
  // 设置数组材质对象作为网格模型材质参数
  let mesh = new THREE.Mesh(geometry, materialArr); //网格模型对象Mesh
  return mesh
}
/**
 * 
 * @param wrapS 阵列（重复）
 * @param offset 偏移0-1
 * @param rotation 纹理旋转
 */
const createWrapTexture=(wrapS:boolean=false,offset?:{x:number,y:number},rotation?:number):THREE.Mesh=>{
  // 纹理贴图映射到一个矩形平面上
  let geometry = new THREE.BoxGeometry(100, 100, 100); //立方体
  let texture = new THREE.TextureLoader().load("grass.png");
   if(wrapS){
       // 纹理阵列
       texture.wrapS = THREE.RepeatWrapping;
       texture.wrapT = THREE.RepeatWrapping;
       // uv两个方向纹理重复数量
       texture.repeat.set(4, 2);
   }
  // 纹理偏移
   if(offset){
      texture.offset = new THREE.Vector2(offset.x, offset.y)
   }
    // 纹理旋转
   if(rotation){  
      texture.rotation = Math.PI/rotation;
      // 设置纹理的旋转中心，默认(0,0)
      texture.center.set(0.5,0.5);
   }
  // 立即使用纹理进行材质创建
  let material = new THREE.MeshBasicMaterial({
    map: texture,
  });
  return new THREE.Mesh(geometry, material); //网格模型对象Mesh
}
/**
 * 草地阵列重复排列
 */
const createGrass=():THREE.Mesh=>{
  let geometry = new THREE.PlaneGeometry(1000, 1000); //矩形平面
  // 加载树纹理贴图
  let texture = new THREE.TextureLoader().load("grass.png");
  // 设置阵列
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  // uv两个方向纹理重复数量
  texture.repeat.set(10, 10);
  let material = new THREE.MeshLambertMaterial({
    map: texture,
    side:THREE.DoubleSide//两面可见
  });
  let mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh

  mesh.rotateX(-Math.PI / 2);
  return mesh
}
/**
 * 创建一个纹理动画
 */
const createRepeatOffset=()=>{
  let curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-80, -40, 0),
    new THREE.Vector3(-70, 40, 0),
    new THREE.Vector3(70, 40, 0),
    new THREE.Vector3(80, -40, 0)
  ]);
  let tubeGeometry = new THREE.TubeGeometry(curve, 100, 2, 50, false);
  let textureLoader = new THREE.TextureLoader();
  let texture = textureLoader.load( "run.png");
  // 设置阵列模式为 RepeatWrapping
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT=THREE.RepeatWrapping
  // 设置x方向的偏移(沿着管道路径方向)，y方向默认1
  //等价texture.repeat= new THREE.Vector2(20,1)
  texture.repeat.x = 20;
  let tubeMaterial = new THREE.MeshPhongMaterial({
    map: texture,
    transparent: true,
  });
  let mesh = new THREE.Mesh(tubeGeometry, tubeMaterial); //网格模型对象Mesh
  return {mesh,texture}
}
/**
 * 创建canvs贴图
 */
const createCanvas=():THREE.Mesh=>{
     let canvas = document.createElement("canvas");
     canvas.width = 512;
     canvas.height = 128;
     let c:any = canvas.getContext('2d');
     // 矩形区域填充背景
     c.fillStyle = "#ff00ff";
     c.fillRect(0, 0, 512, 128);
       c.beginPath();
     // 文字
     c.beginPath();
     c.translate(256,64);
     c.fillStyle = "#000000"; //文本填充颜色
     c.font = "bold 48px 宋体"; //字体样式设置
     c.textBaseline = "middle"; //文本与fillText定义的纵坐标
     c.textAlign = "center"; //文本居中(以fillText定义的横坐标)
     c.fillText("THREE-VUE3-TS", 0, 0);
       // canvas画布对象作为CanvasTexture的参数重建一个纹理对象
     // canvas画布可以理解为一张图片
     let texture = new THREE.CanvasTexture(canvas);
     //打印纹理对象的image属性
     // console.log(texture.image);
     //矩形平面
     let geometry = new THREE.PlaneGeometry(128, 32);
     
     let material = new THREE.MeshPhongMaterial({
       map: texture, // 设置纹理贴图
       side:THREE.DoubleSide//两面可见
     });
     // 创建一个矩形平面网模型，Canvas画布作为矩形网格模型的纹理贴图
      return new THREE.Mesh(geometry, material);
}
/**
 * 创建视频贴图
 */
const createVideo=()=>{
   let video:any = document.createElement('video')
   video.src = "./test.mp4"; // 设置视频地址
   video.autoplay = "autoplay"; //要设置播放
   // video对象作为VideoTexture参数创建纹理对象
   let texture = new THREE.VideoTexture(video)
   let geometry = new THREE.PlaneGeometry(300, 71); //矩形平面
   let material = new THREE.MeshPhongMaterial({
    map: texture, // 设置纹理贴图
   }); 
  return new THREE.Mesh(geometry, material); //网格模型对象Mesh
}

/**
 * 法线贴纸
 */
const createNormalMap=()=>{
  let geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry

  // TextureLoader创建一个纹理加载器对象，可以加载图片作为几何体纹理
var textureLoader = new THREE.TextureLoader();
// 加载法线贴图
var textureNormal = textureLoader.load('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgss0.baidu.com%2F7Po3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fcc11728b4710b912bf5b8a23cbfdfc0393452250.jpg&refer=http%3A%2F%2Fgss0.baidu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611327996&t=ea30c499821fade29cf4736b1e42fa23');
var material = new THREE.MeshPhongMaterial({
  color: 0xd4acf9,
  normalMap: textureNormal, //法线贴图
  //设置深浅程度，默认值(1,1)。
  normalScale: new THREE.Vector2(3, 3),
}); //材质对象Material
return new THREE.Mesh(geometry, material); //网格模型对象Mesh
}
export {
  createCube,
  CustomGeometry,
  noIndex,
  index,
  VectorLine,
  Face3,
  creatGrou,
  creatPersonModel,
  createArcCurve,
  crateLine,
  crete3DLine,
  createCatmullRom,
  createQuadraticBezier,
  createCurvePath,
  createTubeGeometry,
  createCurvePathTubeGeometry,
  createLatheGeometry,
  ShapeGeometry,
  absarcShapeGeometry,
  rectangleShape,
  arcShape,
  manyShape,
  createExtrude,
  createScanning,
  createGeojson,
  createTexture,
  createMaterialArr,
  createWrapTexture,
  createGrass,
  createRepeatOffset,
  createCanvas,
  createVideo,
  createNormalMap
}